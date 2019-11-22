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
  button[type='submit'] {
    border: 2px solid black;
  }
  textarea {
    border: 1.1px solid black;
    height: 100px;
  }
`;

function Contact() {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({
    sending: false,
    sent: false,
    msg: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ ...status, sending: true });
    const resp = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const text = await resp.text();
    setStatus({ ...status, sending: false, msg: text });
    setData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: any) => {
    const { value, name } = e.currentTarget;
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
        <textarea onChange={handleChange} value={data.message} name="message" required />
        <button type="submit" disabled={status.sent}>
          {!status.sending ? (!status.sent ? 'Submit' : 'Sent!') : 'Sending...'}
        </button>
      </Form>
      <p>{status.msg}</p>
    </Container>
  );
}

export default Contact;
