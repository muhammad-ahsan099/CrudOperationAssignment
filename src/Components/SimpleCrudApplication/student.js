import React, { useState } from "react";

import './style.css'


import { data } from './data'
import StudentList from './studentList';

// import Input from './components/input'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import UpdateIcon from '@material-ui/icons/Update'




// This is for TextField and Input Tags 
const useStyles = makeStyles((theme) => ({
    root: {
        
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },
        button: {
            margin: theme.spacing(1),
        }
    },
}));

// This is styles for Buttons 



function Student() {
    const classes = useStyles();
    // const classes = useStyles();

    const [students, setStudent] = useState(data);
    const [message, setMessage] = useState("")
    const [updatedIndex , setupdateIndex] = useState(0)
    const [flag , setFlag] = useState(false)

    const [name, setName] = useState("");
    const [stuclass, setstuClass] = useState("");
    const [batch, setBatch] = useState("");
    const [rollno, setRollno] = useState("");


    // For Delete User 
    const deleteHandler = (index) => {

        let newStudents = students.filter((student, i) => {
            if (i !== index) {
                return student;
      
            }
        });

        setStudent([...newStudents]);
        console.log('All New Students:  ', newStudents);
    };

    // For ADD NEW User 

    const ctaHandler = ()=> {

        setMessage("")  
        if( name !== "" && rollno !== "" && stuclass !== "" && batch !== "")
        {  
        let student = {
        name ,
        stuclass,
        batch ,
        rollno,

        }

        console.log('Student Data:  '  , student);
        setStudent([...students , student])

        setName("")
        setstuClass("");
        setBatch("");
        setRollno("");
        }

        else
        {
            setMessage("Some Inputs are Empty");
        }

    } 

    // For Update USer 

    const updateHandler = (Student , index)=> 
    {
        console.log("Check for Update Student" + Student);
        setupdateIndex(index)
        setName(Student.name)
        setstuClass(Student.stuclass)
        setBatch(Student.batch)
        setRollno(Student.rollno)
        setFlag(true)
    }

    const ctaupdateHandler = ()=> {
        setMessage("")  
        if( name !== "" && rollno !== "" && stuclass !== "" && batch !== "")
        {  
        let student = {
        name ,
        rollno,
        stuclass ,
        batch

        }

        console.log('Student Data:  '  , student);

        let updatedStudent = students.map((stu , index)=>{
            if(updatedIndex === index)
            {
            return student
            }
            else
            {
            return stu
            }

        })

        setStudent([...updatedStudent ])

        setName("")
        setstuClass("");
        setBatch("");
        setRollno("");
        setFlag(false);
    }

        else
        {
            setMessage("Some Inputs are Empty");
        }

    
    

    }




    return (

        <div  >


            <br  />
            <hr />
            <h1 >Add New Student</h1>
            <hr />

            <div className={classes.root} noValidate autoComplete="off"  >
                
                

                <TextField id="standard-full-width" label="Name" value={name}  onChange={(e) => setName(e.target.value)} />
                <br />
                <TextField id="standard-full-width" label="Class" value={stuclass}  onChange={(e) => setstuClass(e.target.value)} />
                <br />
                <TextField id="standard-full-width" label="Batch" value={batch}   onChange={(e) => setBatch(e.target.value)} />
                <br />
                <TextField id="standard-full-width" label="Roll No" value={rollno}   onChange={(e) => setRollno(e.target.value)} />
                <br  />
                <br />

                {
                flag ? 
                // <button onClick={ctaupdateHandler}>Update</button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<UpdateIcon />}
                    onClick={ctaupdateHandler}
                >
                    Update
                </Button>
                :
                // <button onClick={ctaHandler}>Submit</button>
                
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  onClick={ctaHandler}
                >
                  Submit
                </Button>

                }

               

            </div>

            <p style={{backgroundColor:"red" , color: "white" }}> 
                    {message}
                </p>


            
            <hr />
            <h1>
                List of All Students
            </h1>
            <hr />
            <br />
            <table className="tableHead">
                <tr className="tableRow">
                    <th > Sr No</th>
                    <th >Name</th>
                    <th >Class</th>
                    <th > Batch</th>
                    <th >Roll No</th>
                    <th >Delete</th>
                    <th >Update</th>

                </tr>


                {

                    students.map((item, index) => {
                        return <StudentList index={index} Student={item} deleteHandler={deleteHandler} updateHandler= {updateHandler} />
                    }
                    )
                }


            </table>

        </div>


    )

}

export default Student;