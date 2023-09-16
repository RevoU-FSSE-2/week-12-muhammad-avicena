import React, { useState } from 'react';
import { useFormik, FormikProvider, Field, ErrorMessage, Form } from 'formik';
import { Button, Input, Steps } from 'antd';
import * as Yup from 'yup';
import styles from './style.module.css';

const { Step } = Steps;

const validationSchemas = [
    Yup.object().shape({
        fullName: Yup.string().required('Full Name is required!'),
        emailAddress: Yup.string()
            .required('Email Address is required!')
            .email('Invalid email address'),
        birthday: Yup.date().required('Birthday is required!'),
    }),
    Yup.object().shape({
        streetAddress: Yup.string().required('Street Address is required!'),
        city: Yup.string().required('City is required!'),
        state: Yup.string().required('State is required!'),
        zipcode: Yup.string()
            .required('Zipcode is required!')
            .matches(/^\d{5}$/, 'Zipcode must be 5 digits'),
    }),
    Yup.object().shape({
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
];

const initialValues = {
    fullName: '',
    emailAddress: '',
    birthday: '',
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    username: '',
    password: '',
};

const App: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchemas[current],
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
        },
    });

    const next = async () => {
        const isValid = await formik.validateForm();

        if (isValid) {
            setCurrent(current + 1);
        }
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <FormikProvider value={formik}>
            <Form
                style={{
                    maxWidth: 600,
                    margin: '0 auto',
                    padding: '2rem',
                    borderRadius: '8px',
                }}
            >
                <Steps current={current} size="small">
                    <Step title="Personal Info" />
                    <Step title="Address Info" />
                    <Step title="Account Info" />
                </Steps>

                {current === 0 && (
                    <div>
                        <div className={'form-group'}>
                            <label htmlFor="fullName" className={styles.label}>
                                Full Name
                            </label>
                            <Field
                                type="text"
                                id="fullName"
                                name="fullName"
                                as={Input}
                                className={`${styles.field} form-control`}
                            />
                            <ErrorMessage
                                name="fullName"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="emailAddress" className={styles.label}>
                                Email Address
                            </label>
                            <Field
                                type="email"
                                id="emailAddress"
                                name="emailAddress"
                                as={Input}
                                className={`${styles.field} form-control`}
                            />
                            <ErrorMessage
                                name="emailAddress"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="birthday" className={styles.label}>
                                Birthday
                            </label>
                            <Field
                                type="date"
                                id="birthday"
                                name="birthday"
                                as={Input}
                                className={`${styles.field} form-control`}
                            />
                            <ErrorMessage
                                name="birthday"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>
                    </div>
                )}

                {current === 1 && (
                    <div>
                        <div className={'form-group'}>
                            <label htmlFor="streetAddress" className={styles.label}>
                                Street Address
                            </label>
                            <Field
                                type="text"
                                id="streetAddress"
                                name="streetAddress"
                                as={Input}
                                className={`${styles.field} form-control`}
                            />
                            <ErrorMessage
                                name="streetAddress"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="city" className={styles.label}>
                                City
                            </label>
                            <Field
                                type="text"
                                id="city"
                                name="city"
                                as={Input}
                                className={`${styles.field} form-control`}
                            />
                            <ErrorMessage
                                name="city"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="state" className={styles.label}>
                                State
                            </label>
                            <Field
                                type="text"
                                id="state"
                                name="state"
                                as={Input}
                                className={`${styles.field} form-control`}
                            />
                            <ErrorMessage
                                name="state"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="zipcode" className={styles.label}>
                                Zipcode
                            </label>
                            <Field
                                type="text"
                                id="zipcode"
                                name="zipcode"
                                as={Input}
                                className={`${styles.field} form-control`}
                            />
                            <ErrorMessage
                                name="zipcode"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>
                    </div>
                )}

                {current === 2 && (
                    <div>
                        <div className={'form-group'}>
                            <label htmlFor="username" className={styles.label}>
                                Username
                            </label>
                            <Field
                                type="text"
                                id="username"
                                name="username"
                                as={Input}
                                className={`${styles.field} form-control`}
                            />
                            <ErrorMessage
                                name="username"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>

                        <div className={'form-group'}>
                            <label htmlFor="password" className={styles.label}>
                                Password
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                as={Input.Password}
                                className={`${styles.field} form-control`}
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>
                    </div>
                )}

                <div>
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                    {current < validationSchemas.length - 1 && (
                        <Button
                            type="primary"
                            onClick={() => next()}
                            disabled={!formik.isValid}
                            style={{ marginTop: "20px" }}
                        >
                            Next
                        </Button>
                    )}
                    {current === validationSchemas.length - 1 && (
                        <Button
                            type="primary"
                            onClick={() => formik.submitForm()}
                            disabled={!formik.isValid}
                            style={{ margin: "50px" }}
                        >
                            Submit
                        </Button>
                    )}
                </div>
            </Form>
        </FormikProvider>
    );
};

export default App;
