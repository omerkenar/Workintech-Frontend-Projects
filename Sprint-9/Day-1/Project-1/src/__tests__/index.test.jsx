import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import App from '../App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { server } from '../mocks/server';
import 'mutationobserver-shim';
import fs from 'fs';
import path from 'path';

const loginPage = fs
  .readFileSync(path.resolve(__dirname, '../components/Login.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

const app = fs
  .readFileSync(path.resolve(__dirname, '../App.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  document.body.innerHTML = '';
});
beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test("App jsx'e ToastContainer eklenmiş", async () => {
  expect(app.includes('<ToastContainer')).toBe(true);
});

test("App jsx'e toast css'i eklenmiş", async () => {
  expect(app.includes('react-toastify/dist/ReactToastify.css')).toBe(true);
});

test("Login component'inde toastify success mesajı kullanılmış", async () => {
  expect(loginPage.includes('success')).toBe(true);
});

test("Login component'inde toastify error mesajı kullanılmış", async () => {
  const part = loginPage.replaceAll('/error', '');
  expect(part.includes('error')).toBe(true);
});

test('Başarılı girişte "Merhaba {userName}, tekrar hoş geldin." mesajı çıkıyor.', async () => {
  const user = userEvent.setup();

  const email = screen.getByPlaceholderText(/Enter your email/i);
  const password = screen.getByPlaceholderText(/Enter your password/i);
  const terms = screen.getByLabelText(/I agree to/i);

  const loginButton = screen.getByText('Sign In');

  await user.type(email, 'erdem.guntay@wit.com.tr');
  await user.type(password, '9fxIH0GXesEwH_I');
  await user.click(terms);
  await user.click(loginButton);

  await screen.findByText('Merhaba Erdem Guntay, tekrar hoş geldin.');
});

test('Kayıtlı olmayan kullanıcı girişinde "Girdiğiniz bilgilerle bir kullanıcı bulamadık." mesajı çıkıyor.', async () => {
  const user = userEvent.setup();
  const login = screen.getByText('Login');
  await user.click(login);

  const email = screen.getByPlaceholderText(/Enter your email/i);
  const password = screen.getByPlaceholderText(/Enter your password/i);
  const terms = screen.getByLabelText(/I agree to/i);

  const loginButton = screen.getByText('Sign In');

  await user.type(email, 'erdem.gunt@wit.com.tr');
  await user.type(password, '9fxIH0GXesEwH_I');
  await user.click(terms);
  await user.click(loginButton);

  await screen.findByText('Girdiğiniz bilgilerle bir kullanıcı bulamadık.');
});
