import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
}));

export default function ContentWrap({ isFetching, isError, children, style }) {
  const classes = useStyles();
  if (isError) {
    return <div className="ContentWrap">Something went wrong...</div>;
  }

  if (isFetching) {
    return (
      <div
        className={classes.root}
        style={style}
        data-testid="loading-component"
      >
        <CircularProgress />
      </div>
    );
  }
  return children;
}

ContentWrap.defaultProps = {
  isError: false,
  style: { margin: "0px auto", width: "10%", minHeight: "200px" },
};

ContentWrap.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};
