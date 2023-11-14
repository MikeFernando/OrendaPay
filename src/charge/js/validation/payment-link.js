const form = document.querySelector('#form')
const money = document.querySelector('#money')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    console.log(money.value)
})

$(money).mask('000.000.000.000.000,00', {reverse: true});


function handleToggleSplitReceipt() {
    const isActive = document.querySelector('#split-receipt')

    if (isActive.checked === true)
    {
        return document.querySelector('.toggle-split').innerText = 'Sim'
    }
    else
    {
        return document.querySelector('.toggle-split').innerText = 'Não'
    }
}

function handleToggleRecurrent() {
    const isActive = document.querySelector('#recurrent')

    if (isActive.checked === true)
    {
        return document.querySelector('.toggle-recurrent').innerText = 'Sim'
    }
    else
    {
        return document.querySelector('.toggle-recurrent').innerText = 'Não'
    }
}
