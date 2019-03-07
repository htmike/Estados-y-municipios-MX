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

