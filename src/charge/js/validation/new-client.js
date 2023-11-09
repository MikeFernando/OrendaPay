const form = document.querySelector('#form')
const account = document.querySelector('#account')
const numero = document.querySelector('#cpf-cnpj')

const buttonSubmit = document.querySelector('.btn')


// ERROR-messages
const errorAccount = document.querySelector('.error-type-account')
const errorCPFCNPJ = document.querySelector('.error-cpf')

form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    validateAccount()
    validateCPFCNPJ()

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
        let time = null

        const numberCPF = numero.value
        const numberCNPJ = numero.value

        numero.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (numberCPF.length !== 14 && numberCNPJ.length !== 18)
                {
                    setError(numero, errorCPFCNPJ)
                    errorCPFCNPJ.value.classList.add('block')
                }
                else
                {
                    removeError(numero, errorCPFCNPJ)
                }
            }, 1000)
        })
    }
    else
    {
        setError(numero, errorCPFCNPJ)
    }
}
