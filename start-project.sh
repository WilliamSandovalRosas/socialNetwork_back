# Iniciar MongoDB
#echo "Iniciando MongoDB..."
#mongod --dbpath /home/usuario/socialNetwork/db_social_network &

# Cambiar al directorio del proyecto Node.js y ejecutar el script
echo "Iniciando la aplicación Node.js..."
cd /home/usuario/socialNetwork/socialNetwork_back
npm run start:watch

#hacer archivo ejecutable
#chmod +x start-project.sh

#Ejecutar el script
#./start-project.sh