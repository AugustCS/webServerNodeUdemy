const hbs = require('hbs');
//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');

    palabras.forEach((palabra, index, array) => {
        array[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    // palabras.forEach(prueba);

    // function prueba(item, index, array) {
    //     array[index] = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    // }
    // for (var palabra of palabras) {
    //     palabra = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    // }

    // console.log(palabra);

    // return palabra.join(' ');

    return "Prueba de que la funcion funciona: " + palabras.join(' ');
});