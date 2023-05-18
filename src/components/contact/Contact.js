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
    <h2 className="upload-msg">Please upload UBI & leave EIN in the comments before submitting!</h2>
        
      <div className="alert_msg">
        {status?.type === 'success' && <Alert variant="filled" severity="success" className="success_alert" style={{width: 440, opacity: .9}}>
          YAY! You sent us a message. Stay cloudy!
        </Alert>}

        {status?.type === 'error' && <Alert variant="filled" severity="error" className="error_alert" style={{width: 440, opacity: .9}}>
          Oh no...something went wrong. Please make sure name and email aren't blank and proper attachments are uploaded!
        </Alert>}
      </div>
      <div className="alert_msg">
      <Alert variant="filled" severity="success" className="success_alert" style={{width: 440, opacity: .9}}>
          YAY! You sent us a message. Stay cloudy!
        </Alert>
      </div>

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
            // value={files.map(file => <p>{file.name}</p>)}
            defaultValue="*Successfully uploaded documents will show here*"
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
      {/* <FileUpload/> */}
    </div>
  );
}

export default Contact

