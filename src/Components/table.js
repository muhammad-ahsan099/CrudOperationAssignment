


import React, { useState } from 'react';
import '../App.css';
import MaterialTable from 'material-table'


const Data = [
    {id: 1 , name: "Muhammad Ahsan" , stuClass : "BSCS" , batch: "FA19" , rollno: 99  , phone : +923056496364} ,
    {id: 2 , name: "Ahmed Sajjad" , stuClass : "BSCS" , batch: "FA19" , rollno: 44  , phone : +923013656698} ,
    {id: 3 , name: "Subhan Tariq" , stuClass : "BSCS" , batch: "FA19" , rollno: 102  , phone : +923013003298} ,
    {id: 4 , name: "Bilal AShraf" , stuClass : "BSCS" , batch: "FA19" , rollno: 101  , phone : +923059900695} ,
    {id: 5 , name: "Hammad Ali Mujahid" , stuClass : "BSCS" , batch: "FA19" , rollno: 78  , phone : +923026689292} ,
    {id: 1 , name: "Muhammad Usman" , stuClass : "BSCS" , batch: "FA19" , rollno: 73  , phone : +923040672375} ,


]

function Table() {

  const [data, setData] = useState(Data)
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "name" },
    {title: "Class" , field: "stuClass"} ,
    {title: "Batch" , field: "batch"},
    {title: "Roll No" , field:"rollno"} ,
    {title: "Phone " , field : "phone"},
   
  ]


  return (
    <div >
     
      <MaterialTable
        title="Student Record"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, 
          addRowPosition: "first",
          exportButton: true,

        }}
     
      />
    </div>
  );
}

export default Table;
