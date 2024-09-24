import express from 'express';
import dotenv from 'dotenv';
import PlaylistController from './infrastructure/rest/http/playlist.controller';
import ErrorHandler from './shared/infrastructure/rest/http/middlewares/error-handler';

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use('/', new PlaylistController(express.Router()).routes());
app.use(new ErrorHandler().handle);

app.listen(PORT, () => {
  console.log('Server running at PORT: ', PORT);
});
