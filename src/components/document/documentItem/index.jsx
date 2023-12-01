import React from "react";
import "./style.scss";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Tooltip } from "@mui/material";
import { useRef } from "react";

const DocumentItem = ({
  index,
  document,
  onDocumentChange,
  onFieldChange,
  onDelete,
  editEnable,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onDocumentChange(index, file);
  };

  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFieldChange = (e) => {
    const selectedField = e.target.value;
    onFieldChange(index, selectedField);
  };

  //   const handleChange = (event) => {
  //     const fileUploaded = event.target.files[0];
  //     handleFile(fileUploaded); // ADDED
  //   };
  return (
    <div className="Documents">
      <div className="row">
        <div className="col">
          <div className="dropdown">
            <select onChange={handleFieldChange} value={document.selectedField}>
              <option value="field1">Career Counselling Certificate</option>
              <option value="field2">Experience Certificate</option>
              <option value="field3">Proof of working</option>
              <option value="field4">
                Proof if you have your own counselling company
              </option>
              <option value="field5">Degree of Bachelor in Counselling</option>
            </select>
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

            <div className="up-icons">
              <Tooltip title="Edit" placement="bottom">
                <div className="edit-icon">
                  <CiEdit size="16" />
                </div>
              </Tooltip>
              {editEnable && (
                <Tooltip title="Delete" placement="bottom">
                  <div
                    className="delete-icon"
                    onClick={() => onDelete(index)}
                    disabled={index === 0} // Disable the delete button for the first item
                  >
                    <MdDeleteOutline size="16" />
                  </div>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentItem;
