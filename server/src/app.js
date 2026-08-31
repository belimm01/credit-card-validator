import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { logger, requestLogger } from './utils/Logger.js';
import { router } from './router/creditCardRoutes.js';

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN || 'http://localhost',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // Allow cookies and authentication headers to be included
    })
);

app.use(requestLogger);

// Use the routes defined in the separate file
app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});
