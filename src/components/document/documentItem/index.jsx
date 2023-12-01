import React from "react";
import "./style.scss";

const DocumentItem = ({ index, document, onDocumentChange, onFieldChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onDocumentChange(index, file);
  };

  const handleFieldChange = (e) => {
    const selectedField = e.target.value;
    onFieldChange(index, selectedField);
  };

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
                Proof if you have own counselling company
              </option>
              <option value="field5">Degree of Bachelor in Counselling</option>
            </select>
          </div>
          <div className="upload">
            <input
              className="upload-btn"
              type="file"
              onChange={handleFileChange}
              accept=".pdf"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentItem;
