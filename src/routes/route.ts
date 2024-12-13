import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('home', { title: 'Home Page', message: 'Welcome to Handlebars with TypeScript!' });
});

router.get('/login', (req: Request, res: Response) => {
    res.render('login', { title: 'login Page', message: 'Welcome to Handlebars with TypeScript!' });
});


export default router;
