import { TextField, Button, Container, Typography } from '@mui/material';
import { useState ,ChangeEvent, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';



const Form = () => {

    const navigate = useNavigate()
    const [formData ,setFormData] = useState({
        name:'',
        phone:'',
        email:'',
    })


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log("Handle chnage called");

        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        localStorage.setItem('formData',JSON.stringify(formData))
        navigate('/page2')
       
    }

  return (
    <Container maxWidth="sm">
        <Typography>
            Fill The Form
        </Typography>

        <form onSubmit={handleSubmit}>
            <TextField
            fullWidth
            label="Name"
            name='name'
            margin='normal'
            onChange={handleChange}
            value={formData.name}
            required/>
            <TextField
            fullWidth
            label="phone No"
            name='phone'
            value={formData.phone}
            margin='normal'
            onChange={handleChange}
            required/>
            <TextField
            fullWidth
            label="Email"
            name='email'
            type='email'
            value={formData.email}
            margin='normal'
            onChange={handleChange}
            required/>
        <Button type="submit" fullWidth color='primary' variant='contained'>Submit</Button>
        </form>
        
    </Container>
  )
}

export default Form



