let section = document.querySelectorAll('section');
let navLI = document.querySelectorAll('.container ul li');
// console.log(navLI)

window.addEventListener('scroll', function () {
    let currentPosition = "";
    section.forEach(sec => {
        let sectionTop = sec.offsetTop;
        let sectionHeight = sec.clientHeight;

        if (pageYOffset >= sectionTop-sectionHeight/9.99) {
            currentPosition = sec.getAttribute("id");
        }
    })

    navLI.forEach( li => {
        li.classList.remove("active");
        if (li.classList.contains(currentPosition)) {
            li.classList.add("active");
        }
    });
})