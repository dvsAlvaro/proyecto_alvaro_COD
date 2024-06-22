document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const terminos = document.getElementById('terminos').checked;

    // Validar campos
    if (!nombre) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    if (!apellido) {
        alert('Por favor, ingresa tu apellido.');
        return;
    }
    if (!email) {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    }
    if (!telefono) {
        alert('Por favor, ingresa tu número de teléfono.');
        return;
    }
    if (!contrasena) {
        alert('Por favor, ingresa tu contraseña.');
        return;
    }
    if (!terminos) {
        alert('Debes aceptar los términos y condiciones.');
        return;
    }

    const formData = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        contrasena: contrasena,
        terminos: terminos
    };

    // Enviar los datos al servidor
    fetch('/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Formulario enviado exitosamente');
            // Aquí puedes redirigir a otra página o hacer cualquier otra acción después de enviar el formulario
        } else {
            alert('Hubo un error al enviar el formulario');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});