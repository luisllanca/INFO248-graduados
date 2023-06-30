# Utiliza una imagen base con Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y las dependencias
COPY package.json package-lock.json /app/

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . /app

# Construye el proyecto
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Define el comando de inicio de la aplicación
CMD ["npm", "start"]