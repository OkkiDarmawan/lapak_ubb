const formloginregister = document.querySelector('formloginregister'),
      registerlink = document.querySelector('register-link'),
     loginlink = document.querySelector('login-link')

registerlink.addEventListener('click', () => {
   formloginregister.classList.add('active')
})

loginlink.addEventListener('click', () => {
   formloginregister.classList.remove('active')
});