import "./style.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { Tooltip } from "@mui/material";

const Comment = ({ id, owner_name, owner_img, text, visibility }) => {
  return (
    <div className="Comment-container">
      <div className="owner">
        <img src={owner_img} alt="" />
      </div>
      <div className="content">
        <div className="top">
          <span>{owner_name}</span>
          <Tooltip title="Delete" placement="right">
            <div className="delete-icon">
              <RiDeleteBinLine size="16" />
            </div>
          </Tooltip>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
