const inputs = document.querySelectorAll('.otp-box input');
const validate = document.querySelector('#btn-validate')

inputs.forEach((input, index) => {
    input.dataset.index = index
    input.addEventListener('paste', handleOtpPaste)
    input.addEventListener('keyup', handleOtp)
})

function handleOtpPaste(e) {
    const data = e.clipboardData.getData('text')
    const value = data.split("")

    if (value.length === inputs.length)
    {
        inputs.forEach((input, index) => (input.value = value[index]));
        submit()
    }
}

function handleOtp(e) {
    const input = e.target
    let value = input.value
    input.value = ""
    input.value = value ? value[0] : ""

    let fieldIndex = input.dataset.index
    if (value.length > 0 && fieldIndex < inputs.length -1)
    {
        input.nextElementSibling.focus()
    }

    if (e.key === 'Backspace' && fieldIndex > 0)
    {
        input.previousElementSibling.focus()
    }

    if (fieldIndex == inputs.length -1)
    {
        validate.focus()
    }
}

function submit() {
    console.log('Submitting...')
    let otp = ""
    inputs.forEach((input) => {
        otp += input.value
        input.disabled = true
        input.classList.add('disabled')
    })
    console.log(otp)
}
