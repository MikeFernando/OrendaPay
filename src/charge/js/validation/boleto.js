function setError(input, error) {
    input.style.border = '1px solid #dc2626'
    error.style.display = 'block'
}

function removeError(input, error) {
    input.style.border = ''
    error.style.display = 'none'
}

function handleRemoveTag() {
    const tag = document.querySelector('.tag')
    const inputName = document.querySelector('#name')

    tag.classList.add('hidden')
    inputName.classList.remove('w-[20%]')
}

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

// validate date
$('#date').mask('00/00/0000');

// validate value
$('#money').mask('000.000.000.000.000,00', {reverse: true})

// validate juros
$('#juros').mask('000.000.000.000.000,00', {reverse: true})

// validate juros
$('#multa').mask('000.000.000.000.000,00', {reverse: true})

// desconto
$('#discount').mask('000.000.000.000.000,00', {reverse: true})


function handleToggleEmail() {
    const isActive = document.querySelector('#email')

    if (isActive.checked === true)
    {
        return document.querySelector('.toggle-email').innerText = 'Sim'
    }
    else
    {
        return document.querySelector('.toggle-email').innerText = 'Não'
    }
}

function handleToggleWhatsapp() {
    const isActive = document.querySelector('#whatsapp')

    if (isActive.checked === true)
    {
        return document.querySelector('.toggle-whatsapp').innerText = 'Sim'
    }
    else
    {
        return document.querySelector('.toggle-whatsapp').innerText = 'Não'
    }
}

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
