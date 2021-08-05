import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import PropTypes from "prop-types";
import ListItem from "../../components/ListItem";
import ContentWrap from "../../components/ContentWrap/ContentWrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "850px",
    margin: "0 auto",
    alignItems: "center",
    wordBreak: "break-text",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FolderList({ info }) {
  const classes = useStyles();
  const { isFetching, isError, data = [] } = info;

  return (
    <ContentWrap isFetching={isFetching} isError={isError}>
      <List className={classes.root}>
        {data && data.length ? (
          data.map((val, index) => <ListItem key={index * 2 + 1} data={val} />)
        ) : (
          <div>Item not found !</div>
        )}
      </List>
    </ContentWrap>
  );
}

FolderList.propTypes = {
  info: PropTypes.object.isRequired,
};
