

function simple(n) {

    const start = performance.now()

    let simple_arr = []

    for (let i = 2; simple_arr.length < n; i++) {

        let flag = false

        for (let j = 0; j < simple_arr.length; j++) {

            if ((i % simple_arr[j] === 0) && (i / simple_arr[j] !== 1)) {
                flag = true
                break
            }    
        }
        if (flag === false) {
            simple_arr.push(i)
        }
    }

    const end = performance.now()
    const time_ = (end - start)
    console.log(time_)
    
    return simple_arr
}

console.log(simple(process.argv[2]))

