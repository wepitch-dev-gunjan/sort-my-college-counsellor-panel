import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip, Typography } from "@mui/material";
import "./style.scss";

const SidebarMenuButton = ({ href, icon: Icon, text, expand }) => {
  const location = useLocation();

  return (
    <Tooltip
      title={<Typography style={{ fontSize: "16px" }}>{text}</Typography>}
      placement="right"
      disableHoverListener={expand}
      arrow
    >
      <div>
        <Link to={href}>
          <div
            className="SidebarMenuButton-container"
            style={{
              width: `${expand ? "250px" : ""}`,
              background: `${
                location.pathname == href ? "var(--border-dark)" : ""
              }`,
            }}
          >
            <div className="inner-container">
              <Icon />
              {expand && <span>{text}</span>}
            </div>
          </div>
        </Link>
      </div>
    </Tooltip>
  );
};

export default SidebarMenuButton;
