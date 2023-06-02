const CrudMongo = require('./CrudMongo');

exports.getAllquotes = (req,res) => {
    CrudMongo.find()
        .then(crudmongos => {
            res.render('index',{crudmongos,error: {}})
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: "error occurred"
            })
        })

}
exports.createQuotes = (req, res) => {
    console.log(req.body);
    let {name,quote} = req.body;
    let crudmongo = new CrudMongo({
      name,
      quote
    })
    crudmongo.save()
    .then(
      () => console.log("One entry added"), 
      (err) => console.log(err)
  );
  
  
  }