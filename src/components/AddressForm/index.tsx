import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Button, Input } from 'antd';
import * as Yup from 'yup';
import styles from './style.module.css';

const initialValues = {
    user: {
        streetAddress: '',
        city: '',
        state: '',
        zipcode: ''
    },
};

const validationSchema = Yup.object({
    user: Yup.object().shape({
        streetAddress: Yup.string().required('Street Address is required!'),
        city: Yup.string().required('City is required!'),
        state: Yup.string().required('State is required!'),
        zipcode: Yup.string()
            .required('Zipcode is required!')
            .matches(/^\d{5}$/, 'Zipcode must be 5 digits'),
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
                    <label htmlFor="user.streetAddress" className={styles.label}>
                        Street Address
                    </label>
                    <Field
                        type="text"
                        id="user.streetAddress"
                        name="user.streetAddress"
                        as={Input}
                        className={`${styles.field} form-control`} // Apply field styles
                    />
                    <ErrorMessage
                        name="user.streetAddress"
                        component="div"
                        className={styles.errorText}
                    />
                    <label htmlFor="user.city" className={styles.label}>
                        City
                    </label>
                    <Field
                        type="text"
                        id="user.city"
                        name="user.city"
                        as={Input}
                        className={`${styles.field} form-control`} // Apply field styles
                    />
                    <ErrorMessage
                        name="user.city"
                        component="div"
                        className={styles.errorText}
                    />
                    <label htmlFor="user.state" className={styles.label}>
                        State
                    </label>
                    <Field
                        type="text"
                        id="user.state"
                        name="user.state"
                        as={Input}
                        className={`${styles.field} form-control`} // Apply field styles
                    />
                    <ErrorMessage
                        name="user.state"
                        component="div"
                        className={styles.errorText}
                    />
                    <label htmlFor="user.zipcode" className={styles.label}>
                        Zipcode
                    </label>
                    <Field
                        type="text"
                        id="user.zipcode"
                        name="user.zipcode"
                        as={Input}
                        className={`${styles.field} form-control`} // Apply field styles
                    />
                    <ErrorMessage
                        name="user.zipcode"
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
