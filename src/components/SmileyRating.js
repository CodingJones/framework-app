import React, { Component } from "react";
import "../App.css";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  rating: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export function SmileyRating() {
  const styles = useStyles();
  return (
    <Box component="fieldset" mb={1} borderColor="transparent">
      <Rating
        name="customized-icons"
        defaultValue={2}
        getLabelText={(value) => customIcons[value].label}
        IconContainerComponent={IconContainer}
      />
    </Box>
  );
}
