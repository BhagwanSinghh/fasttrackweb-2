import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Muitable() {

    const[data,setData] = useState([
        { id: 1, Status: "Clifford", location: "Delhi", date: 44 },
        { id: 2, Status: "Frances", location: "Ambala", date: 36 },
        { id: 3, Status: "Roxie", location: "Jagadhri", date: 65 },    
    ]);

const colsData = ()=>
    Object.keys(data[0]).map((item)=>({
        field:item,
        headerName:item.toUpperCase(),
        width:300
    }))
console.log(colsData(),"kjjjjjjjjjjjjjjjjjjjjjj")

  const columns = [
   ...colsData()
  ];
  return (
    <div style={{ height: 400, width: "85%", margin:"0 auto"  }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
