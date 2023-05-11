

function simple(n) {
    const start = performance.now();
    let simple_arr = []
    for (let i = 1; i <= n; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j < i) {
                break;
            } else if (j === i) {
                simple_arr.push(i);
            }
        }
    }
    const end = performance.now();
    const time_ = (end - start);
    return time_
}

console.log(simple(process.argv[2]))

