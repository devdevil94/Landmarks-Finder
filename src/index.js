import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import MapContainer from "./MapContainer";
import { Button, ButtonBase, Grid } from "@material-ui/core";

import "./styles.css";

const appStyle = {};

class App extends Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <Grid
          container
          spacing={0}
          direction="column"
          // alignItems="center"
        >
          <Grid item xs>
            <MapContainer />
          </Grid>
          <Grid item xs>
            <Button variant="outlined" color="primary">
              Find
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
