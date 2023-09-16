import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Button, Input } from 'antd';
import * as Yup from 'yup';
import styles from './style.module.css';

const initialValues = {
    user: {
        fullName: '',
        emailAddress: '',
        birthday: '',
    },
};

const validationSchema = Yup.object({
    user: Yup.object().shape({
        fullName: Yup.string().required('Full Name is required!'),
        emailAddress: Yup.string()
            .required('Email Address is required!')
            .email('Invalid email address'),
        birthday: Yup.date()
            .required('Birthday is required!')
            .max(new Date(), 'Birthday cannot be in the future'),
    }),
});

const App: React.FC = () => {
    const handleSubmit = (values: unknown) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form
                style={{ maxWidth: 600, padding: '3rem', borderRadius: '8px' }}
            >
                <div className="form-group">
                    <label htmlFor="user.fullName" className={styles.label}>
                        Full Name
                    </label>
                    <Field
                        type="text"
                        id="user.fullName"
                        name="user.fullName"
                        as={Input}
                        className={`${styles.field} form-control`} // Apply field styles
                    />
                    <ErrorMessage
                        name="user.fullName"
                        component="div"
                        className={styles.errorText}
                    />
                    <label htmlFor="user.emailAddress" className={styles.label}>
                        Email Address
                    </label>
                    <Field
                        type="email"
                        id="user.emailAddress"
                        name="user.emailAddress"
                        as={Input}
                        className={`${styles.field} form-control`} // Apply field styles
                    />
                    <ErrorMessage
                        name="user.emailAddress"
                        component="div"
                        className={styles.errorText}
                    />
                    <label htmlFor="user.birthday" className={styles.label}>
                        Birthday
                    </label>
                    <Field
                        type="date"
                        id="user.birthday"
                        name="user.birthday"
                        as={Input}
                        className={`${styles.field} form-control`} // Apply field styles
                    />
                    <ErrorMessage
                        name="user.birthday"
                        component="div"
                        className={styles.errorText}
                    />
                    <Button type="primary" htmlType="submit" style={{ marginTop: "20px" }}>
                        Submit
                    </Button>
                </div>
            </Form>
        </Formik>
    );
};

export default App;
