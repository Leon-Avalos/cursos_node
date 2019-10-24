var courses = [
    {
        id: "12344",
        name: "Test",
        description: "Test description",
        cap: 23
    },
    {
        id: "1234",
        name: "Test",
        description: "Test description",
        cap: 23
    },
    {
        id: "0000",
        name: "Test",
        description: "Test description",
        cap: 23
    },

]

let index = courses.findIndex(element => element.id == "0000")


console.log(courses);
console.log(index);
console.log(courses[index])

