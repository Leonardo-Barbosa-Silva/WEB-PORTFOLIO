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