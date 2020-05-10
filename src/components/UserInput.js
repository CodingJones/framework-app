import React, { Component } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  writeField: {
    width: 400,
    height: 150,
    alignItems: "center",
    textAlign: "center",
  },
  paper: {
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export function UserInput() {
  const styles = useStyles();
  return (
    <div className={styles.paper}>
      <div class="monkeyMind">
        <InputBase
          className={styles.writeField}
          id="outlined-multiline-static"
          multiline
          inputProps={{ "aria-label": "naked" }}
          rows={6}
        />
      </div>
    </div>
  );
}
