exports.testDataFromDb =  function(req, res, next){
    console.log("starting test function", new Date());
    var connection = mysql.createConnection({
        host: process.env.host  ,
        user:  process.env.user,
        password:  process.env.password,
        database:  process.env.database
        });
        var sql = "PUT SOMETHING HERE";
  
    connection.query(sql, function (error, results, fields) {
        if (error) { 
            console.log("Error getting data:-"+ error);
            return res.status(500).send({
                status: false,
                message: 'Cannot fetch data from the database. ERROR:-'+error.message
            });
        }
        console.log("Query executed:-"+ JSON.stringify(results));
        connection.end();
        res.header('Access-Control-Allow-Origin', '*')
       res.header('Access-Control-Allow-Headers', 'content-type')
        res.header( 'Content-Type', 'application/json')
        if(results.length === 0 ){
            return res.status(400).send({
                status: true,
                message:"No Content"})
        }
        return res.status(200).send({
                        status: true,
                        results
                        
                    })
        });
}