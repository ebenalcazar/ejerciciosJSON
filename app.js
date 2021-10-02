//Objetos
//Crea tres objetos usuario1, usuario2, usuario3 que tengan las propiedades nombreUsuario y contrasenia 
//como strings.

const usuario1 = {
    nombreUsuario: "Elena",
    contrasenia: "undostres"
}

const usuario2 = {
    nombreUsuario: "Camila",
    contrasenia: "cuatrocinco"
}

const usuario3 = {
    nombreUsuario: "Nina",
    contrasenia: "seissiete"
}

// Definí una función saludar que reciba como parámetro un objeto y que modifique el HTML de tu página 
//para que aparezca un h1 que diga "Hola, {nombreUsuario}".

//const saludar = (objeto) => {
//    let h1 = document.createElement("h1");
//    h1.innerHTML =`Hola, ${objeto.nombreUsuario}`;
//    document.body.appendChild(h1);
//}

//Probá tu función con los tres objetos definidos antes.

//saludar(usuario1);
//saludar(usuario2);
//saludar(usuario3);

//Definí una función modificarNombreDeUsuario que reciba dos parametros: un objeto usuario y 
//un string nuevoNombre. La función debe retornar el objeto con la propiedad nombreUsuario modificada 
//para tener el valor de nuevoNombre.

const modificarNombreDeUsuario = (usuario, nuevoNombre) => {
    usuario.nombreUsuario = nuevoNombre
    return nuevoNombre
}

//Probá tu función con los tres objetos definidos antes.

console.log(modificarNombreDeUsuario(usuario1, "Carla"));
console.log(modificarNombreDeUsuario(usuario2, "Josefina"));
console.log(modificarNombreDeUsuario(usuario3, "Renata"));

//Definí una función modificarContrasenia que reciba dos parametros: un objeto usuario 
//y un string nuevaContrasenia. La función debe retornar el objeto con la propiedad contrasenia modificada 
//para tener el valor de nuevaContrasenia.

const modificarContrasenia = (usuario, nuevaContrasenia) =>{
    usuario.contrasenia = nuevaContrasenia;
    return nuevaContrasenia
}

//Probá tu función con los tres objetos definidos antes.

console.log(modificarContrasenia(usuario1, "patito"));
console.log(modificarContrasenia(usuario2, "perrito"));
console.log(modificarContrasenia(usuario3, "gatito"));

//Crea la función convertirAJSON. La función debe recibir un objeto usuario como parámetro 
//y retornar el objeto convertido a JSON.

const convertirAJSON = (usuario) =>{
    let objetoConvertidoAJSON = JSON.stringify(usuario);
    return objetoConvertidoAJSON
}

//Crea la función convertirDesdeJSON. La función debe recibir una cadena JSON objetoJSON y retornar 
//la cadena convertida a un objeto de Javascript.

const convertirDesdeJSON = (objetoJSON) =>{
    let cadenaConvertidaAObjeto = JSON.parse(objetoJSON)
    return cadenaConvertidaAObjeto
}

//Probá tus funciones con los tres objetos definidos antes.

console.log(convertirAJSON(usuario1));
console.log(convertirAJSON(usuario2));
console.log(convertirAJSON(usuario3));

console.log(convertirDesdeJSON(convertirAJSON(usuario1)));
console.log(convertirDesdeJSON(convertirAJSON(usuario2)));
console.log(convertirDesdeJSON(convertirAJSON(usuario3)));

//Definí la función guardarEnLocalStorage que reciba como parámetro un objeto de Javascript y un string, 
//y guarde en localStorage la cadena con el string como nombre de la clave 
//(Recordá que antes de guardar un objeto en localStorage hay que convertirlo a JSON: 
//usá la función convertirAJSON que declaraste antes)

const guardarEnLocalStorage = (objeto, string) =>{
    let objetoConvertidoAJSON = convertirAJSON(objeto);
    localStorage.setItem(string, objetoConvertidoAJSON)
}

//guardarEnLocalStorage(usuario1, "primer usuario");

//Definí la función leerDesdeLocalStorage que reciba como parámetro un string clave y retorne 
//un objeto de Javascript con los datos guardados bajo esa clave en localStorage. 
//(Utilizá la función convertirDesdeJSON!)

const leerDesdeLocalStorage = (clave) =>{
    let datosDesdeLocalStorage = localStorage.getItem(clave);
    let jsonConvertidoAObjeto = convertirDesdeJSON(datosDesdeLocalStorage);
    return jsonConvertidoAObjeto
}
console.log(leerDesdeLocalStorage(`primer usuario`))
//Ejercitación integradora
//Tratá de usar las funciones declaradas en los ejercicios anteriores.

//Crea una pagina que tenga un titulo que diga "Hola!" y un botón que diga "Iniciar sesión"
//Al hacer click en el botón Iniciar Sesión, debe hacerse visible un formulario con un campo usuario y otro contraseña, 
//y un botón para enviar el form.
//Definí un objeto usuario en javascript en donde estén definidas dos propiedades: nombreUsuario y contrasenia 
//(o usá los objetos definidos antes).
//Si los datos ingresados por el usuario en el form coinciden con los guardados en el objeto, la web debe:
//Mostrar como saludo "Hola {nombreUsuario}"
//Ocultar el botón "iniciar sesión"
//Mostrar dos botones nuevos: Cambiar mis datos, Cerrar sesión.
//Pista: Definí una variable global para guardar si el usuario inició sesión o no, y determinar a partir de ella qué elementos se deben 
//mostrar en la página.


const botonIniciarSesion = document.getElementById("abrirFormulario");
const mostrarFormulario = document.getElementById("formulario");

botonIniciarSesion.onclick = () =>{
    mostrarFormulario.classList.toggle("ocultar")
}

const nombreDeUsuario = document.getElementById("usuario");
const botonCambiarDatos = document.getElementById("cambiarDatos");
const botonCerrarSesion = document.getElementById("cerrarSesion");
const contraseniaUsuario = document.getElementById("contrasenia");

const saludar = (objeto) => {
    if(nombreDeUsuario === objeto.nombreDeUsuario && contrasenia===objeto.contrasenia){
        let h1 = document.querySelector("h1");
        h1.innerHTML =`Hola, ${objeto.nombreUsuario}`;
        botonIniciarSesion.classList.add("ocultar");
        botonCambiarDatos.classList.remove("ocultar");
        botonCerrarSesion.classList.remove("ocultar")

    }
}
