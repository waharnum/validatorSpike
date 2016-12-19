const validator = require('html-validator');

var state1 = {
    name: "State 1",
    htmlContent:
    "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div></body></html>"
}

var state2 = {
    name: "State 2",
    htmlContent:
    "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div><form role='application'></form></body></html>"
}

var state3 = {
    name: "State 3",
    htmlContent:
    "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div><form></form></body></html>"
}

var state4 = {
    name: "State 4",
    htmlContent:
    "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div><form><label for='username'>User name</label><input type='text'></form></body></html>"
}

// Passes
var state5 = {
    name: "State 5",
    htmlContent:
    "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div><form><label for='username'>User name</label><input type='text' id='username'></form></body></html>"
}

var states = [
    state1, state2, state3, state4, state5
];

var validate = function (state) {
    var options = {
        data: state.htmlContent
    };

    validator(options)
      .then((data) => {
        console.log("Result of validating " + state.name);
        console.log(data)
      })
      .catch((error) => {
          console.log("Error when trying to validate " + state.name);
        console.error(error)
      })
}

while (states.length > 0) {
    currentState = states.pop();
    validate(currentState);
}
