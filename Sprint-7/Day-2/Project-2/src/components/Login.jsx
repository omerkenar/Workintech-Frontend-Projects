import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

export default function Login() {
  /* 
 ReadMe'deki görev listesini burada yapabilirsin.
 */
  const [formData, setFormData] = useState({ email: '', password: '' });
  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      'https://6540a96145bedb25bfc247b4.mockapi.io/api/login'
    );
    const match = response.data.find(
      (data) =>
        data.email === formData.email && data.password === formData.password
    );

    if (match) {
      history.push('/main');
    } else {
      history.push('/error');
    }
  };

  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password "
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormGroup>
      <Button onClick={handleSubmit} color="primary">
        Sign In
      </Button>
    </Form>
  );
}
