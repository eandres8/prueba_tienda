# Correr proyecto con docker

Ubicado dentro de la carpeta del proyecto.

Estos son los pasos que se deben seguir para correr el proyecto en docker garantizando un ambiente controlado

!importante

- en el archivo .env se deben colocar los datos de conexión a la base de datos

### Instalando las dependencias con composer
```
docker run --rm -it -v "$(pwd)":/app composer composer install
```

### Descargar la imagen de PHP
```
docker pull php:7.3
```
#### Haz la build de la imagen
```
docker build -t tiendas-php ./
```

### Iniciar el proyecto con compose
```
docker-compose up
```


# CREAR BASE DE DATOS

se puede realizar en otra terminal, en el mismo directorio del proyecto

### Conectarse al container
```
docker-compose exec web bash
```

!!! los siguientes pasos hacerlos dentro del bash de docker

### Iniciar el proyecto con compose
```
mysql -uroot -ptoor -hmysql -e 'create database IF NOT EXISTS tiendas'
```
### Crear las tablas
```
php artisan migrate
```