const form = document.querySelector('#form')
const email = document.querySelector('#email')
const errorEmail = document.querySelector('#errorEmail')
const password = document.querySelector('#password')
const errorPassword = document.querySelector('#errorPassword')

const emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

form.addEventListener('submit', (e) => {
    e.preventDefault()

    validateEmail()
    validatePassword()

   if (email.value.length === 0 || password.value.length <= 8)
   {
        errorEmail.innerText = 'Informe um email'
        errorPassword.innerText = 'Mínimo de 8 caracteres'
        return
   }
   else
   {
        window.open('https://amazing-griffin-961e34.netlify.app/home')
   }

})

let time = null

function setError(input, error) {
    input.parentElement.style.border = '1px solid #dc2626'
    error.style.display = 'block'
}

function removeError(input, error) {
    input.parentElement.style.border = ''
    error.style.display = 'none'
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
                    document.querySelector('#access').disabled = true
                }
                else
                {
                    removeError(email, errorEmail)
                }
            }, 1000)
        })
    }
    else
    {
        setError(email, errorEmail)
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
                    document.querySelector('#access').disabled = true
                }
                else if(emailRegex.test(email.value))
                {
                    removeError(password, errorPassword)
                    document.querySelector('#access').disabled = false
                }
            }, 1000)
        })
    }
    else
    {
        setError(password, errorPassword)
        document.querySelector('#access').disabled = true
    }
}
