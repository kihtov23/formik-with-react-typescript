import { Field, Form, Formik } from "formik";
import { FormikDebug } from "formik-antd";
import * as Yup from "yup";

//2. Schema validation with Yup (third party lib)
export function TrySchemaValidation() {
  const initialValues = {
    firstName: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        alert(JSON.stringify(values));
        action.setSubmitting(false);
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("This field is required")
          .min(3, "Should be minimum 3 characters"),
      })}
    >
      {(formik) => (
        <>
          <Form>
            <Field name="firstName" id="firstName" placeholder="First name" />
            {formik.touched && formik.errors.firstName && (
              <h4>{formik.errors.firstName}</h4>
            )}
            <button type="submit">Submit</button>
          </Form>
          <FormikDebug />
        </>
      )}
    </Formik>
  );
}
