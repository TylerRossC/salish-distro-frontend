import * as React from 'react';
import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Contact.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import emailjs from 'emailjs-com';




const Contact = () => {

  const [uploadFiles, setUploadFiles] = React.useState('');
  const fileUploadRef = useRef()

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    )
    // e.target.reset()
  };


  // const [toSend, setToSend] = useState({
  //   name: '',
  //   email: '',
  //   comments: '',
  // });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   send(
  //     'sales_email',
  //     'template_4hmh5wp',
  //     toSend,
  //     'ghBZ2_yWASaU-uDGV'
  //   )
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //     })
  //     .catch((err) => {
  //       console.log('FAILED...', err);
  //     });
  //   };

  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };



  return (
    <div className="contact">
    <h2 className="upload-msg">Please upload EIN & UBI before submitting!</h2>
      <div className='form' >
        <Box
          ref={form}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '40ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="name"
            className="name"
            label="Name"
            required
          />
          <TextField
            name="email"
            className="email"
            label="Email"
            required
          />
          <div className="comments">
          <TextField
          // sx={{
          //   '& input': { height: '20ch',  }, 
          // }}
            multiline
            rows={6}
            name="comments"
            className="comments"
            label="Comments"
            required
          />
          
          <input
            name="files"
            ref={fileUploadRef}
            type="file"
            style={{display: "none"}}
            required
          />
          </div>
          <div>
            <Box className="upload-btn" sx={{ '& > :not(style)': { m: 1 } }} onClick={() => fileUploadRef.current && fileUploadRef.current.click()}>
            <Fab variant="extended" size="medium" sx={{bgcolor: 'secondary.main'}} aria-label="add" >
              <AddIcon sx={{ mr: 1 }} />
              Upload
            </Fab>
            </Box>
          </div>
          <div>
            <Box className="submit-btn" onClick={sendEmail} sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended" size="medium" sx={{bgcolor: 'secondary.main'}} aria-label="add">
            <NavigationIcon sx={{ mr: 1 }} />
              Submit
            </Fab>
            </Box>
          </div>
          <div className="attachments">
            <TextField
            name="attachments"
            className="attachments"
            label="Attachments"
            required
            multiline
            rows={3}
            InputProps={{
            readOnly: true,
          }}
          />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Contact

