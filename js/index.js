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

