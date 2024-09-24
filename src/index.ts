import express from 'express';
import dotenv from 'dotenv';
import PlaylistController from './infrastructure/rest/http/playlist.controller';

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use('/', new PlaylistController(express.Router()).routes());

app.listen(PORT, () => {
  console.log('Server running at PORT: ', PORT);
}).on('error', (error) => {
  throw new Error(error.message);
});
