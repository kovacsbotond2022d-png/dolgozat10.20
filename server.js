import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const app = express();
const port = process.env.port || 4500;

app.use(express.json());

app.get('/api/termekek')


