const sort = async (arr, cb) => {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            items[j].classList.add('active')
            items[j+1].classList.add('active')
            await sleep(window.fps)
            if (arr[j] > arr[j + 1]) {
                await swap(arr, j, j+1)
            }
            items[j].classList.remove('active')
            items[j+1].classList.remove('active')
        }
        items[len-i-1].classList.add('fix')
    }
    cb()
}