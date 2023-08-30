const express = require('express');
const { logger, requestLogger } = require('./utils/Logger.js');
const { router } = require('./router/creditCardRoutes.js');
const cors = require('cors');


const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost', // Replace with your React app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and authentication headers to be included
}));

// Use the routes defined in the separate file
app.use('/', router)
app.use(requestLogger)

const port = process.env.PORT || 3000

app.listen(port, () => {
    logger.info(`Server is running on port ${port}`)
})
