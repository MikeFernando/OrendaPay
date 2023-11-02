const nome = document.querySelector('.name')
const email = document.querySelector('.email')
const numero = document.querySelector('.cpf-cnpj')
const phone = document.querySelector('.phone')
const password = document.querySelector('.password')

// # ERROR MESSAGE
const errorName = document.querySelector('.error-name')
const errorEmail = document.querySelector('.error-email')
const errorCPFCNPJ = document.querySelector('.error-cpf')
const errorPhone = document.querySelector('.error-phone')
const errorPassword = document.querySelector('.error-password')

const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

let time = null

function setError(input, error) {
    input.style.border = '1px solid #dc2626'
    error.style.display = 'block'
}

function removeError(input, error) {
    input.style.border = ''
    error.style.display = 'none'
}

function validateName() {
    if (nome.value.length > 0)
    {
        nome.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (nome.value.length < 3)
                {
                    setError(nome, errorName)
                }
                else
                {
                    removeError(nome, errorName)
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

function validateCPFCNPJ() {
    let CPF = numero.value
    let CNPJ = numero.value

    if (CPF.length === 11)
    {
        // Formata CPF (###.###.###-##)
        numero.value = CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        CPF = numero.value.replace(/[.-]/g, "")
    }
    else if (CNPJ.length === 17)
    {
        // Formata CNPJ (##.###.###/####-##)
        CNPJ = numero.value.replace(/[.-]/g, "")
        numero.value = CNPJ.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    // Validar apenas se o input conter valores
    if (numero.value.length > 0)
    {
        const numberCPF = numero.value
        const numberCNPJ = numero.value

        numero.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (numberCPF.length !== 14 && numberCNPJ.length !== 18)
                {
                    setError(numero, errorCPFCNPJ)
                }
                else
                {
                    removeError(numero, errorCPFCNPJ)
                }
            }, 1500)
        })
    }
    else
    {
        setError(numero, errorCPFCNPJ)
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

