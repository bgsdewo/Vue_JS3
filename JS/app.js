const countValue = document.getElementById("value")
const countIncrease = document.getElementById("increase")
const countDecrease = document.getElementById("decrease")
let count = 0

countValue.textContent = count

countIncrease.addEventListener("click", () => {
    count++
    countValue.textContent = count
})

countDecrease.addEventListener("click", () => {
    count--
    countValue.textContent = count
})