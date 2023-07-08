let numCheck = +prompt('Введите положительное число');

let num = numCheck;

let a = false;

if (num === 1) {
    console.log('false');

} else if (num === 2) {
        console.log('true');
        

} else if (num > 2) {

    for (let i = 2; i < numCheck; i++) {

    a = (num % i === 0);

    console.log(i);

    if (a === true) {
        console.log('false');
        break;
    } 
} 

if (a === false) {
    console.log('true');
}  
}
