const form = document.querySelector('#form')
const banks = document.querySelector('#banks')
const typeAccount = document.querySelector('#type-account')
const agency = document.querySelector('#agency')
const account = document.querySelector('#account')
const nome = document.querySelector('#nome')
const numero = document.querySelector('.cpf-cnpj')
const money = document.querySelector('#money')
const date = document.querySelector('#date')

const submit = document.querySelector('.btn')

// ERROR
const bankError = document.querySelector('.error-bank')
const typeAccountError = document.querySelector('.error-type-account')
const agencyError = document.querySelector('.error-agency')
const accountError = document.querySelector('.error-account')
const errorName = document.querySelector('.error-name')
const errorCPFCNPJ = document.querySelector('.error-cpf')
const moneyError = document.querySelector('.error-money')
const errorDate = document.querySelector('.error-date')

form.addEventListener('submit', (evt) => {
    evt.preventDefault()

    validateBank()
    validateTypeAccount()
    validateAgency()
    validateAccount()
    validateName()
    validateCPFCNPJ()
    validateMoney()
    validateDate()
})

function setError(input, errorMessage) {
    input.style.border = '1px solid #dc2626'
    errorMessage.style.display = 'block'
}

function removeError(input, errorMessage) {
    input.style.border = ''
    errorMessage.style.display = 'none'
}

function validateBank() {
    let value = banks.options[banks.selectedIndex].value

    if (value === '')
    {
        setError(banks, bankError)
    }
    else
    {
        removeError(banks, bankError)
    }
}

function validateTypeAccount() {
    let value = typeAccount.options[typeAccount.selectedIndex].value

    if (value === '')
    {
        setError(typeAccount, typeAccountError)
    }
    else
    {
        removeError(typeAccount, typeAccountError)
    }
}

function validateAgency() {
    let time = null

    if (agency.value.length > 0)
    {
        agency.addEventListener('keyup', () => {
            clearTimeout(time)

            time = setTimeout(() => {
                if (agency.value.length <= 3)
                {
                    setError(agency, agencyError)
                    document.querySelector('.digit-agency').style.display = 'none'
                }
                else
                {
                    removeError(agency, agencyError)
                    document.querySelector('.digit-agency').style.display = 'block'
                }
            }, 1000)
        })
    }
    else
    {
        setError(agency, agencyError)
        document.querySelector('.digit-agency').style.display = 'none'
    }
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
                    setError(account, accountError)
                    document.querySelector('.digit-account').style.display = 'none'
                }
                else
                {
                    removeError(account, accountError)
                    document.querySelector('.digit-account').style.display = 'block'
                }
            }, 1000)
        })
    }
    else
    {
        setError(account, accountError)
        document.querySelector('.digit-account').style.display = 'none'
    }
}

function validateName() {
    let time = null

    nome.value = nome.value.replace(/\d/g, '')

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
            }, 1000)
        })
    }
    else
    {
        setError(nome, errorName)
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

function validateMoney() {
    let time = null

    if (money.value.length > 0)
    {
        money.addEventListener('keyup', () => {
            clearTimeout(time)

            $('#money').mask('000.000.000.000.000,00', {reverse: true})

            time = setTimeout(() => {
                if (money.value.length === 0)
                {
                    setError(money, moneyError)
                }
                else
                {
                    removeError(money, moneyError)
                }
            }, 1000)
        })
    }
    else
    {
        setError(money, moneyError)
    }


}

function validateDate() {
    if (date.value)
    {
        if (!date.value)
        {
            setError(date, errorDate)
        }
        else
        {
            removeError(date, errorDate)
        }
    }
    else
    {
        setError(date, errorDate)
    }
}



