document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu")
})

document.querySelector("#menu-item-home a").addEventListener("mouseover", () => {
    let lineHome = document.querySelector(".menu div")
    lineHome.style.backgroundColor = "rgb(150, 0, 150)"
})

document.querySelector("#menu-item-home a").addEventListener("mouseout", () => {
    let lineHome = document.querySelector(".menu div")
    lineHome.style.backgroundColor = "#000"
})

document.querySelector("#qtd").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-y").addEventListener("change", atualizarPreco)
document.querySelector("#layout-n").addEventListener("change", atualizarPreco)
document.querySelector("#time").addEventListener("change", function () {
    const vlrTime = document.querySelector("#time").value
    document.querySelector("label[for=time]").innerHTML = `Time: ${vlrTime} weeks`
    atualizarPreco()
})

function atualizarPreco() {
    const qtd = document.querySelector("#qtd").value
    const temJS = document.querySelector("#js").checked
    const precisaLayout = document.querySelector("#layout-y").checked
    const vlrTime = document.querySelector("#time").value
    let price = qtd * 100
    if (temJS) price *= 1.1
    if (precisaLayout) price += 500
    const txTime = 1 - vlrTime * 0.1
    price = price + (price * txTime)
    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2).replace('.', ',')}`
}