import React from "react";
import ReactDOM from "react-dom/client";
import { TryBasicForm } from "./tryBasicForm";
import { TryValidation } from "./tryValidation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <hr />
    <h3>Try basic form</h3>
    <TryBasicForm />
    <hr />
    <h3>Try Formik validation</h3>
    <TryValidation />
  </React.StrictMode>
);
