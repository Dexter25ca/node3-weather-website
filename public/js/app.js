console.log('Client side javascript file is loaded!')

const myHeaders = new Headers()
myHeaders.append("Access-Control-Allow-Origin", "*")

const myInit = {
    mode: "cors",
    headers: myHeaders
}

/* fetch('https://puzzle.mead.io/puzzle', myInit).then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
}) */

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = "Loading, please wait ..."
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location, myInit).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})