const validator = require('html-validator');

// Passes
var state1 = "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div></body></html>";

// Fails - bad role for form
var state2 = "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div><form role='application'></form></body></html>"

// Passes
var state3 = "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div><form></form></body></html>"

// Fails - label not attached to input
var state4 = "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div><form><label for='username'>User name</label><input type='text'></form></body></html>";

// Passes
var state5 = "<!DOCTYPE html><html><head><title>My Page</title></head><body><div>Closed div</div><form><label for='username'>User name</label><input type='text' id='username'></form></body></html>";

var states = [state1, state2, state3, state4, state5]

var validate = function (state) {
    var options = {
        data: state
    };

    validator(options)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
}

while (states.length > 0) {
    currentState = states.pop();
    validate(currentState);
}
