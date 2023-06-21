import React from "react";
import ReactDOM from "react-dom/client";
import { TryBasicForm } from "./features/tryBasicForm";
import { TryValidationAndErrors } from "./features/tryValidationAndErrors";

export function App() {
  return (
    <>
      <hr />
      <h3>
        Try basic form. It demonstrates how to bind Formik value to html element
      </h3>
      <TryBasicForm />
      <hr />
      <h3>Try Formik validation and validation errors</h3>
      <TryValidationAndErrors />
    </>
  );
}
