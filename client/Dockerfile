FROM node:16
WORKDIR /client
COPY . /client/

RUN npm install && npm run build

ENV REACT_APP_BE_URL=http://localhost:3000
ENV PORT=80

CMD ["npm", "start"]
