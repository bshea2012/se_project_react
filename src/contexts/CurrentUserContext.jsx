import React from "react";

export const CurrentUserContext = React.createContext({
  userData: { _id: "", username: "", avatar: "", email: "", name: "" },
});
