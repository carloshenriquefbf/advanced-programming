#Código obtido da página do Node JS

FROM node:14

#Cria o diretório da aplicação 
WORKDIR /usr/src/app

# Instala as dependências necessárias
COPY package*.json ./

RUN npm install

COPY . .

#Escolhe a porta que a aplicação irá rodar 
EXPOSE 3000
CMD [ "node", "server.js" ]
