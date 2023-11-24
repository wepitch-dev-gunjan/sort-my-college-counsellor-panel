import { Tooltip, Typography } from "@mui/material";
import "./style.scss";
import { FaCamera } from "react-icons/fa";

const CoverImage = ({ src }) => {
  return (
    <div className="CoverImage-container">
      <img src={src} alt="Cover Image" />
      <Tooltip
        title={
          <Typography style={{ fontSize: "16px" }}>
            Change cover picture
          </Typography>
        }
        placement="bottom"
        arrow
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
        <div className="pic-upload-container">
          <FaCamera size="25" className="camera-icon" />
        </div>
      </Tooltip>
    </div>
  );
};

export default CoverImage;
