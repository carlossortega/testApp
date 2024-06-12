# TestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notas de actualización

#Ejecutar el siguiente comando para instalar las librerias utilizadas en este proyecto
#npm install

#Levantar el proyecto, el puerto por defecto es 4200 
#ng serve --open 

#En la vista de login, registrarte con un correo personal y establecer una nueva contraseña para loggearse en la app.
#Su correo personal es importante, ya que para recuperación de constraseña se envia las instrucciones al correo registrado.

## Ultimas actualizaciones de al APP

#¡IMPORTANTE PARA PERMITIR EL FUNCIONAMIENTO DEL MODULO "Heroes"!
 #Extraer la carpeta heroes-json del proyecto
 #Copiarla en otra ruta de sus archivos del ordenador
 #Acceder a la carpeta heroes-json ya localizada en otro path diferente al proyecto
 #Ejecutar el comando npm install -g json-server
 #Posteriormente ejecutar el comando json-server --watch db.json
 #Este ultimo comando levantara un  backend con los heroes predefinidos dentro de el

 Modulos actualmente funcionando y probados son:
 - Heroes
 - Users
 - Giphys
 - Countries (Puede no funcionar por temas a descontinuación del servicio público)
 - Marvel esta en proceso de contrucción.
