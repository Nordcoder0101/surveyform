const url = require('url')

module.exports = {
  index: function(req, res){
    res.render('index')
  },
  processForm: (req, res) =>{
    console.log(req.body.name)
    req.query.name = req.body.name
    req.query.location = req.body.location
    req.query.language = req.body.language
    req.query.comment = req.body.comment
    res.redirect(url.format({
      pathname: '/result',
      query: req.query,
    }))
  },
  result: (req, res) => {
    console.log(req.query.name)
    let data = {
      name: req.query.name,
      location: req.query.location,
      language: req.query.language,
      comment: req.query.comment
    }
    res.render('result', { data: data })
  }
}