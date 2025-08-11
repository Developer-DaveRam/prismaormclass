import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:5007'
};

const outputFile = './swagger-output.json';
const routes = ['./src/app.ts'];

swaggerAutogen()(outputFile, routes, doc);