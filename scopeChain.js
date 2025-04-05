var y = 24;

function favFunction() {
    var x = 667;
    var anotherFavFunction = function () {
        console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
    }

    var yetAnotherFavFunction = function () {
        console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
    }

    anotherFavFunction();
    yetAnotherFavFunction();
}
favFunction();

/*

As you can see in the code above, if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.

If the variable is not found in the global space as well, a reference error is thrown.



*/