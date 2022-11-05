class Classroom {
/**
*
* @param (String) name
* @param (String) id
* @param (String) students
* @param (String) instructor
*/
    constructor(num, id, students, instructor) {
        this.name = name;
        this.id = id;
        this.students = students;
        this.instructor = instructor
    }
}

/**
 * 
 *@param (String) student - a student is added to the class
 */

addStudent(student) {
    this.students.push(student);
    console.log(`${student} was added to the class`);
}

courseToString() {
    return `${this.name} is taught by ${this.instructor}`
}


let micro = new Classroom("Intro into Microeconomics", "10000", [], "Sanderson");
console.log(micro);
micro.addStudent("Yoonah Chang");

console.log (micro.courseToStrong());