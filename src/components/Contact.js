import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Contact.css'


const Contact = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [comments, setComments] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
    setEmail(event.target.value);
    setComments(event.target.value);
  };

  return (
  
    <div className='form'>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="name"
          label="Name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          className="email"
          label="Email"
          value={email}
          onChange={handleChange}
        />
        <div className="comments">
        <TextField
          className="comments"
          label="Comments"
          value={comments}
          onChange={handleChange}
        />
        </div>
        </Box>
    </div>
  );
}

export default Contact