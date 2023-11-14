const money = document.querySelector('#money')

$(money).mask('000.000.000.000.000,00', {reverse: true});


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
