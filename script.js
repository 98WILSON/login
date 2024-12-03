// script.js

document.addEventListener('DOMContentLoaded', () => {
   const loginForm = document.getElementById('loginForm');
   const loginButton = document.getElementById('loginButton');
   const errorMessage = document.getElementById('errorMessage');
 
   loginForm.addEventListener('submit', (e) => {
     e.preventDefault(); // Evita que el formulario se envíe automáticamente
     errorMessage.style.display = 'none';
 
     const username = document.getElementById('username').value.trim();
     const password = document.getElementById('password').value.trim();
 
     // Validar campos vacíos
     if (!username || !password) {
       errorMessage.textContent = 'Please fill in all fields.';
       errorMessage.style.display = 'block';
       return;
     }
 
     // Mostrar estado de carga
     loginButton.classList.add('loading');
     loginButton.textContent = 'Loading...';
 
     // Simulación de inicio de sesión
     setTimeout(() => {
       loginButton.classList.remove('loading');
       loginButton.textContent = 'Sign In';
 
       // Aquí puedes manejar la autenticación real
       alert(`Welcome, ${username}!`);
       loginForm.reset();
     }, 3000); // Simula una espera de 2 segundos
   });
 });