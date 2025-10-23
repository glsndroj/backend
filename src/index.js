import chalk from 'chalk';
import { configDotenv } from 'dotenv';
import express, { response, Router } from 'express'
import bodyParser from 'body-parser';
import { connectDB } from './database/db.js';
import { createUser, getUser, getUsersById, UpdateUserById } from './controllers/user.js';
import { UserRouter } from './routers/user.js';

configDotenv()

const port = process.env.PORT

const app = express();

app.use(bodyParser.json())

app.use('/students', UserRouter)

// app.post('/students', createUser)
// app.get('/students-details', getUser)
// app.get(`/students/:id`, getUsersById)
// app.patch(`/students/:id`, UpdateUserById)

app.listen(port, () => {
    connectDB();
    console.log(chalk.green(`Server is running! http://localhost:${port}`))
})


