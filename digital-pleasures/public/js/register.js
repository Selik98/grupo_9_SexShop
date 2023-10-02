window.addEventListener('load', function () {
    let formulario = document.querySelector('form#registroUsuario');
    let password = document.querySelector('#password')
    let confirmPassword = document.querySelector('#confirmPassword')
    let errorPassword = document.querySelector('#errorpassword')

    console.log('El Script Funciona')


    formulario.addEventListener('submit', function (event) {
        if (password.value !== confirmPassword) {
            event.preventDefault()
            errorPassword.innerHTML = 'Las Contraseñas deben coincidir'
        }
    })

});