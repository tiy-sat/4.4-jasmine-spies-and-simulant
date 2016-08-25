// Example spec
// Import your files here... don't forget "../lib/<fileName>.js"

// Get mock lib and require it
var jsdom = require("jsdom");

describe("Dropdown", function(){
  // Defined with null references to then have access to them
  //   inside of my tests
  var dropdownElement;
  var dropdownTextElement;
  var simulant
  var Dropdown;

  beforeEach(function(){
    document = jsdom.jsdom(`<body>
      <nav data-js="dropdown">
        <span data-js="dropdown__text">click here to see dropdown</span>
      </nav>
    </body>`);
    // not needed for now (it is a hack to let jquery work in tests)
    window = document.defaultView;

    // both of these have to be required because of dependencies on window
    simulant = require("simulant");
    Dropdown = require("../lib/Dropdown.js");

    // Spying on event to stub out function calls
    //   in order to determine when it is called
    //   we have added `andCallThrough()` to have
    //   our spy ALSO run the actual implementation code.

    // Stub/mocking out XHR class
    // To suppress errors that have nothing do with our implementation
    //   We did not write these... not our code not writing tests
    XMLHttpRequest = function(){
      this.addEventListener = function(){

      }
      this.open = function(){

      }
      this.send = function(){

      }
    };

    // Keep in mind this HAS to be before `init()`
    spyOn(Dropdown, "handleTextClick").and.callThrough();
    spyOn(Dropdown, "onLoadXHR");
    Dropdown.init();
  });

  it("has a dropdown element", function(){
    expect(Dropdown.dropdownElement).toBeDefined();
  });

  it("has a dropdown element with the text of 'click here to see dropdown'", function(){
    expect(Dropdown.dropdownTextElement.text()).toEqual("click here to see dropdown");
  });

  describe("when clicked", function(){
    beforeEach(function(){
      // Fake a click on the element
      // jquery attribute selectors return lists of elements
      //  as attribute selectors can equal more than one
      //  we are specifying the first in the list.
      simulant.fire(Dropdown.dropdownTextElement[0], "click");
    });

    it("dropdown click handler is called", function(){
      expect(Dropdown.handleTextClick).toHaveBeenCalled();
      // that our click handler is called
    });

    it("dropdown menu opens", function(){
      expect(Dropdown.dropdownElement.hasClass("dropdown--open")).toEqual(true);
    });
  });
});
