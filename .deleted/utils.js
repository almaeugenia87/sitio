// APW
// Librerìa de utilerías

// NOTA: Considerar utilizar la libería Loadsh (https://lodash.com)

// Función para hacer una copia profunda (deep copy) de un objeto.
export const objectClone = (object) => {

   return JSON.parse(JSON.stringify(object));

}

// Función para eliminar los elementos con valores NULOS de un objeto.
export const objectClean = (object) => {

    let output = objectClone(object);

    for (let c=0; c<2; c++) { // NOTA: Es necesario recorrer 2 veces la estructura para eliminar los objetos vacíos...

      Object
          .entries(output)
          .forEach(([key, value]) => {

              if (value && typeof value === 'object') {

                if (Object.keys(value).length > 0) output[key] = objectClean(value);

              }

              if ((value && typeof value === 'object' && Object.keys(value).length === 0) || value === null || value === undefined) {

                delete output[key];

              }

          });

        }

    return output;
}

// Función para copiar los valores de un objeto en otro que tienen la misma estructura.
export const objectMerge = (object, source) => {

    // Si no existe objecto fuente... regrsar el mismo objeto.
    if (source === null) return object;

    // Crear una copia del objeto original.
    let output = objectClone(object);

    // Copiar los valores no nulos del objeto fuente al objeto original.
    Object
        .entries(source)
        .forEach(([key, value]) => {

            // Si se trata de un subobjeto, ejecutar una función recursiva.
            if (value && typeof value === 'object') {

              objectMerge(output[key], value);

            }

            // Si el valor fuente no es nulo ni está vacío, sobreescribir el valor del objeto original.
            if (value !== null && value !== '') {

              output[key] = value;

            }

        });

    // Regersar una copia del objeto original que incluye los valores del objeto fuente.
    return output;
}

// Función para actualizar el valor de una ruta dentro de un objeto; código tomado de: https://youmightnotneed.com/lodash
export const objectUpdate = (object, path, value) => {

    let output = objectClone(object);

    const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

    pathArray.reduce((accumulator, key, i) => {

      if (accumulator[key] === undefined) accumulator[key] = {}
      if (i === pathArray.length - 1) accumulator[key] = value;
      return accumulator[key];

    }, output);

    return output;

}

// [lock-all/]
