import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from 'antd';
import './AccountForm.css';

const initialValues = {
    user: {
        username: '',
        password: '',
    },
};

const validationSchema = Yup.object({
    user: Yup.object({
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
    const handleSubmit = (values: unknown) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form style={{ maxWidth: 600, padding: '3rem', borderRadius: '8px' }}>
                <div className="form-group">
                    <label htmlFor="user.username">Username</label>
                    <Field type="text" id="user.username" name="user.username" as={Input} />
                    <ErrorMessage
                        name="user.username"
                        component="div"
                        className="error-text"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="user.password">Password</label>
                    <Field type="password" id="user.password" name="user.password" as={Input.Password} />
                    <ErrorMessage
                        name="user.password"
                        component="div"
                        className="error-text"
                    />
                </div>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Formik>
    );
};

export default App;
