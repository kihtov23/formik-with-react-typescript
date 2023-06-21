import react from "react";
import { Formik, Form, Field } from "formik";

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
      Formik is a wrapper for these key formik features:
      - form values. Bind them with name attribute
      - handle submit
      - handleChange (in is just React setState in the end)
      - track visited fields. onBlur html element event - touched Formik prop
      - form validation
      - validation errors 
      */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values));
          //Formik set isSubmitting to true automatically and it's developer's responsibility to set it to false
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First name</label>
          {/* Field is by default input  but could be other types as well. 
          It passes onChange, onBlur, value to the element   */}
          <Field id="firstName" name="firstName" placeholder="First name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
