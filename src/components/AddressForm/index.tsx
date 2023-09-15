import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    user: Yup.object().shape({
        streetAddress: Yup.string().required('Street Address is required!'),
        city: Yup.string().required('City is required!'),
        state: Yup.string().required('State is required!'),
        zipcode: Yup.string().required('Zip Code is required!'),
    }),
});

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const App: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            user: {
                streetAddress: '',
                city: '',
                state: '',
                zipcode: '',
            },
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            message.success('Form submitted successfully!');
        },
    });

    return (
        <Form
            {...layout}
            onFinish={formik.handleSubmit}
            style={{ maxWidth: 600, padding: '3rem', borderRadius: '9999px' }}
        >
            <Form.Item
                label="Street Address"
                name="user.streetAddress"
                rules={[{ required: true, message: 'Street Address is required!' }]}
            >
                <Input onChange={formik.handleChange} value={formik.values.user.streetAddress} />
            </Form.Item>

            <Form.Item
                label="City"
                name="user.city"
                rules={[{ required: true, message: 'City is required!' }]}
            >
                <Input onChange={formik.handleChange} value={formik.values.user.city} />
            </Form.Item>

            <Form.Item
                label="State"
                name="user.state"
                rules={[{ required: true, message: 'State is required!' }]}
            >
                <Input onChange={formik.handleChange} value={formik.values.user.state} />
            </Form.Item>

            <Form.Item
                label="Zip Code"
                name="user.zipcode"
                rules={[{ required: true, message: 'Zip Code is required!' }]}
            >
                <Input onChange={formik.handleChange} value={formik.values.user.zipcode} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default App;
