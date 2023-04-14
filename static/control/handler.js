const form = document.querySelector('.contact-form')
const submitBtn = document.querySelector('.submit-btn')
const inputText = document.querySelector('input[type=text]')
const inputEmail = document.querySelector('input[type=email]')
const input = document.querySelectorAll('input')
const inputMessage = document.querySelector('textarea')

const inputValue = []

input.forEach(el => {
    el.onchange = e => {
        inputValue.push(e.target.value)
    }
})

const handleSubmit = e => {
    e.preventDefault()
    console.log(inputValue);
}

submitBtn.addEventListener('click', handleSubmit)