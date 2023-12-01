// src/components/Documents.js
import React, { useState } from "react";
import DocumentItem from "./documentItem";
import "./style.scss";
import { Tooltip, Typography } from "@mui/material";

const Documents = () => {
  const [documents, setDocuments] = useState([]);

  const handleAddDocument = () => {
    setDocuments([...documents, { file: null, selectedField: "" }]);
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
      //   const response = await axios.post("your-upload-endpoint", formData);
      //   console.log("Upload success:", response.data);
    } catch (error) {
      // Handle the error
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="Document-container">
      <div className="heading">
        <h2>Documents</h2>
      </div>
      {documents.map((document, index) => (
        <DocumentItem
          key={index}
          index={index}
          document={document}
          onDocumentChange={handleDocumentChange}
          onFieldChange={handleFieldChange}
        />
      ))}
      <Tooltip
        title={
          <Typography style={{ fontSize: "16px" }}>Add document</Typography>
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
    </div>
  );
};

export default Documents;
