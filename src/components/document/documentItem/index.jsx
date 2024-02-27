import React, { useContext, useRef, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Tooltip } from "@mui/material";
import { MdDeleteForever } from "react-icons/md";
import "./style.scss";
import { backend_url } from "../../../config";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/UserContext";

const DocumentItem = ({
  document,
  documentTypes,
  documentType,
  file,
  editProfileEnable,
  getIdByName,
  getDocumentTypeFromId
}) => {
  const hiddenFileInput = useRef(null);
  const { user } = useContext(UserContext);
  const [currentField, setCurrentField] = useState(documentType);

  console.log("document types in document item", documentTypes)


  const handleSelect = (e) => {
    console.log(document)
    setCurrentField(e.target.value);
  }

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      const { data } = await axios.post(
        `${backend_url}/counsellor/document/upload-document`,
        formData,
        {
          headers: {
            Authorization: user.token // Assuming user.token contains the authorization token
          },
          params: {
            document_type: getIdByName(currentField) // Assuming currentField is defined elsewhere in your code
          }
        }
      );

      // Update state or do something with the response data if needed
      console.log("Upload successful:", data);
      toast.success("Document uploaded successfully"); // Assuming toast is defined and comes from a library like react-toastify

    } catch (error) {
      // Improve error handling
      console.error("Error uploading document:", error.response ? error.response.data : error.message);
      toast.error("Error uploading document. Please try again later.");
    }
  };

  const handleDeleteDocument = async () => {
    try {
      const { data } = await axios.delete(`${backend_url}/counsellor/document/${document._id}`,
        null,
        {
          headers: {
            Authorization: user.token
          }
        })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="DocumentItem">
      {/* changed by r  */}
      <div className="row DocumentItemRow">
        <div className="col DocumentItemCol">
          <div className="dropdown">
            {editProfileEnable && !documentType ? (
              <select
                onChange={handleSelect}
                value={currentField}
              >
                {documentTypes.map(dType => (
                  <option value={dType.name} key={dType._id} >{dType.name}</option>
                ))}
              </select>
            ) : (
              <>
                <p>{getDocumentTypeFromId(documentType)}</p>
              </>
            )}

          </div>

          {editProfileEnable ? (
            <>
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
              <div className="delete-button" onClick={handleDeleteDocument}>
                <MdDeleteForever size="20" />
              </div>
            </>
          ) : (
            <div >
              <a href={file} target="_blank" >link</a>
            </div>
          )}

          {/* <div className="upload">
            
            {/* {editProfileEnable && (
              <div className="up-icons">
                <Tooltip title="Delete" placement="bottom">
                  <div
                    className="delete-icon"
                    onClick={() => onDelete(index)}
                    disabled={index === 0}
                  >
                    <MdDeleteOutline size="16" />
                  </div>
                </Tooltip>
              </div>
            )}
          </div> */}
        </div>
      </div>
      {/* changed by r  */}
    </div>
  );
};

export default DocumentItem;
