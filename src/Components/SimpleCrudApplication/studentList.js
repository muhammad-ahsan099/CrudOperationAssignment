
import React, { useState } from 'react'

// import 'style.css'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update'


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));







function StudentList({ index, Student, deleteHandler, updateHandler }) {

    const classes = useStyles();

    return (

        <tr className="tableRow">
            <td  >{index + 1}</td>
            <td>{Student.name}</td>
            <td>{Student.stuclass}</td>
            <td>{Student.batch}</td>
            <td>{Student.rollno}</td>
            <td>
                {/* <button onClick={()=> deleteHandler(index)}>Delete</button> */}
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={()=> deleteHandler(index)}
                >
                    Delete
      </Button>
            </td>
            <td>
                {/* <button onClick={() => updateHandler(Student, index)} >Update</button> */}
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<UpdateIcon />}
                    onClick={()=> updateHandler(Student , index)}
                >
                    Update
                </Button>
            </td>


        </tr>


    )
}


export default StudentList;