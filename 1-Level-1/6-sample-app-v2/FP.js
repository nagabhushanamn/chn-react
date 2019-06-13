


// function f1() {
//     console.log('before :: LOG')
//     console.log("f1()");
//     console.log('after :: LOG')
// }

// function f2() {
//     console.log('before :: LOG')
//     console.log("f2()")
//     console.log('after :: LOG')
// }

// f1();
// console.log()
// f2();

/*

    design issues
        ==> code scattering / duplication
        ==> code tangling / tight-coupling

        soln:

        ==> proxy patterns ( on objects )
        ==> function composition

            

*/


function f1() {
    console.log("f1()");
}
function f2() {
    console.log("f2()");
}

// Higher-Order-Function  ==> Higher-Order-Programming
function logWrapper(f) {
    return function () {
        console.log("before :: LOG")
        f();
        console.log("after :: LOG")
    }
}
function secWrapper(f) {
    return function () {
        console.log("before :: sec")
        f();
    }
}


var f1WithLog = logWrapper(f1);
// f1WithLog();
var f2WithLog = logWrapper(f2);
// f2WithLog();

var f1WithLogAndSec=secWrapper(f1WithLog);
f1WithLogAndSec();