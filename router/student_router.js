// Call express library
const express = require('express')

// Initizalize router
const router = express.Router()

const StudentController = require('../controllers/student_controller')
const students = new StudentController()

// Routing students
router.get('/estudiantes', (req, res) => {
    let out = JSON.stringify({
        message: "Estudiantes consultados",
        data: students.getStudents()
    })
    res.status(200).send(out)
})

router.get('/estudiantes/:id', (req, res) => {
    let id = req.params.id
    let student = students.findStudent(id)
    if(student){
        res.status(200).send({
            message: `Estudiante de id: ${id}`,
            data: student
        })
    }else{
        res.status(400).send({message: "Estudiante no encontrado"})
    }
})


router.post('/estudiantes', (req, res) => {
    let student = req.body
    students.addStudent(student)

    let out = JSON.stringify({
        message: "Estudiante agregado"
    })

    res.status(200).send(out)
})

router.post('/estudiantes/matricula', (req, res) => {   
    let out = JSON.stringify({
        message: "Matricular curso"
    })

    res.status(200).send(out)
})






module.exports = router

