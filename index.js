// declaracion de variables


const get = (element) => document.querySelector(element)
const getAll = (element) => document.querySelectorAll(element)
const $questions = getAll(".faq__span")
const $answers = getAll(".faq__ul")
const $nav = get(".header__nav")


$questions.forEach( (question, index) => {
    question.addEventListener("click", ()=>{
        $answers[index].classList.toggle("faq__ul--active")
    })
})


window.addEventListener("scroll", (e)=>{
    
e.currentTarget.scrollY > 100?  $nav.classList.add("nav--active"): $nav.classList.remove("nav--active")
})