FROM node:alpine

WORKDIR /app/orsem-react

COPY package.json /app/orsem-react/
COPY yarn.lock /app/orsem-react/
COPY . /app/orsem-react/

RUN yarn install

CMD [ "npm", "run" , "start"]