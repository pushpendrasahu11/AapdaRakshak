import React, { useState } from 'react'

function UploadDocs() {

    const [selectedFiles,setSelectedFiles] = useState([]);

    const handleChange=(e)=>{
       
       setSelectedFiles([]);

        if(e.target.files){
            const filesArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file));

            setSelectedFiles((prevFiles)=>prevFiles.concat(filesArray));

            Array.from(e.target.files).map(
                (file)=>URL.revokeObjectURL(file)
            )
        }
        console.log(selectedFiles)
    }

    const renderPhotos=(source)=>{
        return source.map((image) =>{
            return <img src={image} key={image} style={{width:'100px',height:'100px'}}/>;
        });
    }

  return (
    <div className='ud-container'>
        <input type="file" name='file[]' multiple onChange={handleChange}/>
        <div className='result'>{renderPhotos(selectedFiles)}</div>
        {/* <button onClick={handleUpload}>Upload</button> */}
    </div>
  )
}

export default UploadDocs