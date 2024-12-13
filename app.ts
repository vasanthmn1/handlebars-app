import express, { Request, Response } from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import router from './src/routes/route';

const app = express();


app.engine('handlebars', engine({
    helpers: require('./src/utils/helpers'),
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, '../public')));




app.use('/', router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
