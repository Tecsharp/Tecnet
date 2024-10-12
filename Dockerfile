# Usa una imagen base de Node.js más reciente
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY . .

# Instala las dependencias
RUN npm install --legacy-peer-deps

# Construye la aplicación
RUN npm run build

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar la aplicación
CMD ["npm", "start"]
