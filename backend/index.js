import express from 'express';
import morgan from 'morgan';
import router from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/', router);

app.listen(3000, () => console.log('backend running'));
