const datos = {
    nombre: '',
    telefono:'',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre')
const telefono = document.querySelector('#telefono')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const forumulario = document.querySelector('.formulario')

nombre.addEventListener('input',leerTexto)
telefono.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)


//TODO: Eventos de formularios
// por buenas practicas se selecciona el submit (para formulario)
forumulario.addEventListener('submit',function(e){
    e.preventDefault();
    
    // validar el formulario
    
    const { nombre,email,mensaje,telefono} = datos;
    
    
    if(nombre === '' || email === '' || mensaje === '' || telefono === ''){
        mostrarAlerta('Todos los campos son obligatorios',true)

        return;
    }
    
    
    // enviar el formulario
    mostrarAlerta('enviando formulario...')
})

//funcion para leer texto
function leerTexto(e) {
    datos[e.target.id] = e.target.value;

    // console.log(e.target);

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('enviar');
    }

    forumulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    },2000)
}