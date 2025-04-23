import { Alert, Button } from "reactstrap";

export default function Success({ goTo }) {
    return (
        <Alert>
            <h4 className="alert-heading">Submitted!</h4>
            <p>
                You have successfully submitted the form. We will get back to
                you as soon as possible.
            </p>
            <hr />
            <p className="mb-2">Thank you for your interest in our services.</p>
            <Button color="primary" onClick={() => goTo("/")}>
                Go back to login
            </Button>
        </Alert>
    );
}
