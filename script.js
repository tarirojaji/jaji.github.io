const project = document.querySelectorAll('.project')
const projectImg = document.querySelectorAll('.project-img')

function projectWrapper() {

    projectImg.forEach((i) => {
        i.addEventListener('mouseenter', projectHover);
        i.addEventListener('mouseleave', projectHover);
    })
}

function projectHover(e) {
    if (e.type === "mouseenter") {
        console.log('in')
        e.target.style.opacity = '100%';


    } else if (e.type === "mouseleave") { 
        console.log('out')
        e.target.style.opacity = '0%';

    }
}

projectWrapper()

