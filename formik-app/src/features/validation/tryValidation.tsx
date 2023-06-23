import react from "react";
import { Formik, Form, Field } from "formik";
import { FormikDebug } from "formik-antd";
import { error } from "console";

export function TryValidation() {
  //   Formik has 2 types of validation. Custom validators and Schema validation
  const initialValues = {
    firstName: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const errors = { firstName: "" };
        if (!values.firstName) {
          errors.firstName = "required";
        }
        return errors;
      }}
    >
      {(formik) => (
        <>
          <Form>
            <Field id="firstName" name="firstName" placeholder="First name" />
            {formik.touched.firstName && formik.errors.firstName && (
              <h2>Errror: {formik.errors.firstName}</h2>
            )}
            <button type="submit">Submit</button>
          </Form>
          <FormikDebug />
        </>
      )}
    </Formik>
  );
}
