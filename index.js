import chalk from 'chalk';
import { configDotenv } from 'dotenv';
import express, { response } from 'express'
import bodyParser from 'body-parser';

configDotenv()

const port = process.env.PORT

const app = express();

app.use(bodyParser.json())

const students = [

]

app.get('/students', async (request, response) => {
    response.send(students)
})

app.post('/students', async (request, response) => {
    console.log(request.body)
    const previousStudents = students.filter((student) => student.phonenumber === request.body.phonenumber)
    console.log(previousStudents, "students")
    if(previousStudents.length === 0){
        students.push(request.body)
       return response.status(200).send(students).end()
    }else {
       return response.status(409).send({ message: "Duplicated"})
    }
})

app.patch('/students', (request, response) => {
    const phone = request.params.phonenumber;
    const updateUser = request.body;
    for(let i = 0 ; i < students.length ;i++){ 
        if(students[i].phonenumber==request.body.target.phonenumber){
            students[i]=request.body.update;
        }
    }
    response.json({message: `User phone is updated`, updateUser})
    console.log(students)
})

// app.get('/students/detals', async (request, response) => {
// const studentsDetails = [
//     {
//         name: "Galsandorj",
//         age: 33,
//         hobby: "Video Gaming, Billiard"
//     },
//     {
//         name: "Subeedei",
//         age: 19,
//         hobby: "Untah, Tamhi tatah, Video gaming"
//     },
//     {
//         name: "Ariuntuguldur",
//         age: 17,
//         hobby: "Video Gaming, Muscle flex, Duulah"
//     },
//     {
//         name: "Bolormaa",
//         age: 22,
//         hobby: "Coding, iluu dutuu ym asuuh"
//     },
//     {
//         name: "Bayarmaa",
//         age: 22,
//         hobby: "Hereldeh"
//     },
//     {
//         name: "Zoljargal",
//         age: 16,
//         hobby: "hun uduh"
//     }
// ]
// response.send(studentsDetails)
// })
app.listen(port, () => {
    console.log(chalk.green(`Server is running! http://localhost:${port}`))
})



// app.get('/', async (request, response) => {
//     const res = await axios.get('https://gogo.mn/cache/news-shinemedee?size=15')
//     response.send(res.data)

// })


// console.log(
//     await figlet.text("Mangar Galsaa ah!", {
//       font: "Ghost",
//       horizontalLayout: "default",
//       verticalLayout: "default",
//       width: 80,
//       whitespaceBreak: true,
//     })
//   );






