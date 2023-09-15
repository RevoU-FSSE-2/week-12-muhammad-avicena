import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';

import { PersonalForm, AddressForm, AccountForm } from '../../components'

const steps = [
    {
        title: 'First step',
        content: <PersonalForm />,
        description: 'Personal Information'
    },
    {
        title: 'Second step',
        content: <AddressForm />,
        description: 'Address Information'
    },
    {
        title: 'Final step',
        content: <AccountForm />,
        description: 'Account Information'
    },
];

const FormPage: React.FC = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const contentStyle: React.CSSProperties = {
        lineHeight: '260px',
        margin: '20px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        borderRadius: token.borderRadiusLG,
        border: `1px ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <>
            <Steps
                progressDot
                current={current}
                items={steps}
            />
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default FormPage;