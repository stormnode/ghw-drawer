// This was the ImageGridList prior to swapping out
// an img for a SimpleCard...

// Now we have two types of Gridlists instead of one.
// The 2nd type is the SingleLineGridList

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import GridList, { GridListTile } from "material-ui/GridList";
import GhCardNoImage from "./../cards/GhCardNoImage";
import GhCard from "./../cards/GhCard";
import lightGreen from "material-ui/colors/lightGreen";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    height: 250,
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    backgroundColor: lightGreen[100]
  },
  gridListSingleLine: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    backgroundColor: lightGreen[100]
  },
  subheader: {
    width: "100%"
  }
});

function GhCardGL(props) {
  const { classes, tileData, repoName, viewName } = props;

  if (viewName === "view1") {
    return (
      <div>
        <div>
          <h3>Repo: {repoName}</h3>
          <h4>View: {viewName}</h4>
        </div>

        <div className={classes.root}>
          <GridList cellHeight={250} className={classes.gridList} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.avatar} cols={tile.cols || 1}>
                <GhCard tile={tile} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }

  if (viewName === "view2") {
    return (
      <div>
        <div>
          <h3>Repo: {repoName}</h3>
          <h4>View: {viewName}</h4>
        </div>

        <div className={classes.root}>
          <GridList cellHeight={250} className={classes.gridListSingleLine} cols={6}>
            {tileData.map(tile => (
              <GridListTile key={tile.avatar} cols={tile.cols || 1}>
                <GhCard tile={tile} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h3>Repo: {repoName}</h3>
        <h4>View: {viewName}</h4>
      </div>

      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.avatar} cols={tile.cols || 1}>
              <GhCardNoImage tile={tile} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

GhCardGL.propTypes = {
  classes: PropTypes.object.isRequired,
  tileData: PropTypes.array.isRequired,
  repoName: PropTypes.string.isRequired,
  viewName: PropTypes.string.isRequired
};

export default withStyles(styles)(GhCardGL);
