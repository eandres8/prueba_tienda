# Prueba de tiendas

Debo comentar que no pude completar el proyecto, no tengo conociemiento en en servicios SOAP, en el flujo de desarrollo presente problemas en la conexión a base de datos, y finalmente no cumplí con el objetivo de poder conectar back y front en el proceso solicitado

! Hice el desarrollo utilizando Docker para controlar el entorno de desarrollo, esto queda descrito en el archivo RUN_DOCKER.md para correr el proyecto

## Modelo ER

- modelo_tienda.pdf

He tomado la decisión de implementar Laravel para el backend y React para front

## Laravel

Es un framework PHP con gran soporte y que tiene las herramientas necesarias para cualquier tipo de desarrollo, conexión a base de datos y su interacción mediante el ORM Eloquent que abstraeria la lógica si se requiere implementar cualquier sistema gestor de base de datos. Soporte para rutas, middlewares.
 
La intención con el framework era aprovechar las herramientas de Seeders y Migrations. Las migraciones son scripts abstractos que permiten versionar las bases de datos, desde la creación de una tabla hasta la eliminación de un campo sin el riesgo de perder información. Laos Seeders son scripts que se pueden ejecutar para poblar la base de datos y sirve para pruebas.

## React

Es la libreria para trabajo frontent por excelencia, y tiene soporte para trabajo con Laravel.
