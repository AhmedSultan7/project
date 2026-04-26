
FROM node:25  as base

WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
EXPOSE 4000
CMD ["npm", "run","start"]


FROM base as development

WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 4000
CMD ["npm", "run","start-dev"]

FROM base as production

WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY . .
EXPOSE 4000
CMD ["npm", "run","start"]