const isPrime = (num) => {

if (num <= 1) {
    return false;

} else if (num === 2) {
    return true;
    
} else if (num > 2) {

    for (let i = 2; i < num; i++) {

        console.log(i);
    
        if (!(num % i)) {
            return false;
    
        } else if (i === (num - 1)) {
    
            return true;
        }
    }
}
}

console.log(isPrime(5));

// const rez = isPrime(5);
// console.log('rez: ', rez);






// const isPrime = (num) => {
//     for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//     return false;
//     }
//     }
//     return num > 1;
//     };

//     console.log(isPrime(2))






























// let numCheck = +prompt('Введите положительное число');

// let num = numCheck;

// let a = false;

// if (num === 1) {
//     console.log('false');

// } else if (num === 2) {
//         console.log('true');
        

// } else if (num > 2) {

//     for (let i = 2; i < numCheck; i++) {

//     a = (num % i === 0);

//     console.log(i);

//     if (a === true) {
//         console.log('false');
//         break;
//     } 
// } 

// if (a === false) {
//     console.log('true');
// }  
// }
