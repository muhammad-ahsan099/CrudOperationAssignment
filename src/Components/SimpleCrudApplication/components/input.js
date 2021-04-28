

import {data} from '../data'

import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const [students , setStudent] = useState(data)
  const [name, setName] = useState("");
  const [stuClass, setstuClass] = useState("");
  const [batch, setBatch] = useState("");
  const [rollno, setRollno] = useState("");


    const ctaHandler = ()=> {

        let student = {
            name , 
            stuClass , 
            batch : 
            rollno ,
        }

        console.log("NEW Student: " + student);

        setStudent([...students , student ])

    }



  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-full-width" label="Name" onChange={(e) => setName(e.target.value)} />
      <br />
      <TextField id="standard-full-width" label="Class" onChange={(e) => setstuClass(e.target.value)}  />
      <br />
      <TextField id="standard-full-width" label="Batch" onChange={(e) => setBatch(e.target.value)} />
      <br />
      <TextField id="standard-full-width" label="Roll No" onChange={(e) => setRollno(e.target.value)} />

        <button  >Submit</button>

    </form>

    
  );
}
