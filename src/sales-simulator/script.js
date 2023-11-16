const money = document.querySelector('#money')
const card = document.querySelector('#card')
const payment = document.querySelector('#payment')
const installment = document.querySelector('#installment')
const btnSubmit = document.querySelector('.submit')
const form = document.querySelector('#form')

// ERROR-MESSAGE
const errorMoney = document.querySelector('.error-money')
const errorCard = document.querySelector('.error-card')
const errorPayment = document.querySelector('.error-payment')
const errorInstallment = document.querySelector('.error-installment')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    validateValue()
    validateCard()
    validatePaymentMethods()
    validateInstallment()
})

function setError(input, errorMessage) {
    input.style.border = '1px solid #dc2626'
    errorMessage.style.display = 'block'
}

function removeError(input, errorMessage) {
    input.style.border = ''
    errorMessage.style.display = 'none'
}

function validateValue() {
    $(money).mask('000.000.000.000.000,00', {reverse: true})

    if (money.value.length === 0)
    {
        setError(money, errorMoney)
    }
    else
    {
        removeError(money, errorMoney)
    }
}

function validateCard() {
    let value = card.options[card.selectedIndex].value

    if (value === '')
    {
        setError(card, errorCard)
    }
    else
    {
        removeError(card, errorCard)
    }
}

function validatePaymentMethods() {
    let value = payment.options[payment.selectedIndex].value

    if (value === '')
    {
        setError(payment, errorPayment)
    }
    else
    {
        removeError(payment, errorPayment)
    }
}

function handleToggleJuros() {
    const isActive = document.querySelector('#juros')

    if (isActive.checked === true)
    {
        return document.querySelector('.toggle-juros').innerText = 'Sim'
    }
    else
    {
        return document.querySelector('.toggle-juros').innerText = 'Não'
    }
}

function validateInstallment() {
    let value = installment.options[installment.selectedIndex].value

    installment.addEventListener(key)

    if (value === '')
    {
        setError(installment, errorInstallment)
    }
    else
    {
        removeError(installment, errorInstallment)
    }
}
