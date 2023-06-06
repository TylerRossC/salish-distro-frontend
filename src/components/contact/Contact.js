import * as React from 'react';
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import './Contact.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import emailjs from 'emailjs-com';
// import FileUpload from '../FileUpload.js'




const Contact = () => {

  // const [uploadFiles, setUploadFiles] = useState('');
  const [status, setStatus] = useState(undefined)
  const [files, setFiles] = useState([])
  const fileUploadRef = useRef()

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    ).then(() => {
      setStatus({type: 'success'})
    })
    .catch((error) => {
      setStatus({type: 'error', error})
    })
  };

  const handleAttachments = () => {
    fileUploadRef.current && fileUploadRef.current.click()
    console.log(fileUploadRef.current.files[0])
    setFiles([...files, fileUploadRef.current.files[0]])
  }

  


  return (
    <div className="contact">
    <h2 className="upload-msg"></h2>
        
      <div className="alert_msg">
        {status?.type === 'success' && <Alert variant="filled" severity="success" className="success_alert" style={{width: 550, opacity: .9}}>
        We received your message and will be in touch shortly! Stay cloudy!
        </Alert>}

        {status?.type === 'error' && <Alert variant="filled" severity="error" className="error_alert" style={{width: 650, opacity: .9}}>
          Oh no...something went wrong. Please make sure name and/or email aren't blank!
        </Alert>}
      </div>
      <div className="alert_msg">
      {/* <Alert variant="filled" severity="success" className="success_alert" style={{width: 550, opacity: .9}}>
          We received your message and will be in touch shortly! Stay cloudy!
        </Alert> */}
      </div>

      <div className='form' >
        <Box
          ref={form}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
        
          <TextField
            name="name"
            className="name"
            label="Name"
            sx={{ 
              bgcolor: 'rgba(0,0,0,.3)',
              borderRadius: '5px',
              fontWeight: 'bold'
              }}
              InputLabelProps={{style: {fontWeight: 'bold'}}}
              inputProps={{style: {fontSize: 20}}}
            required
          />
          <TextField
            name="email"
            className="email"
            label="Email"
            sx={{ 
              bgcolor: 'rgba(0,0,0,.3)',
              borderRadius: '5px',
              fontWeight: 'bold'
              }}
              InputLabelProps={{style: {fontWeight: 'bold'}}}
              inputProps={{style: {fontSize: 20}}}
            required
          />
          <div className="comments">
          <TextField
            multiline
            rows={6}
            name="comments"
            className="comments"
            label="Comments"
            sx={{ 
              bgcolor: 'rgba(0,0,0,.3)',
              borderRadius: '5px',
              fontWeight: 'bold'
              }}
              InputLabelProps={{style: {fontWeight: 'bold'}}}
              inputProps={{style: {fontSize: 20}}}
            required
          />
          
          <input
            name="files"
            ref={fileUploadRef}
            type="file"
            style={{display: "none"}}
            // required
          />
          </div>
          <div>
            <Box className="upload-btn" sx={{ '& > :not(style)': { m: 1 } }} onClick={handleAttachments}>
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
            defaultValue="*Successfully uploaded documents will show here*"
            // value={files.map(file => <p>{file.name}</p>)}
            // required
            multiline
            rows={3}
            InputProps={{
            readOnly: true,
          }}
          sx={{ 
            bgcolor: 'rgba(0,0,0,.3)',
              borderRadius: '5px'
              }}
              InputLabelProps={{style: {fontWeight: 'bold'}}}
              inputProps={{style: {fontSize: 20}}}
          />
          </div>
        </Box>
      </div>
      {/* <FileUpload/> */}
    </div>
  );
}

export default Contact

