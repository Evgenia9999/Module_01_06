let numCheck = +prompt('Введите положительное число');

    if (numCheck === 2) {
        console.log('true');

    } else if (numCheck === 1) {
            console.log('false');

    } else {
        const isPrime = () => {

            num = numCheck;
            
            for (let i = 2; i < num; i++) {
        
                if ((num % i) === 0) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        console.log(isPrime(numCheck));
    }

