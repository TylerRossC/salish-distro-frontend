import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Contact.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
// import { useTheme } from '@mui/material/styles';



const Contact = () => {

  // let theme = useTheme()

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [comments, setComments] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
    setEmail(event.target.value);
    setComments(event.target.value);
  };


  return (
    <div className="contact">
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
          sx={{
            '& > :not(style)': { height: '20ch' },
          }}
            className="comments"
            label="Comments"
            value={comments}
            onChange={handleChange}
          />
          </div>
          <div>
            <Box className="upload-btn" sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended" size="medium" sx={{bgcolor: 'secondary.main'}} aria-label="add">
              <AddIcon sx={{ mr: 1 }} />
              Upload
            </Fab>
            </Box>
          </div>
          <div>
            <Box className="submit-btn" sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended" size="medium" sx={{bgcolor: 'secondary.main'}} aria-label="add">
            <NavigationIcon sx={{ mr: 1 }} />
              Submit
            </Fab>
            </Box>
          </div>
          </Box>
      </div>
    </div>
  );
}

export default Contact