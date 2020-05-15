import React from "react";

var tempDate = new Date();
var date =
  tempDate.getDate() +
  "/" +
  (tempDate.getMonth() + 1) +
  "-" +
  tempDate.getFullYear();

export default function CurrentDate() {
  const currDate = " " + date;
  return <>{currDate}</>;
}
