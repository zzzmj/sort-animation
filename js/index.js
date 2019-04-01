const wrap = document.querySelector('.container')
let items = document.querySelectorAll('.container .item')

const createDivs = (arr) => {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        const style = {
            text: arr[i],
            height: arr[i] + 'px',
            left: i*40 + 'px'
        }
        updateItems(items[i], style)
    }
}

const updateItems = (item, style) => {
    const { height, left, text } = style
    item.style.height = height
    item.style.left = left
    item.innerHTML = text
}

const sort = async (arr, cb) => {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            items[j].classList.add('active')
            items[j+1].classList.add('active')
            await sleep(window.fps)
            if (arr[j] > arr[j + 1]) {
                // p.innerHTML += `交换第${j}位和第${j+1}位<br>`
                await swap(arr, j, j+1)
            }
            items[j].classList.remove('active')
            items[j+1].classList.remove('active')
        }
        items[len-i-1].classList.add('fix')
    }
    // 执行完成后，调用回调函数
    cb()
}

const handleSpeed = () => {
    $('.input-speed').addEventListener('change', function(event) {
        const value = event.target.value
        const speed = (100-value) * 10
        window.fps = speed
    })
}

const sortRun = (arr) => {
    // flag的作用是让用户只能点击一次，直到排序完成后，才能继续点击
    let flag = true
    const btnRun = $('.button-run')
    btnRun.addEventListener('click', function() {
        if (flag) {
            btnRun.classList.add('active')
            sort(arr, function() {
                btnRun.classList.remove('active')
                flag = true
            })
            flag = false
        }
    })
}

const __main = async () => {
    const arr = randomArr(50, 400, 15)
    window.fps = 1000
    createDivs(arr)
    handleSpeed()
    sortRun(arr)
}

__main()

