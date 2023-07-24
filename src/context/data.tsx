import  { useEffect,useState } from 'react'
import axios from 'axios'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import '../index.css'


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


function Context(){
    const [data,setData] = useState<Post[]>([]);
   
    
    const getData=async()=>{
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(res.data);
            setData(res.data)

        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        getData();

    },[])
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
        { field: 'col3', headerName: 'Column 3', width: 150 },
      ];
      
      const rows: GridRowsProp = data.map((d) => ({
        id: d.id,
        col1: d.id,
        col2: d.title.slice(0,10),
        col3: d.body,
      }));
    return <>
    <div className='datadiv'>
      <DataGrid   
rows={rows} columns={columns} />
    </div>
    
    </>
}

export default Context;

