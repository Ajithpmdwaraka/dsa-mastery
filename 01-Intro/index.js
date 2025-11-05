const studentDatabase = ['Jordan', 'James', 'Jacop', 'Jai'];

const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++){
        if (allStudents[i] === studentName) {
            console.log(`${studentName} is in the database and found at inde number ${i}`); 
        }
    }
}
-
findStudent(studentDatabase, 'Jacop');