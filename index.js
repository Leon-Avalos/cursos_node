// Libraries
const expres = require('express')

//Initialize
var app = expres()
app.use(expres.json())


//Config
const PORT = 3000

// Routes

const studentRouter = require('./router/student_router')
app.use(studentRouter)

const courseRouter = require('./router/course_router')
app.use(courseRouter)

app.use('/', (req, res) => {
    res.send(JSON.stringify({"message" : "Working"}))
})



// Running server
app.listen(PORT, () => {
    console.log(`working at: http://localhost:${PORT}`)
})