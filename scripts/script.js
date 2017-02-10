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
    while (numberCopy > 0) {
        numberCopy = Math.floor(numberCopy / 10);
        ++digits;
    }

    var output = 'Number ' + number + ' has ' + digits + ' digits!';
    print(output);
}

function doWhileLoopExample() {

    var iteration = 1;

    do {
        alert('Doing some program functionality. Iteration ' + iteration);

        var continueExecution = confirm('Do you want to continue?');
        if (!continueExecution) {
            break;
        }

        ++iteration;
    } while (true);
}

function forLoopExample() {

    var result = '';
    for (var i = 100; i >= 1; --i) {
        var separator = i == 1 ? '' : ', ';
        result += i + separator;
        if ((i - 1) % 10 == 0)
            result += '<br/>';
    }

    print(result);
}

function forEachLoopExample() {
              // 0  1  2  3  4  5  6  7  8  9
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var result = '';
    for (var index in array) {
        var separator = index == array.length - 1 ? '' : ', ';
        result += array[index] + separator;
        if (index % 5 == 0) {
            alert('test');
            result += '<br/>';
        }
    }

    print(result);
}

function findMinInArray() {

    var array = [2, 8, -30, 7, 4, -10];

    var min = array[0];
    for(var index in array) {
        min = min < array[index] ? min : array[index];
    }

    print('min value in array is: ' + min);
}