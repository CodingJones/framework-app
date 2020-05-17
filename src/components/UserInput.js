import React, { Component } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import styled from "styled-components";

const StyledInput = styled.div`
  width: 500px;
  margin-top: 20px;
  background: #edeff1;
  border: 1px solid #d9dbdf;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  &:hover {
    box-shadow: 0px 4px 20px #999;
    border-radius: 40px;
  }
`;

const useStyles = makeStyles((theme) => ({
  writeField: {
    width: 400,
    height: 150,
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 300,
    color: "#0d47a1",
    fontStyle: "italic",
  },
  paper: {
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
      <StyledInput>
        <InputBase
          className={styles.writeField}
          id="outlined-multiline-static"
          multiline
          inputProps={{ "aria-label": "naked" }}
          rows={6}
        />
      </StyledInput>
    </div>
  );
}
