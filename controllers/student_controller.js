

class Student{
    constructor(){
        this.studentList = []
    }

    /**
     * Get students list
     */
    getStudents(){
        return this.studentList
    }

    /**
     * Add a student to the students list
     * @param {*} student student to be added 
     */
    addStudent(student){
        this.studentList.push(student)
    }

    /**
     * @param {Identification of the student to be modified} id 
     * @param {Object with the new data to be replaced} student 
     */
    editStudent(id, student){
        let index = this.studentList.findIndex(element => element.id==id)
        this.studentList.splice(index,1,student)
    }

    /**
     * Find a student and deletes it from the list
     * @param {*} id 
     */
    deleteStudent(id){
        let index = this.studentList.findIndex(element => element.id==id)
        this.studentList.splice(index,1)
    }
    /**
     * Find a student by id
     * @param {*} id id of the student
     */
    findStudent(id){
        return this.studentList.find(element => element.id == id)        
    }
}

module.exports = Student