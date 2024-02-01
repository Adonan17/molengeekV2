
export function navbar() {
    window.addEventListener('scroll', function() {
        this.document.querySelector('nav').classList.toggle("sticky", window.scrollY > 0)
    })

    document.querySelector('.fa-bars').addEventListener('click', function() {
        document.querySelector('.burger-menu').style.transform = "scaleY(1)"
    })

    document.querySelector('.fa-x').addEventListener('click', function() {
        document.querySelector('.burger-menu').style.transform = "scaleY(0)"
    })
}
