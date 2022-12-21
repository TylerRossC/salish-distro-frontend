import React, {useState} from 'react';


function FileUpload(){
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [files, setFiles] = useState([])

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
        setFiles([...files, selectedFile])
    };

    return(
   <div>
        <input type="file" name="file" onChange={changeHandler} />
        {isFilePicked ? (
            <div>
                <p> {selectedFile.name}</p>
                <p>
                    lastModifiedDate:{' '}
                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
            </div>
        ) : (
            <p>Select a file to show details</p>
        )}
        <div style={{backgroundColor: 'red'}} type='text'>{files.map(file => <p>{file.name}</p>)}</div>
        <div>
            <button onClick={handleSubmission}>Submit</button>
        </div>
    </div>
        
    )
}

export default FileUpload