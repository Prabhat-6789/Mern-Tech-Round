const Student = require('../models/studentModel');
const WorkSnap = require('../models/studentTimeModel');

exports.registerStudent = async (req,res,next)=> {

    try{
        
    const {firstName,lastName,displayName,municipality} = req.body;

    const student = await Student.create({

        firstName,
        lastName,
        displayName,
        municipality
    })

    const temp = await WorkSnap.create({
        student:student._id
    });
 
    console.log("student: ",student._id);
    console.log("temp: ",temp);

    res.status(200).send(student);
}

    catch(error){
        console.log("error is ",error);
    }
}

exports.getAllStudent = async(req,res) => {

    try{
        const students = await WorkSnap.find();
        students.map(async (item) => {
        const details = await Student.findById(item.student);
        console.log("name: ",details.displayName);
        const dateObject = item.timeEntries;
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Month is zero-indexed
        const day = dateObject.getDate();
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const seconds = dateObject.getSeconds();
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        console.log("date: ",formattedDate);
        });

        res.status(200).send(students);
    }

    catch(err){
        console.log("error is: ",err);
    }
}