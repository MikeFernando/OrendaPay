const input = document.querySelector('#key')

const errorInput = document.querySelector('.error-input')

function setError(input, errorMessage) {
    input.parentElement.style.border = '1px solid #dc2626'
    errorMessage.style.display = 'block'
}

function removeError(input, errorMessage) {
    input.parentElement.style.border = ''
    errorMessage.style.display = 'none'
}

function validateInputKey() {
    let time = null

    if (input.value.length > 0)
    {
        input.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (input.value.length < 3)
                {
                    setError(input, errorInput)
                }
                else
                {
                    removeError(input, errorInput)
                }
            }, 1000)
        })
    }
    else
    {
        setError(input, errorInput)
    }
}
