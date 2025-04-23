import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

let dom, container;

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const iconButton = fs.readFileSync(
  path.resolve(__dirname, './components/iconButton/iconButton.js'),
  'utf8'
);

beforeAll(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  container = dom.window.document.body;

  let scriptElement = dom.window.document.createElement('script');
  scriptElement.textContent = iconButton;
  dom.window.document.body.appendChild(scriptElement);
});

test('[1] 3 Tane icon button componenti eklendi', () => {
  const elements = container.querySelectorAll('div#icon-buttons > button');
  expect(elements.length).toBe(3);
});

test('[2] Aç butonu text contenti doğru bir şekilde eklendi', () => {
  const btns = container.querySelectorAll('div#icon-buttons > button');
  expect(btns[0]).toHaveTextContent(/Aç/i);
});

test('[3] Aç butonu classları doğru bir şekilde eklendi', () => {
  const btns = container.querySelectorAll('div#icon-buttons > button');
  expect(btns[0]).toHaveClass('btn');
  expect(btns[0]).toHaveClass('btn-blue');
});

test('[4] Aç butonu iconu doğru bir şekilde eklendi', () => {
  const icons = container.querySelectorAll('div#icon-buttons > button > i');
  expect(icons[0]).toHaveClass('fa');
  expect(icons[0]).toHaveClass('fa-folder-open');
});

test('[5] Düzenle butonu text contenti doğru bir şekilde eklendi', () => {
  const btns = container.querySelectorAll('div#icon-buttons > button');
  expect(btns[1]).toHaveTextContent(/Düzenle/i);
});

test('[6] Düzenle butonu classları doğru bir şekilde eklendi', () => {
  const btns = container.querySelectorAll('div#icon-buttons > button');
  expect(btns[1]).toHaveClass('btn');
  expect(btns[1]).toHaveClass('btn-orange');
});

test('[7] Düzenle butonu iconu doğru bir şekilde eklendi', () => {
  const icons = container.querySelectorAll('div#icon-buttons > button > i');
  expect(icons[1]).toHaveClass('fa');
  expect(icons[1]).toHaveClass('fa-pen');
});

test('[8] Sil butonu text contenti doğru bir şekilde eklendi', () => {
  const btns = container.querySelectorAll('div#icon-buttons > button');
  expect(btns[2]).toHaveTextContent(/Sil/i);
});

test('[9] Sil butonu classları doğru bir şekilde eklendi', () => {
  const btns = container.querySelectorAll('div#icon-buttons > button');
  expect(btns[2]).toHaveClass('btn');
  expect(btns[2]).toHaveClass('btn-red');
});

test('[10] Sil butonu iconu doğru bir şekilde eklendi', () => {
  const icons = container.querySelectorAll('div#icon-buttons > button > i');
  expect(icons[2]).toHaveClass('fa');
  expect(icons[2]).toHaveClass('fa-trash');
});
