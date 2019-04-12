FROM node:9.11.1

ENV HOST 0.0.0.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app
# Expose the app port
EXPOSE 3000
RUN npm rebuild node-sass
RUN npm i
RUN npm run build
CMD ["npm", "run", "start"]
