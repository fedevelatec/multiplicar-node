// required
const fs = require('fs'); // Proyecto Propio de Node
const colors = require('colors');
// const fs = require('express');   // Paquete adicional que se debe de instalar
// const fs = require('./fs');     //  si comienzan con ./ son archivos que nosotros desarrollamos


let listarTabla = (base, limite = 10) => {

    console.log('==================================='.green);
    console.log(`======= Tabla de ${base} =========`.green);
    console.log('=================================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) { // Si no es un numero
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
            // console.log(`El archivo tabla-${base}.txt ha sido creado.`);
        });
    });
}

// Con esto se exporta al objeto global "module"
module.exports = {
    // crearArchivo: crearArchivo   Por el ecmac6 ya no se debe dublicar y solo queda como aparece en la linea siguiente
    crearArchivo,
    listarTabla
}