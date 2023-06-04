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
    
    
        let { name, quote, id } = req.body;
        let error = {};
      
        if (!name) {
          error.name = "Please provide a name";
        }
        if (!quote) {
          error.quote = "Please provide a quote";
        }
      
        let isError = Object.keys(error).length > 0;
      
        if (isError) {
          CrudMongo.find()
            .then((crudmongos) => {
              res.render("index", { crudmongos, error });
            })
            .catch((e) => {
              console.log(e);
              res.json({
                message: "An error occurred",
              });
            });
        } else {
          if (id) {
            CrudMongo.findOneAndUpdate(
              { _id: id },
              {
                $set: {
                  name,
                  quote,
                },
              }
            )
              .then(() => {
                return CrudMongo.find();
              })
              .then((crudmongos) => {
                res.render("index", { crudmongos, error: {} });
              })
              .catch((e) => {
                console.log(e);
                res.json({
                  message: "An error occurred",
                });
              });
          } else {
            let crudmongo = new CrudMongo({
              name,
              quote,
            });
      
            crudmongo
              .save()
              .then(() => {
                return CrudMongo.find();
              })
              .then((crudmongos) => {
                res.render("index", { crudmongos, error: {} });
              })
              .catch((e) => {
                console.log(e);
                res.json({
                  message: "An error occurred",
                });
              });
          }
        }
      };
      
  
  
  
  


exports.updateQuotes = (req,res) => {
    let {name,quotes} = req.body;
    let {id} = req.params;
    CrudMongo.findOneAndUpdate(
        {_id: id},
        {
            $set:{
                name,quote
            }
        },
        {new: true}
    ) .then(crudmongos => {
        res.json(crudmongos)
    })
    .catch(e => {
        console.log(e)
        res.json({
            message: "error occurred"
        })
    })
}

exports.deleteQuotes = (req,res) =>{
    let {id} = req.params;
    CrudMongo.findOneAndDelete({_id: id})
    .then(() => {
        CrudMongo.find()
        .then((crudmongos => {
            res.render('index',{crudmongos,error:{}})
        }))
        
    })
    .catch(e => {
        console.log(e)
        res.json({
            message: "error occurred"
        })
    })
}