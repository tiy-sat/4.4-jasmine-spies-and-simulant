// var document = {
//   addEventListener: function("type", callback){
//     document["type"] = callaback;
//   },
//   click: callback
// };
var Dropdown = require("./Dropdown.js");


document.addEventListener("DOMContentLoaded", function(){
  Dropdown.init();
})
