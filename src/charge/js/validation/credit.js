const money = document.querySelector('#money')

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

function handleTaxasSplitReceipt() {
    const isActive = document.querySelector('#taxas-split')

    if (isActive.checked === true)
    {
        return document.querySelector('.taxas-split').innerText = 'Sim'
    }
    else
    {
        return document.querySelector('.taxas-split').innerText = 'Não'
    }
}

function handleTaxasRecurrent() {
    const isActive = document.querySelector('#taxas-recurrent')

    if (isActive.checked === true)
    {
        return document.querySelector('.taxas-recurrent').innerText = 'Sim'
    }
    else
    {
        return document.querySelector('.taxas-recurrent').innerText = 'Não'
    }
}
