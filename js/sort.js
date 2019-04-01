const wrap = document.querySelector('.container')
const p = document.querySelector('.container p')
const items = document.querySelectorAll('.container .item')
const arr = [50, 250, 150, 350, 200]
const len = 5

for (let i = 0; i < len; i++) {
    items[i].innerHTML = arr[i]
    items[i].style.height = arr[i] + 'px'
    items[i].style.left = i*60 + 'px'
}

const swap = (arr, i, j) => {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t

    // 思路
    let s = items[i].style.left
    items[i].style.left = items[j].style.left
    items[j].style.left = s
}

const sleep = (duration, items) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

const transition = (duration) => {
    return new Promise((resolve, reject) => {

        resolve()
    })
}

const sort = async () => {
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            items[j].classList.add('active')
            items[j+1].classList.add('active')
            await sleep(1000)
            if (arr[j] > arr[j + 1]) {
                p.innerHTML += `交换第${j}位和第${j+1}位<br>`
                console.log('需要交换')
                // var tmp = arr[j];  //Temporary variable to hold the current number
                // arr[j] = arr[j+1]; //Replace current number with adjacent number
                // arr[j+1] = tmp
                swap(arr, j, j+1)
                await sleep(1000)
            } else {
                console.log('不需要交换')
            }
            
            items[j].classList.remove('active')
            items[j+1].classList.remove('active')
        }

    }
    console.log(arr)
}

sort()