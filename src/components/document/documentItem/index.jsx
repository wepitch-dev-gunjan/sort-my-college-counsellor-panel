import React, { useRef } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Tooltip } from "@mui/material";
import "./style.scss";

const DocumentItem = ({
  index,
  document,
  onDocumentChange,
  onFieldChange,
  onDelete,
  editProfileEnable,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onDocumentChange(index, file);
  };

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleFieldChange = (e) => {
    const selectedField = e.target.value;
    onFieldChange(index, selectedField);
  };

  return (
    <div className="DocumentItem">
      <div className="row">
        <div className="col">
          <div className="dropdown">
            <select
              onChange={handleFieldChange}
              value={document?.selectedField}
            >
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
            {editProfileEnable && (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentItem;
