// 1
// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function arr(){
    var sum = [];
    for(var i=1; i <=255; i++){
        sum.push(i);
    }
    return sum;
}
arr()


// 2
// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function evenSum(){
    var sum=0;
    for(var i=1; i<=1000;i++){
        if(i % 2 == 0){
            sum+= i;
        }
    }
    return sum;
}

evenSum();


// 3
// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function oddSum(){
    var sum=0;
    for(var i=1; i<5000;i++){
        if(i % 2 !== 0)
            sum-= i;
    }
    return sum;
}


// 4
// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sumArr(arr){
   var sum=0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

sumArr([2,4,15,6]);


// 5
// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function maxArr(arr){
    var max=o;
    for(var i=0;i,arr.length;i++{
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

maxArr([3,5,1,2,17]);


// // 6
// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function average(arrAverage){
    var sum = 0;
    for(var i=0; i < arrAverage.length; i++){
        var num = arrAverage[i];
        sum= sum + num;
    }
    return sum / arrAverage.length;
}

var avg = average([1,3,5,7,20])
console.log(avg);


// // 7
// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function odd(){
    var oddarr = [];
    for (var i=1; i <=50; i++){
        if (i % 2 !== 0){
            oddarr.push(i) 
        }
    }
    console.log(oddarr);
    return oddarr;
}

odd()

// // 8
// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greater(arr,y){
    count = 0;
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i]
        if(arr[i] > y){
            count++;
        }
    }
}
greater([1,3,5,7], 3);
console.log(count)


// 9
// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(arr){
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i]
    }
}
let array = [1,5,10,-2]
square(array);
console.log(array)

// 10
// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negatives(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
}
let array = [1,5,10,-2]
negatives(array);
console.log(array)


// 11
// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function MaxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
            if(arr[i] > max){
                max = arr[i]; 
            }
    sum+= i;  
    }
console.log("max is", max, "min is", min)
console.log(sum / arr.length)
}
MaxMinAvg([1,5,10,-2]);


// 12
// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(arr){
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
    }
let array = [1,5,10,-2]
swap(array);
console.log(array)

// 13
// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numbersString(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i]<0){
            arr[i] = "dojo";
        }
    }
}
let array = [-1,-3,2]
numbersString(array);
console.log(array)