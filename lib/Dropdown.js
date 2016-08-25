// Dropdown File
var $ = require("jquery");

var Dropdown = this;

Dropdown.init = function(){
  Dropdown.dropdownElement = $("[data-js='dropdown']");
  Dropdown.dropdownTextElement = $("[data-js='dropdown__text']");

  Dropdown.dropdownTextElement.on("click", Dropdown.handleTextClick);

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", Dropdown.onLoadXHR);
  xhr.open("GET", "http://www.omdbapi.com/?s=Batman");
  xhr.send();
}

Dropdown.handleTextClick = function(e){
  Dropdown.dropdownElement.addClass("dropdown--open");
}

Dropdown.onLoadXHR = function(responseJSON){
  // do things with data...
}
