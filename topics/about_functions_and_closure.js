module("About Functions And Closure (topics/about_functions_and_closure.js)");

test("defining functions directly", function() {
    var result = "a";
    changeResult(); //hoisting funciona con function statement (declarations)
    function changeResult() {
      result = prueba0 + "b";
        equal("undefinedb", result, 'what is the value of result?');
      var prueba0 = 'prueba0'
        // the ability to access a variables defined in the same scope as the function is known as 'closure'
        result = "b";
    };
    //changeResult();
    equal("b", result, 'what is the value of result?');
    equal("undefined", typeof(prueba0), "is prueba0 available in this context?");
});

test("assigning functions to variables", function() {
    var triple = function(input) {
        return input * 3;
    };
    equal(12, triple(4), 'what is triple 4?');
});

test("self invoking functions", function() {
    var publicValue = "shared";
    var prueba = "prueba";

    // self invoking functions are used to provide scoping and to alias variables
    //An IIFE (Immediately Invoked Function Expression) -  Self-Executing Anonymous Function
    (function(pv) {
        var secretValue = "password";
        equal("shared", pv, 'what is the value of pv?');
        equal("string", typeof(secretValue), "is secretValue available in this context?");
        equal("string", typeof(publicValue), "is publicValue available in this context?");
        equal("string", typeof(prueba), "is prueba available in this context?");
        publicValue = 'prueba2'
    })(publicValue);
        //var publicValue = "shared"; //hoisting no funciona con function Expression or IIFE

    equal("undefined", typeof(secretValue), "is secretValue available in this context?");
    equal("string", typeof(publicValue), "is publicValue available in this context?");
    equal("prueba2", publicValue, 'what is the value of publicValue?');
});

test("arguments array", function() {
    var add = function() {
        var total = 0;
        for(var i = 0; i < arguments.length; i++) {
            // complete the implementation of this method so that it returns the sum of its arguments
            total += arguments[i]
        }
        return total;
    };

    equal(15, add(1,2,3,4,5), "add 1,2,3,4,5");
    equal(9, add(4,7,-2), "add 4,7,-2");
});

test("using call to invoke function",function(){
    var invokee = function( message ){
        return this + message;
    };

    //another way to invoke a function is to use the call function which allows
    //you to set the callers "this" context.  Call can take any number of arguments:
    //the first one is always the context that this should be set to in the called
    //function, and the arguments to be sent to the function,multiple arguments are separated by commas.
    var result = invokee.call("I am this!", "Where did it come from?");

    equal("I am this!Where did it come from?", result, "what will the value of invokee's this be?");
});

test("using apply to invoke function",function(){
    var invokee = function( message1, message2 ){
        return this + message1 + message2;
    };

    //similar to the call function is the apply function.  Apply only has two
    //arguments:  the first is the context that this should be set to in the called
    //function and the second is the array of arguments to be passed into the called function.
    var result = invokee.apply("I am this!", ["I am arg1","I am arg2"]);

    equal("I am this!I am arg1I am arg2", result, "what will the value of invokee's this be?");
});
