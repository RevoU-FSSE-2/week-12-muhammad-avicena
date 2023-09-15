import { Button, Form, Input, DatePicker } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const PersonalForm = () => {

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    /* eslint-enable no-template-curly-in-string */
    const onFinish = (values: string) => {
        console.log(values);
    };

    return (
        <>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{ maxWidth: 600, padding: '3rem', borderRadius: '9999px' }}
                validateMessages={validateMessages}
            >
                <Form.Item name={['user', 'fullname']} label="Fullname" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'birthday']} label="Date of birth" rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

export default PersonalForm;