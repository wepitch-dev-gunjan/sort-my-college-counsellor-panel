import React, { useContext, useEffect, useRef, useState } from "react";
import DocumentItem from "./documentItem";
import "./style.scss";
import { Tooltip, Typography } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import { backend_url } from "../../config";
import { UserContext } from "../../context/UserContext";

const Documents = ({
  editProfileEnable,
}) => {
  const { user } = useContext(UserContext)
  const [documents, setDocuments] = useState([]);
  const [documentTypes, setDocumentTypes] = useState([]);
  const [filteredDocumentTypes, setFilteredDocumentTypes] = useState([]);
  // const [remainingDocuments, setRemainingDocuments] = useState(documentTypes)

  // fetch documents and store it to the documents state
  const getDocuments = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/counsellor/document/get-documents`, {
        headers: {
          Authorization: user.token
        }
      });
      console.log(data)
      setDocuments(data)
    } catch (error) {
      console.log(error);
      toast("Error getting documents")
    }
  }
  // fetch documentTypes and store it to documentTypes state
  const getDocumentTypes = async () => {
    try {
      const { data } = await axios.get(`${backend_url}/counsellor/documentType/documentTypes`);
      console.log("asdfasdf", data, documents)
      setDocumentTypes(data)
    } catch (error) {
      console.log(error);
      toast("Error getting documents")
    }
  }

  const getFilteredDocumentTypes = (dTypes) => {
    const filteredTypesFromDocuments = documents.map(document => document.document_type)
    return dTypes.filter(documentType => !filteredTypesFromDocuments.includes(documentType._id))
  }

  const handleAddDocument = () => {
    setDocuments([...documents, {
      user: user._id,
      _id: user._id,
      document_type: ""
    }])
  }

  useEffect(() => {
    const promises = async () => {
      await getDocuments()
      await getDocumentTypes()
      console.log("ho hi nhi rha hai")
    }
    promises()
    // setRemainingDocuments(documents)

  }, [user])

  // useEffect(() => {
  //   console.log("filtered document types", filteredDocumentTypes())
  // }, [documentTypes])

  function getIdByName(name) {
    for (let i = 0; i < documentTypes.length; i++) {
      if (documentTypes[i].name === name) {
        return documentTypes[i]._id;
      }
    }
    // Return null if no match found
    return null;
  }

  const getDocumentTypeFromId = (id) => {
    const documentTypeName = documentTypes.filter(documentType => {
      return documentType._id === id;
    });
    return documentTypeName[0]?.name;
  }
  useEffect(() => {
    setFilteredDocumentTypes(getFilteredDocumentTypes(documentTypes))
  }, [documentTypes])
  return (
    <div className="Documents-container">
      <div className="heading">
        <h2>Documents</h2>
      </div>

      {/* {documents.filter(document => document?.required).map(document => (
        <DocumentItem
          document={document}
          key={document._id}
          documentTypes={documentTypes}
          documentType={document.document_type}
          file={document.file}
          editProfileEnable={editProfileEnable}
        />
      ))} */}


      {documents.map(document => (
        <DocumentItem
          document={document}
          key={document._id}
          documentTypes={filteredDocumentTypes}
          documentType={document.document_type}
          file={document.file}
          editProfileEnable={editProfileEnable}
          getIdByName={getIdByName}
          getDocumentTypeFromId={getDocumentTypeFromId}
        />
      ))}

      {editProfileEnable && (
        <div className="add-document"
          onClick={handleAddDocument}
        >
          <span>Add document</span>
        </div>
      )}
      {/* {editProfileEnable && addDocumentClickCount < 4 && (
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
      )} */}
    </div>
  );
};

export default Documents;


// const handleFileChange = async (e) => {
//   const file = e.target.files[0];

//   // Validate file type
//   const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
//   if (file && !allowedTypes.includes(file.type)) {
//     console.log("Invalid file type. Please upload a PDF, JPEG, JPG, or PNG file.");
//     return;
//   }

//   // Validate file size
//   const maxSizeInBytes = 1 * 1024 * 1024;
//   if (file && file.size > maxSizeInBytes) {
//     toast("File size exceeds the limit. Please upload a smaller file than 1Mb.");
//     return;
//   }

//   // onDocumentChange(index, file);

//   // Update the uploaded files state
//   setUploadedFiles([...uploadedFiles, file]);

//   try {
//     const payload = { file }
//     console.log(payload);
//     const { data } = await axios.post(`${backend_url}/counsellor/document/upload-document`, payload, {
//       headers: {
//         Authorization: user.token
//       }
//     })

//   } catch (error) {
//     console.log(error);

//   }


// };



// const handleAddDocument = () => {
//   setAddDocumentClickCount(addDocumentClickCount + 1);
//   setDocuments([...documents, { file: null, selectedField: "" }]);
// };

// const handleDeleteDocument = async (index) => {
//   const updatedDocuments = [...documents];
//   updatedDocuments.splice(index, 1);
//   setDocuments(updatedDocuments);
// };

// const handleUpload = async () => {
//   // Implement Axios request to upload documents to the server
//   // Use FormData to send the files to the server
//   const formData = new FormData();
//   documents.forEach((document) => {
//     formData.append("files", document.file);
//     formData.append("fields", document.selectedField);
//   });

//   try {
//     // const response = await axios.post("your-upload-endpoint", formData);
//     // console.log("Upload success:", response.data);
//   } catch (error) {
//     // Handle the error
//     console.error("Upload failed:", error);
//   }
// };
