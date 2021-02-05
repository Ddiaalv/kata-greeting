# Jest + Typescript

Plantilla muy básica para crear rápidamente un entorno de desarrollo orientado a ejecutar tests mediante TS y Jest.

## Índice

- [Jest + Typescript](#jest--typescript)
  - [Índice](#índice)
  - [Tecnologías](#tecnologías)
  - [Npm scripts](#npm-scripts)
  - [Make scripts](#make-scripts)

## Tecnologías

| Nombre                                                 | Detalles                                                                   |
| ------------------------------------------------------ | -------------------------------------------------------------------------- |
| 🌐[Typescript](https://www.typescriptlang.org/)        | Lenguaje de programación                                                   |
| 👁️[ESlint](https://eslint.org/)                        | Linter para controlar errores en nuestro código                            |
| 🦋[Prettier](https://prettier.io/)                     | Formatea nuestro código                                                    |
| 🧪[Jest](https://jestjs.io/)                           | Framework de testing                                                       |
| 🐺[Husky](https://www.npmjs.com/package/husky)         | Comprueba errores en nuestro código para evitar errores en nuestros commit |
| 🚫[Lint-staged](https://github.com/okonet/lint-staged) | Ejecuta los linters para evitar errores antes de hacer un commit           |
| 🧾[Hygen](https://www.hygen.io/)                       | Generador de código                                                        |
| 🐏[Makefile](https://es.wikipedia.org/wiki/Make)       | Gestor de tareas, dependencias...                                          |

## Npm scripts

| Comando      | Detalles                                                                   |
| ------------ | -------------------------------------------------------------------------- |
| `ts:watcher` | Ejecuta el watcher del compilador de Typescript                            |
| `lint`       | Comprueba errores de sintaxis                                              |
| `format`     | Formatea nuestro código TS                                                 |
| `test`       | Ejecuta los test                                                           |
| `precommit`  | Comprueba si hay errores en los staged changes antes de realizar un commit |
| `new:f`      | Genera una carpeta con una funcción y un test para ésta                    |

## Make scripts

| Comando     | Detalles                                                                   |
| ----------- | -------------------------------------------------------------------------- |
| `init`      | Instala las dependencias del proyecto                                      |
| `lint`      | Comprueba errores de sintaxis                                              |
| `format`    | Formatea nuestro código                                                    |
| `test`      | Ejecuta los test                                                           |
| `precommit` | Comprueba si hay errores en los staged changes antes de realizar un commit |
| `new`       | Genera una carpeta con una función y un test para ésta                     |
| `clean`     | Elimina varias carpetas/ficheros de nuestro proyecto                       |
