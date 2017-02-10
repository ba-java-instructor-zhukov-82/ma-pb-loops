function read(id) {

    return document.getElementById(id).value;
}


function print(data) {

    return document.getElementById('output').innerHTML = data;
}

//-----------------------------------------------------------

function whileLoopExample() {

    var number = +(read('number'));

    var numberCopy = number;
    var digits = 0;
    while(numberCopy > 0) {
        numberCopy = Math.floor(numberCopy / 10);
        ++digits;
    }

    var output = 'Number ' + number + ' has ' + digits + ' digits!';
    print(output);
}