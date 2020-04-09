import express from 'express';
import Routes from './routes';

// definindo a const app para receber todas as dependencias do express
// definindo que app precisa entender o formato json
const app = express(); 
app.use(express.json());
app.use(routes);
app.listen(5000); // definindo a porta do backend
