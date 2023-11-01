const name = document.querySelector('.name')
const email = document.querySelector('.email')
const cpf = document.querySelector('.cpf')
const phone = document.querySelector('.phone')
const password = document.querySelector('.password')

const errorName = document.querySelector('.error-name')
const errorEmail = document.querySelector('.error-email')
const errorCPF = document.querySelector('.error-cpf')
const errorPhone = document.querySelector('.error-phone')
const errorPassword = document.querySelector('.error-password')

let time = null
const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const cpfOrCnpjRegex =  /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

function setError(input, error) {
    input.style.border = '1px solid #dc2626'
    error.style.display = 'block'
}

function removeError(input, error) {
    input.style.border = ''
    error.style.display = 'none'
}

function validateName() {
    if (name.value.length > 0)
    {
        name.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (name.value.length < 3)
                {
                    setError(name, errorName)
                }
                else
                {
                    removeError(name, errorName)
                }
            }, 1500)
        })
    }
    else
    {
        setError(nome, errorName)
    }
}

function validateEmail() {
    if (email.value.length > 0)
    {
        email.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (!emailRegex.test(email.value))
                {
                    setError(email, errorEmail)
                }
                else
                {
                    removeError(email, errorEmail)
                }
            }, 1500)
        })
    }
    else
    {
        setError(email, errorEmail)
    }
}

function validateCPF() {
    cpf.addEventListener('keypress', () => {
        let cpfLength = cpf.value.length

        if (cpfLength === 3 || cpfLength === 7)
        {
            cpf.value += '.'
        }
        else if (cpfLength === 11)
        {
            cpf.value += '-'
        }
    })

    if (cpf.value.length > 0)
    {
        cpf.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (cpf.value.length !== 14)
                {
                    setError(cpf, errorCPF)
                }
                else
                {
                    removeError(cpf, errorCPF)
                }
            }, 1500)
        })
    }
    else
    {
        setError(cpf, errorCPF)
    }
}

function validatePhone() {
    phone.addEventListener('input', () => {
        // Impedir teclas que NÃO sejam números
        let clearValue = phone.value.replace(/\D/g, "").substring(0, 11)

        // Dividir string em array de caracteres individuais
        let numbersArray = clearValue.split("")

        let numberFormatted = ''

        // Format DD (XX)
        if (numbersArray.length > 0)
        {
            numberFormatted += `(${numbersArray.slice(0,2).join("")})`
        }
        // 5 números após o DD (XX) XXXXX
        if (numbersArray.length > 2)
        {
            numberFormatted += ` ${numbersArray.slice(2,7).join("")}`
        }
        // Adicionar - e o restante do número
        if (numbersArray.length > 7)
        {
            numberFormatted += `-${numbersArray.slice(7,11).join("")}`
        }

        phone.value = numberFormatted
    })

    if (phone.value.length > 0)
    {
        phone.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (phone.value.length !== 15)
                {
                    setError(phone, errorPhone)
                }
                else
                {
                    removeError(phone, errorPhone)
                }
            }, 1500)
        })
    }
    else
    {
        setError(phone, errorPhone)
    }
}

function validatePassword() {
    if (password.value.length > 0)
    {
        password.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (password.value.length < 8)
                {
                    setError(password, errorPassword)
                }
                else
                {
                    removeError(password, errorPassword)
                }
            }, 1000)
        })
    }
    else
    {
        setError(password, errorPassword)
    }

}
