var mongoose = require('mongoose');

/* GET users listing. */
mongoose.connect("mongodb://localhost/photoalbum")
.then(function() {
  console.log("Database successfully connected");
})
.catch(function(e) {
  console.log(e);
});

let schema = mongoose.Schema({
  name: String,
  avatar: String
});

module.exports = mongoose.model('photos', schema);
