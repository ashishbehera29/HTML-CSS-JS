let students={
    id : 12,
    name : "ashish",
    marks : [123,34],
    course : ["java","javascript"]
}

console.log(students);

//get
console.log(students.name);
console.log(students.marks);

//create
students.phone = "123456"
console.log(students);

//upadte
students.course =["Mern","python"]
console.log(students);

//delete
delete students.marks;
console.log(students);


function student (id,name,marks){
    this.id=id;
    this.name =name;
    this.marks = marks;
}
let s1 = new  student(11,"sharath",[1232,345])
console.log(s1);

class emp{
    constructor(id,name,email) {
        this.id=id;
        this.name=name;
        this.email=email;
    }
}
let m1 = new emp("4","abc","c@g,ail")
console.log(m1);




