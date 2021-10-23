# Instalaciones

- [Google Chrome](https://www.google.com/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/) (*Stable*)
- [Postman](https://www.postman.com/downloads/)
- [Mongo Compass](https://www.mongodb.com/try/download/compass) (*Stable*)
- [Git](https://git-scm.com/)
```
git --version
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```
- [Crear cuenta en GitHub](https://github.com/)
- [Node](https://nodejs.org/es/) (*Recommended*)
```
node --version
```

## Extensiones de VSCode

- [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

```json
// settings.json
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#C497D4"
],
```

- [Monokai Night](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night)
- [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter) (Ayudas al escribir código)

# Fundamentos de Node

- Qué es Node?
  - Lenguaje de backend
  - Acceso al sistema de archivos del equipo
  - Información del S.O.
  - Procesos del equipo
  - Corre sobre el motor V8 (Engine JS de alto desempeño en C++, traduce JS a lenguaje máquina de manera bastante eficiente)
* Qué puedo hacer con Node?
  - Uso de Sockets para una comunicación real Cliente-Servidor
  - Manejo de archivos en FileSystem, cargas simultáneas
  - Servidores locales y remotos con información en tiempo real.
  - Conexiones a base de datos.
  - Creación de servicios REST en segundos.

- Por qué es tan popular?
  - Entradas y salidas que no realizan bloqueos del servidor.
  - Es sumamente rápido y fácil de configurar.
  - Más de 470 mil paquetes disponibles (el ecosistema con más librerías en el mundo).
  - Si sabes JavaScript, ya conoces la mayor parte de Node.

* Quienes lo usan?
  - Netflix, PayPal, Linkedin, Walmart, Uber, ebay, Nasa

## Blocking vs Non Blocking I/O

- Ejecutar programa

```bash
node filename.js
or
node filename
```

- JS usa el mismo hilo.
- **Blocking**: síncrono
- **Non Blocking**: asíncrono

## Ciclo de eventos

- Node lee el código, registra las funciones en el **Objeto global** similar al del navegador, y las usa cuando se las invoque.

### Ciclo de vida de un proceso en Node

1. Pila de procesos (Call Stack)
2. Node Apis
3. Cola de callbacks

Node ejecuta la función **main()** que es la línea principal del código, la agrega a (1) y ejecuta la primera instrucción y luego la destruye, luego la siguiente instrucción y luego la destruye, así, hasta terminar todas las instrucciones y dar por terminado el programa.

Si hay definiciones de funciones, las registra para su uso futuro, similar con las variables. Cuando se las llama, se ejecuta una a una las líneas de código de la función. Así hasta terminar el programa. Hasta el momento, todo en (1).

Las tareas asíncronas las coloca en (2) donde llegado el momento, cuando pase un determinado tiempo o se de alguna situación especial, pasarán a (3) para ser ejecutados en orden de llegada. Todo lo que esté en (3) se ejecutará una vez terminen todos los procesos de (1).

Entonces Node tomará el primer proceso de (3) y lo llevará a (1) para ejecutarlo. En este proceso se pueden añadir más procesos a (2) y a (3).

## Nodemon

- <https://www.npmjs.com/package/nodemon>
- Se recomienda instalar de manera global.
- Para instalaciones globales, ejecutar como administrador o super usuario (**sudo**).

```bash
npm install -g nodemon
```
```bash
nodemon --version
```

- Ejecuta y actualiza los cambios automáticamente.
- Sólo para desarrollo, no para producción, ya que sus errores son diferentes a los de node.

# Reforzamiento de los temas necesarios para seguir el curso

- `var` ´permitía ciertas ambigüedades en el código, como inicializar o usar una variable antes de declararla o inicializarla.
- `var` declara variables de uso global.
- `let` y `const` generan variables con **scope**.
- Priorizar el uso de `const`, ocupa menos espacio de memoria.
- **Template strings**: Permiten trabajar en varias líneas.
- Las funciones tradicionales sólo para casos puntuales.
- **Callback**: función que es pasada como argumento de otra función.
- **Callback Hell**: un callback dentro de otro, dentro de otro, dentro de otro, etc.
- Crea un código muy difícil de leer y mantener.
- **Promises** ayudan a lidiar con los problemas del **callback hell**.
- Para evitar *Promises hell* usar **Promesas en cadena**.
- `async` transforma en una función que retorna una promesa.
- `throw` llama directamente al `reject` de la función. Sino podría correr código del `then`.

# Bases de Node

- Archivo raíz: `app.js` ó `index.js`.
- `ccl` : `console.clear();`
- También para limpiar la consola: `console.log('\033[2J');`

## File system

```js
// import fs from 'fs';
const fs = require('fs');

// Crear archivos
fs.writeFile('path.txt', output, (error) => {
	if (error)
	{
		throw error;
	}

	console.log('Created file!');
});

// ó
// Los errores hay que tratarlos con try y catch
fs.writeFileSync('path.txt', output);
```

```js
// Exportar
module.exports = {
	name: 'variable/function/etc',
}

// Importar
const { name } = require('./path/to/file');
```

```js
// Muestra la ubicación de node
// de la aplicación
// y de las banderas
console.log(process.argv);

// Obtener argumentos
// Sólo fines educativos, habría que configurar muchas cosas para manipular todos los casos con argumentos
const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base = 5 ] = arg3.split('=');
```

Paquetes
- Confiables: ver su número de descargas. (En base a descargas directas o por dependencias)
- <https://www.npmjs.com/package/colors>
- <https://www.npmjs.com/package/yargs>

```bash
# Configurar npm para nuestro archivo
npm init
# Indicar el nombre de nuestro paquete
# Versionamiento
# Descripción
# Archivo de inicio de la aplicación o paquete
# Comando para hacer pruebas unitarias o de integración
# Repositorio de git
# Palabras clave de búsqueda en npmjs.com
# Autor
# Licencia

# Mostrará una vista previa del package.json
```

- `package.json` es el punto inicial de cualquier proyecto de **Node**, permite indicar que comandos ejecutar.

```bash
npm run my-command
```

- Las dependencias se instalan normalmente.
- **dependencies**: del proyecto
- **devDependencies**: de desarrollo

```bash
# Dependencias de desarrollo: --save-dev
# Desinstalar: uninstall
# Una versión concreta: npm install package@1.0.0

# Actualiza las dependencias y muestra conflictos entre las nuevas versiones
# Se pueden actualizar manualmente mejor
npm update
```

## Yargs

- <https://yargs.js.org/>
- Permite extraer la información de consola en modo objeto, usando las banderas con '=' o ' ', en caso no se indique un valor, se asume `true`.
- Por defecto trae configurado un `--help`.

```js
// Añadir opciones
const argv = require('yargs')
	.option('b', {
		alias: 'base',
		type: 'number',     // Yargs intentará convertirlo a número si no lo fuera
		demandOption: true, // Argumento requerido
        default: 100,       // Valor por defecto
		describe: ''        // Descripción que se mostrará en --help
	})
    .check((argv, options) => {
        if (isNan(argv.b))
        {
            throw 'Error message'   // El proceso queda aquí
        }

        return true;                // Si no hay error, retornar true
    })
	.argv;
```

```bash
# Para cambiar colores con node en consola
# [90mString[39m
```

# Aplicación de consola interactiva

- Inicio de un proyecto:

```bash
# npm init
# instalar paquetes
# git init
# crear .gitignore
```

## Recibir información

```js
// Preparar la interfaz para el usuario
const readline = require('readline').createInterface({
    input: process.stdin,   // permite recibir información del usuario
    output: process.stdout, // permite mostrar información al usuario
});

// .question para usar stdout
// answer lo que se ingresa por consola
readline.question('Select an option: ', (answer) => {
    console.log({ answer });
    readline.close();   // Cerrar el ingreso de información
});
```

## Inquirer

- <https://www.npmjs.com/package/inquirer>

```js
const inquirer = require('inquirer');

const questions = [
	{
		type: 'list',                               // Tipo de presentación
        type: 'input',
        type: 'confirm',
        type: 'checkbox',
		name: 'option',                             // Nombre de la propiedad que almacena el valor devuelto
		message: 'What you want to do?',            // Mensaje antes del menú
		choices: ['opt1', 'opt2', 'opt3'],          // Opciones del menú
		choices: [
            {
                value:  '1',
                name:   'Message to show',
                checked: true,                      // Para type: checkbox
            },
        ],                                          // Opciones del menú con valor
        validate (value)                            // Para usarlo con input
        {
            if (value.length === 0)
            {
                return 'Please, insert a value.';
            }
            else
            {
                return true;
            }
        }
	}
];

const option = await inquirer.prompt(questions);    // Devuelve lo que el usuario elija
```

- <https://www.npmjs.com/package/uuid>

```js
const { v4: uuidv4 } = require('uuid');

const id = uuidv4();
```

```js
fs.existsSync('path/to/file');
fs.readFileSync('path/to/file', { encoding: 'utf-8' }); // Encoding, sino devuelve en bytes
```

# Aplicación de clima

```json
// en package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
},
```

```bash
# Para instalar varios paquetes a la vez
npm i color inquirer
```

En Node no se puede usar fetch():

- <https://www.npmjs.com/package/request> Obsoleto, pero aún es muy usado, trabaja en base a callbacks
- <https://www.npmjs.com/package/fetch> Aún le faltan funcionalidades del fetch() de JS
- <https://www.npmjs.com/package/axios> Similiar a request pero con promesas
- <https://reqres.in/> Endpoint de pruebas

## Axios

```bash
npm i axios
```

```js
const axios = require('axios');

const resp = await axios.get('https://reqres.in/api/users?page=2');
console.log(resp.data);
```

- <https://www.mapbox.com/> Crearse una cuenta y generar un token
- <https://docs.mapbox.com/api/search/geocoding/> Playground

```js
// otra manera de hacer la petición
const instance = axios.create({
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
    params: {
        'limit': 6,
        'language': 'es',
        'access_token': token,
    },
});

const resp = await instance.get();
```

## Variables de entorno

- <https://www.npmjs.com/package/dotenv>

```js
// en index.js
require('dotenv').config();

// buscará las variables en .env
// KEY=VALUE
console.log(process.env.KEY);
```

- `.env` normalmente no se sube al repositorio por contener información sensible.
- En su lugar se sube `.env.example` donde se explica la información requerida.

- <https://openweathermap.org/>

# Apuntes extras JS

```js
// Obtener los keys de un objeto
Object.keys(this.objectName).forEach(key => {
    // code...
});

// Borrar elemento de un objeto
delete this._taskList[id];

// Añadir elemento al inicio del arreglo
choices.unshift( /* elem */ );

// Guardar fecha como string
task.completedDate = new Date().toISOString();
```
