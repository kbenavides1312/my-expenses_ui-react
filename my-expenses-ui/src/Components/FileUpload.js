import React, { useState } from 'react';
import { uploadReceiptXML } from '../Services/Receipts'
import { Button } from 'react-bootstrap';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            setUploading(true);
            const response = await uploadReceiptXML(file);
            if (response.statusCode == 200) {
                alert('File uploaded successfully!');
            } else {
                const data = await response.body.json();
                console.error('File upload failed:', data);
            }
        } catch (error) {
            console.error('Error uploading file: ', error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <br/>
            <input type="file" onChange={handleChange} />
            <br/>
            <br/>
            <Button 
            variant='primary'
            onClick={handleUpload} disabled={!file || uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </Button>
        </div>
    );
}

export default FileUpload;
