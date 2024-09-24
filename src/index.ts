import express from 'express';
import dotenv from 'dotenv';
import ErrorHandler from './shared/infrastructure/rest/http/middlewares/error-handler';
import container from './container';

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use('/', container.resolve('playlistController').routes());
app.use(new ErrorHandler().handle);

app.listen(PORT, () => {
  console.log('Server running at PORT: ', PORT);
});
