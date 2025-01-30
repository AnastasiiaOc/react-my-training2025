import { Formik, Form, Field, ErrorMessage } from "formik";
// namespace import
import * as Yup from "yup";
import css from "./UserForm.module.css";

const UserSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Too short, min 3 letters!")
        .max(15, "Too long, max 15 letters!")
        .required("This field is required!"),
    email: Yup.string()
        .email("Must be in email format!")
        .required("This field is required!"),
    role: Yup.string()
        .oneOf(["guest", "user", "admin"])
        .required("This field is required!"),
    comment: Yup.string()
        .max(100, "Too long, max 100 letters!")
        .required("This field is required!"),
    options: Yup.array().required("This field is required!"),
});

export default function UserForm() {
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                username: "",
                email: "",
                role: "guest",
                comment: "",
                options: [],
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label>Username:</label>

                    <Field type="text" className={css.input} name="username" />
                    <ErrorMessage
                        name="username"
                        component="span"
                        className={css.error}
                    />
                </div>

                <div className={css.formGroup}>
                    <label>Email:</label>
                    <Field type="email" className={css.input} name="email" />
                    <ErrorMessage name="email" component="span" className={css.error} />
                </div>

                <div className={css.formGroup}>
                    <label>Role:</label>
                    <Field className={css.input} as="select" name="role">
                        <option value="guest">Guest</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </Field>
                    <ErrorMessage name="role" component="span" className={css.error} />
                </div>

                <div className={css.formGroup}>
                    <label>Comment:</label>
                    <Field as="textarea" className={css.input} name="comment"></Field>
                    <ErrorMessage name="comment" component="span" className={css.error} />
                </div>

                <div className={css.formGroup}>
                    <div>
                        <Field type="checkbox" name="options" value="a" /> A
                    </div>
                    <div>
                        <Field type="checkbox" name="options" value="b" /> B
                    </div>
                    <div>
                        <Field type="checkbox" name="options" value="c" /> C
                    </div>
                    <ErrorMessage name="options" component="span" className={css.error} />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}