import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { send } from "utils/Push";

function notifUser() {
  send("TEST", "TEST NOTIFICATION IS WORKING!!!");
}

const Notifications = () => {
  return (
    <div>
      <Alert severity="info">
        <AlertTitle>Case Update</AlertTitle>
        Hello user! There might be some new updates regarding the case you've
        filed — <strong>check it out!</strong>
      </Alert>
      <br />
      <Alert severity="info">
        <AlertTitle>Case Update</AlertTitle>
        Hello user! There might be some new updates regarding the case you've
        filed — <strong>check it out!</strong>
      </Alert>
      <br />
      <Alert severity="info">
        <AlertTitle>Case Update</AlertTitle>
        Hello user! There might be some new updates regarding the case you've
        filed — <strong>check it out!</strong>
      </Alert>
      <br />
      <Alert severity="info">
        <AlertTitle>Case Update</AlertTitle>
        Hello user! There might be some new updates regarding the case you've
        filed — <strong>check it out!</strong>
      </Alert>
      <br />
      <Alert severity="info">
        <AlertTitle>Case Update</AlertTitle>
        Hello user! There might be some new updates regarding the case you've
        filed — <strong>check it out!</strong>
      </Alert>
      <br />
      <Alert severity="info">
        <AlertTitle>Case Update</AlertTitle>
        Hello user! There might be some new updates regarding the case you've
        filed — <strong>check it out!</strong>
      </Alert>
      <br />

      <button onClick={notifUser}>HELLO</button>
    </div>
  );
};

export default Notifications;
