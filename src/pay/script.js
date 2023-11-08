const form = document.querySelector('#form')
const input = document.querySelector('#input')
const errorInput = document.querySelector('.error-input')

form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    handlePay()

    console.log(input.value)
})

function setError(input, errorMessage) {
    input.style.border = '1px solid #dc2626'
    errorMessage.style.display = 'block'
}

function removeError(input, errorMessage) {
    input.style.border = ''
    errorMessage.style.display = 'none'
}

function handlePay() {
    let time = null

    if (input.value.length > 0)
    {
        input.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (input.value.length < 3)
                {
                    setError(input, errorInput)
                    document.querySelector('.btn').disabled = true
                }
                else
                {
                    removeError(input, errorInput)
                    document.querySelector('.btn').disabled = false
                }
            }, 1000)
        })
    }
    else
    {
        setError(input, errorInput)
    }
}
