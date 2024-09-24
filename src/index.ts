import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import container from './container';

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use('/', container.resolve('playlistController').routes());
app.use(container.resolve('errorHandler').handle);

app.listen(PORT, () => {
  console.log('Server running at PORT: ', PORT);
});
