import React from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  ListItem,
} from "@material-ui/core";
import { ChevronRight, Today } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  root: {
    width: "100%",
    maxWidth: "850px",
    maxHeight: "40px",
    margin: "0 auto",
    alignItems: "center",
    wordBreak: "break-text",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    display: "flex",
    minWidth: "100%",
    justifyContent: "space-between",
  },
  date: {
    marginTop: "4px",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  listitemtext: {
    wordBreak: "break-word",
  },
}));

const ListItemComponent = ({ data }) => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const { abstract, byline, url, published_date } = data || {};

  return (
    <a href={url} className={classes.link} target="_blank" rel="noreferrer">
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          style={{ width: !matches ? "210px" : null, textAlign: "justify" }}
          primary={<div className="ellipsis">{abstract || "NA"}</div>}
          secondary={
            <div
              style={{
                display: matches ? "flex" : "inline",
                justifyContent: "space-between",
              }}
            >
              <div>{byline}</div>
              <div variant="body2" className={classes.date} color="textPrimary">
                <div
                  style={{
                    display: "flex",
                    width: "fit-content",
                  }}
                >
                  <Today fontSize="small" />
                  <div>{published_date || "NA"}</div>
                </div>
              </div>
            </div>
          }
          className={classes.listitemtext}
        />
        <ListItemSecondaryAction style={{ right: "0" }}>
          <IconButton edge="end" aria-label="comments">
            <ChevronRight fontSize="large" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </a>
  );
};

ListItemComponent.defaultProps = {
  data: {},
};

ListItemComponent.propTypes = {
  data: PropTypes.object,
};

export default ListItemComponent;
