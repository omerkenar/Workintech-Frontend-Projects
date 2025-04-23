import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function FormContainer(props) {
  const { setUsers } = props;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    title: '',
    tasks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addUser = () => {
    const user = { ...formData, tasks: formData.tasks.split('\n') };
    setUsers((prev) => {
      const match = prev.find((i) => i.name === user.name);
      if (match) {
        return prev;
      }
      return [...prev, user];
    });
    setFormData({
      name: '',
      email: '',
      department: '',
      title: '',
      tasks: '',
    });
  };

  return (
    <Form>
      <FormGroup>
        <Label>Ad Soyad:</Label>
        <Input
          id="name"
          name="name"
          placeholder="Çalışanın tam adı ve soyadı"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Kurumsal email adresi"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Departman</Label>
        <Input
          id="department"
          name="department"
          placeholder="Çalıştığı departman"
          type="text"
          value={formData.department}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Ünvan</Label>
        <Input
          id="title"
          name="title"
          placeholder="Çalışanın ünvanı"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Takım İçi Görevleri: </Label>
        <Input
          id="tasks"
          name="tasks"
          placeholder="Çalışanın takım içerisindeki görev listesi"
          type="textarea"
          rows="4"
          value={formData.tasks}
          onChange={handleChange}
        />
      </FormGroup>
      <Button onClick={addUser}>Kaydet</Button>
    </Form>
  );
}

export default FormContainer;
