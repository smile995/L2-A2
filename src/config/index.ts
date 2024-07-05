import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.port,
  database_url: process.env.DataBase_Url,
};