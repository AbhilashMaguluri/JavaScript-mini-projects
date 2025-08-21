function CheckPrime() {
    let num = parseInt(document.getElementById("numberInput").value);
    if (num < 2) {
        document.getElementById("result").innerText = num + " is NOT prime.";
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById("result").innerText = isPrime ? num + " is PRIME" : num + " is NOT prime";
}


function FirstNPrimes() {
    let n = parseInt(document.getElementById("numberInput").value);
    let primes = [];
    let count = 0, num = 2;

    while (count < n) {
        let i, j;
        for (i = 2; i <= num; i++) {
            if (num % i === 0) break;
        }
        if (i === num) {
            primes.push(num);
            count++;
        }
        num++;
    }

    document.getElementById("result").innerText = `First ${n} primes: ${primes.join(", ")}`;
}


function PrimesUptoN() {
    let limit = parseInt(document.getElementById("numberInput").value);
    let primes = [];

    for (let num = 2; num <= limit; num++) {
        let fact = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) fact++;
        }
        if (fact === 2) primes.push(num);
    }

    document.getElementById("result").innerText = `Primes up to ${limit}: ${primes.join(", ")}`;
}
