import React from 'react';
import {Field, reduxForm} from 'redux-form';

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = "Please enter an email.";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "Please enter a password.";
    }
    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = "Please enter a password confirmation.";
    }
    if (values.password !== values.passwordConfirmation) {
        errors.password = "Passwords do not match;";
    }

    return errors;
};

class Signup extends React.Component
{
    render()
    {
        return <div>Signup</div>;
    }
}

export default Signup;
