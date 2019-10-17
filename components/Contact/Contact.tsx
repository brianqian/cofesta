import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    border: 1.1px solid black;
    margin: 0.5rem 0;
    height: 25px;
    width: 100%;
    ::placeholder {
      padding-left: 3px;
    }
  }
  input[type='submit'] {
    border: 2px solid black;
  }
  textarea {
    border: 1.1px solid black;
    height: 100px;
  }
`;

function Contact() {
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
  };

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={data.name}
          name="name"
          type="text"
          placeholder="Name: "
        />
        <input
          onChange={handleChange}
          value={data.email}
          name="email"
          type="email"
          placeholder="Email: "
        />
        <textarea onChange={handleChange} value={data.message} name="message" />
        <input type="submit" />
      </Form>
    </Container>
  );
}

export default Contact;
