import React, { useRef, useState } from "react";
import DocumentItem from "./documentItem";
import "./style.scss";
import { Tooltip, Typography } from "@mui/material";
import { toast } from "react-toastify";

const Documents = ({
  index,
  profile,
  setProfile,
  editProfileEnable,
  onDelete,
  onDocumentChange,
}) => {
  const [documents, setDocuments] = useState([
    {
      selectedField: "",
    },
  ]);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    // Validate file type
    const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    if (file && !allowedTypes.includes(file.type)) {
      console.log("Invalid file type. Please upload a PDF, JPEG, JPG, or PNG file.");
      return;
    }
  
    // Validate file size
    const maxSizeInBytes = 1 * 1024 * 1024; 
    if (file && file.size > maxSizeInBytes) {
      toast("File size exceeds the limit. Please upload a smaller file than 1Mb.");
      return;
    }
  
    onDocumentChange(index, file);

      // Update the uploaded files state
      setUploadedFiles([...uploadedFiles, file]);
  };

  

  const handleAddDocument = () => {
    setDocuments([...documents, { file: null, selectedField: "" }]);
  };

  const handleDeleteDocument = (index) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };


  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleDocumentChange = (index, file) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].file = file;
    setDocuments(updatedDocuments);
  };

  const handleFieldChange = (index, selectedField) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].selectedField = selectedField;
    setDocuments(updatedDocuments);
  };

  const handleUpload = async () => {
    // Implement Axios request to upload documents to the server
    // Use FormData to send the files to the server
    const formData = new FormData();
    documents.forEach((document) => {
      formData.append("files", document.file);
      formData.append("fields", document.selectedField);
    });

    try {
      // const response = await axios.post("your-upload-endpoint", formData);
      // console.log("Upload success:", response.data);
    } catch (error) {
      // Handle the error
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="Documents-container">
      <div className="heading">
        <h2>Documents</h2>
      </div>
      <DocumentItem
        index={0}
        document={documents[0]}
        onDocumentChange={handleDocumentChange}
        onFieldChange={handleFieldChange}
        onDelete={handleDeleteDocument}
      />
      {documents.slice(1).map((document, index) => (
        <DocumentItem
          key={index + 1}
          index={index + 1}
          document={document}
          onDocumentChange={handleDocumentChange}
          onFieldChange={handleFieldChange}
          onDelete={handleDeleteDocument}
          editProfileEnable={editProfileEnable}
        />
      ))}
      {editProfileEnable && (
        <Tooltip
          title={
            <Typography style={{ fontSize: "16px" }}>
              Add more document
            </Typography>
          }
          PopperProps={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 10],
                },
              },
            ],
          }}
        >
          <button onClick={handleAddDocument}>+</button>
        </Tooltip>
      )}
      <div className="row">
        <div className="col">
          <div className="info-field">
            <p>Aadhar Card*</p>
          </div>
          <div className="upload">
            {uploadedFiles[index] ? (
              <div>
                <p>{uploadedFiles[index].name}</p>
                <button onClick={() => handleDeleteDocument(index)}>
                  Remove
                </button>
              </div>
            ) : (
              <React.Fragment>
                <button className="button-upload" onClick={handleClick}>
                  Upload a file
                </button>
                <input
                  className="upload-btn"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf, .jpg, .jpeg, .png"
                  ref={hiddenFileInput}
                  style={{ display: "none" }}
                />
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="info-field">
            <p>Pan Card*</p>
          </div>
          <div className="upload">
            <button className="button-upload" onClick={handleClick}>
              Upload a file
            </button>
            <input
              className="upload-btn"
              type="file"
              onChange={handleFileChange}
              accept=".pdf"
              ref={hiddenFileInput}
              style={{ display: "none" }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Documents;
