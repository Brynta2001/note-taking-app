#!/bin/bash

# Levantar el contenedor de la base de datos del backend usando Docker
echo "Levantando el contenedor de la base de datos del backend..."
cd backend
docker-compose up -d  # -d para ejecutarlo en segundo plano

# Esperar unos segundos para asegurarnos de que el contenedor de la base de datos esté listo
echo "Esperando 10 segundos para que la base de datos se levante..."
sleep 10

# Levantar el servidor de backend de NestJS
echo "Levantando el servidor de backend..."
npm run start  # Cambia este comando si tu backend usa otro comando para levantar el servidor

# Volver al directorio padre
cd ..

# Levantar el servidor de frontend de Vite
echo "Levantando el frontend..."
cd frontend
npm run dev  # Cambia este comando si tu frontend usa otro comando para levantar el servidor

# Mantener el terminal abierto
echo "Ambos proyectos están corriendo: Backend y Frontend."
