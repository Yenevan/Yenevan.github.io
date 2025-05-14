
function validateLogin(event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === 'ARAYAS' && password === 'ARAYAS2025') {
                alert('Inicio de sesión exitoso');
                document.getElementById('mainContent').style.display = 'block';
                document.getElementById('loginSection').style.display = 'none';
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        }

document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');
            loginForm.addEventListener('submit', validateLogin);
});
