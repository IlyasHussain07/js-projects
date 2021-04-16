// var num = 18;

// if(num%2 == 0) {
//     console.log("It is a Even Number");
// }
// else {
//     console.log("It is a odd number");
// }


var num_01;

var output;
console.log("start");


function checking() {
    num_01 = parseInt(document.getElementById('num').value);

    if(num_01 % 2 == 0) {
        console.log('it is even number');
        output = 'It is a Even number';
        document.getElementById('result').value=output;
    }
    else {
        output = 'It is a Odd number';
        document.getElementById('result').value=output;
    }
    return false;
}
console.log("End");