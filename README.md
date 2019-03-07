# Estados y municipios - México
Listado de estados y municipios en formato JSON

- Ordenados alfabéticamente
- Formato JSON
- Recomendado para usar con peticiones HTTP

## Obteniendo datos por objeto XMLHttpRequest

```javascript
function readData() {
  // Creamos el objeto:
  let http = new XMLHttpRequest();
  // realizamos la petición:
  http.open('GET', '/municipios-341c9-export.json', false);
  // Enviamos la petición:
  http.send();
  // retornamos el valor de la petición:
  return http.response;
}
```

El valor obtenido de la función readData() será un string. El JSON a una sola línea.

```javascript
function dataToArray() {
  // Ponemos los datos en una variable:
  let data = readData();
  // Convertimos los datos en objeto;
  let obj = JSON.parse(data);
  // Creamos un arreglo a partir del objeto:
  let arr = Object.values(obj);
  // Retornamos el arreglo:
  return arr;
}
```

El arreglo resultante tendrá las propiedades
- *nombre*: String
- *municipios*: String[]

## Obteniendo lista de estados

```javascript
function getStates(){
  // Creamos un arreglo vacío para retornar:
  var states = new Array();
  // Recorremos el arreglo de datos:
  dataToArray().forEach( element => {
    // Añadimos la propiedad 'nombre' del elemento recorrido:
    states.push(element.nombre);
  });
  // Retornamos el arreglo resultante:
  return states;
}
```

El arreglo obtenido de la función anterior tendrá los nombres de los estados.

## Obteniendo lista de municipios según nombre del estado

```javascript
function getCities(state) {
  // Aplicamos una busqueda al arreglo principal de datos:
  let found = dataToArray().filter( element => {
    // Retornamos el objeto del estado:
    return element.nombre == state;
  });
  // Retornamos el valor de la propiedad 'municipios':
  return found.municipios;
}
```

El arreglo resultante tendrá los nombres de los municipios del estado consultado.
