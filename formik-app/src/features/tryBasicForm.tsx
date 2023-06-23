import react from "react";
import { Formik, Form, Field } from "formik";
import { FormikDebug } from "formik-antd";

interface UserViewModel {
  firstName: string;
}

export function TryBasicForm() {
  const initialValues: UserViewModel = {
    firstName: "",
  };

  return (
    <>
      {/* 
      Formik is about such features features:
      - form values. Bind them with html element via name attribute
      - handle submit
      - handleChange (it is just React setState in the end)
      - track visited fields. onBlur html element event - touched Formik prop
      - form validation
      - validation errors 
      */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values));
          //Formik sets isSubmitting to true automatically and it's developer's responsibility to set it to false
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First name</label>
          {/* Field is by default input  but could be other types as well. 
          It passes onChange, onBlur, value and name to the html element   */}
          <Field id="firstName" name="firstName" placeholder="First name" />
          <button type="submit">Submit</button>
          <h4>FormikDebug demonstrates what is formik about:</h4>
          {/* FormikDebug should be placed inside the formik component. */}
          <FormikDebug />
        </Form>
      </Formik>
    </>
  );
}
