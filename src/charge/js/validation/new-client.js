const form = document.querySelector('#form')
const account = document.querySelector('#account')

const buttonSubmit = document.querySelector('.btn')


// ERROR-messages
const errorAccount = document.querySelector('.error-type-account')


form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    validateAccount()

    console.log('validado...')
});

function setError(input, errorMessage) {
    input.style.border = '1px solid #dc2626'
    errorMessage.style.display = 'block'
}

function removeError(input, errorMessage) {
    input.style.border = ''
    errorMessage.style.display = 'none'
}

function validateAccount() {
    let time = null

    if (account.value.length > 0)
    {
        account.addEventListener('keyup', () => {
            clearTimeout(time)

            if (account.value.length === 8)
            {
                account.value += '-'
            }

            time = setTimeout(() => {
                if (account.value.length !== 10)
                {
                    setError(account, errorAccount)
                }
                else
                {
                    removeError(account, errorAccount)
                }
            }, 1000)
        })
    }
    else
    {
        setError(account, errorAccount)
        document.querySelector('.digit-account').style.display = 'none'
    }
}
