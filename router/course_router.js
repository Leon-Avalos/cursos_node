// Call express library
const express = require('express')

// Initizalize router
const router = express.Router()

const CourseController = require('../controllers/course_controller')
const courses = new CourseController()
// Routing students
router.get('/cursos', (req, res) => {
    let out = JSON.stringify({
        message: "Cursos consultados",
        data: courses.getCourses()
    })

    res.status(200).send(out)
})

router.get('/cursos/:id', (req, res) => {
    let id = req.params.id
    console.log(`Curso con id: ${id}`);
    let course = courses.findCourse(id)
    console.log(`Objeto curso: ${course}`);
    res.status(200).send(course)
})

router.get('/cursos/cupos', (req, res) => {
    res.status(200).send(JSON.stringify({
        message : "Cupos disponibles tods",
        data: []
    }))
})

router.get('/cursos/cupos/:id', (req, res) => {
    let id = req.params.id
    res.status(200).send(JSON.stringify({
        message : `Cupos disponibles del curso: ${id}`,
        data: []
    }))
})

router.post('/cursos', (req, res) => {
    let course = req.body
    courses.addCourse(course)

    let out = JSON.stringify({
        message: "Curso agregado",
        course: course,
    })

    res.status(200).send(out)
})





module.exports = router

