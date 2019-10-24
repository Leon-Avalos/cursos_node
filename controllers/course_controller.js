

/**
 * Course controller class
 */
class Course{
    constructor(){
        this.courseList = []
    }

    /**
     * Get Courses list
     */
    getCourses(){
        return this.courseList
    }

    /**
     * Add a Course to the Courses list
     * @param {*} course Course to be added 
     */
    addCourse(course){
        this.courseList.push(course)
    }

    /**
     * @param {Identification of the course to be modified} id 
     * @param {Object with the new data to be replaced} course 
     */
    editCourse(id, course){
        let index = this.courseList.findIndex(element => element.id==id)
        this.courseList.splice(index, 1, course)
    }

    /**
     * Find a course and deletes it from the list
     * @param {*} id 
     */
    deleteCourse(id){
        let index = this.courseList.findIndex(element => element.id==id)
        this.courseList.splice(index,1)
    }

    /**
     * Find a course by id
     * @param {*} id id of the course
     */
    findCourse(id){
        return this.courseList.find(element => element.codigo == id)       
    }
}

module.exports = Course