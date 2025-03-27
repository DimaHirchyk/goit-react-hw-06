import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,5}[-.\s]?\d{1,5}$/,
      "Invalid phone number format"
    )
    .required("Required"),
});

const initialValues = {
  username: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const handlSubmit = (values, actions) => {
    const newUser = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    onAdd(newUser);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handlSubmit}
        validationSchema={FeedbackSchema}>
        <Form className={css.form}>
          <label htmlFor="username" className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id="username"
            className={css.input}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />

          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field type="text" name="number" id="number" className={css.input} />
          <ErrorMessage name="number" component="span" className={css.error} />

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
