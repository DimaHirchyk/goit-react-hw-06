import { Formik, Form, Field } from "formik";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <>
      <Formik initialValues={{ value }}>
        <Form className={css.cont}>
          <label htmlFor="username" className={css.label}>
            Find contacts by name
          </label>
          <Field
            type="text"
            name="username"
            onChange={(e) => onFilter(e.target.value)}
            className={css.input}></Field>
        </Form>
      </Formik>
    </>
  );
}
