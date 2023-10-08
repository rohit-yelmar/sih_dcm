import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { send } from "utils/Push";

const Notifications = () => {
  return (
    <div>
      <br />
      <Alert severity="info">
        <AlertTitle>Case Filed</AlertTitle>
        Your case has been filed, you can now check case overview and
        categorization — <strong>check it out!</strong>
      </Alert>
      <br />
      {/* <Alert severity="info">
        <AlertTitle>Pre-Hearing appointment</AlertTitle>
        Your appointment is set due 29th September 2023 —{" "}
        <strong>check it out!</strong>
      </Alert> */}
      <br />
    </div>
  );
};

export default Notifications;
