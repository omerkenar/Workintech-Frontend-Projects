import { useEffect, useState } from "react";
import {
    Button,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

const initialFormData = {
    email: "",
    password: "",
    terms: false,
};

const initialErrors = {
    email: false,
    password: false,
    terms: false,
};

const errorMessages = {
    email: "Email must be a valid email address",
    password: "Password must be at least 8 characters long",
    terms: "You must agree to the terms and conditions",
};

export default function Login({ goTo }) {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [isValid, setIsValid] = useState(false);
    const [touched, setTouched] = useState({});

    useEffect(() => {
        const validationResults = validateForm();
        setIsValid(validationResults.isValid);
        const newErrors = {};
        Object.keys(touched).forEach((field) => {
            newErrors[field] = validationResults.errors[field];
        });
        setErrors((errors) => ({ ...errors, ...newErrors }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData, touched]);

    const validateForm = () => {
        const { email, password, terms } = formData;
        const emailValid = String(email)
            .toLowerCase()
            .trim()
            .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/gim);
        const passwordValid = password.length >= 8;
        const termsValid = terms;
        return {
            errors: {
                email: !emailValid,
                password: !passwordValid,
                terms: !termsValid,
            },
            isValid: emailValid && passwordValid && termsValid,
        };
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        setTouched({ ...touched, [name]: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationResults = validateForm();
        setErrors(validationResults.errors);
        if (validationResults.isValid) {
            goTo("/success");
            console.log("Form submitted successfully!");
        } else {
            console.log("Form has errors!");
        }
    };

    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    placeholder="enter your email address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    invalid={errors.email}
                    data-cy="email"
                />
                {errors.email && (
                    <FormFeedback>{errorMessages.email}</FormFeedback>
                )}
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    placeholder="enter your password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    invalid={errors.password}
                    data-cy="password"
                />
                {errors.password && (
                    <FormFeedback>{errorMessages.password}</FormFeedback>
                )}
            </FormGroup>
            <FormGroup check inline>
                <Input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                    invalid={errors.terms}
                    data-cy="terms"
                />
                <Label check>I Agree Terms & Conditions</Label>
                {errors.terms && (
                    <FormFeedback>{errorMessages.terms}</FormFeedback>
                )}
            </FormGroup>
            <FormGroup>
                <Button color="primary" disabled={!isValid} data-cy="submit">
                    Submit
                </Button>
            </FormGroup>
        </Form>
    );
}
