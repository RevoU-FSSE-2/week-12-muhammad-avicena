import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Button, Input } from 'antd';
import * as Yup from 'yup';
import styles from './style.module.css';

const initialValues = {
    user: {
        username: '',
        password: '',
    },
};

const validationSchema = Yup.object({
    user: Yup.object().shape({
        username: Yup.string()
            .required('Username is required!')
            .min(6, 'Username must be at least 6 characters long'),
        password: Yup.string()
            .required('Password is required!')
            .min(8, 'Password must be at least 8 characters long')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
                'Password must contain at least one letter, one number, and one special character'
            ),
    }),
});

const App: React.FC = () => {
    const handleSubmit = (values: typeof initialValues) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form
                style={{
                    maxWidth: 600,
                    margin: '0 auto',
                    padding: '2rem',
                    borderRadius: '8px',
                }}
            >
                <div className={'form-group'}>
                    <label htmlFor="user.username" className={styles.label}>
                        Username
                    </label>
                    <Field
                        type="text"
                        id="user.username"
                        name="user.username"
                        as={Input}
                        className={`${styles.field} form-control`}
                    />
                    <ErrorMessage
                        name="user.username"
                        component="div"
                        className={styles.errorText}
                    />
                </div>

                <div className={'form-group'}>
                    <label htmlFor="user.password" className={styles.label}>
                        Password
                    </label>
                    <Field
                        type="password"
                        id="user.password"
                        name="user.password"
                        as={Input.Password}
                        className={`${styles.field} form-control`}
                    />
                    <ErrorMessage
                        name="user.password"
                        component="div"
                        className={styles.errorText}
                    />
                </div>

                <Button type="primary" htmlType="submit" style={{ marginTop: "20px" }}>
                    Submit
                </Button>
            </Form>
        </Formik>
    );
};

export default App;
