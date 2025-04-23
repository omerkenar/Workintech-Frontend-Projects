import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

let dom, container;

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');

beforeAll(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  document = dom.window.document;
  let scriptElement = dom.window.document.createElement('script');
  scriptElement.textContent = script;
  dom.window.document.head.appendChild(scriptElement);
});

test("[1] logo'nun linki eklenmiş", () => {
  const element = document.getElementById('logo-img');
  expect(element.src).toBe('https://i.ibb.co/gysPB8V/logo.png');
});

test("[2] logo'yu içeren element getElementById ile seçilmiş.", () => {
  expect(script.includes(".getElementById('logo-img'")).toBe(true);
});

test("[3] Sayfa'nın başlığı browser'da görünür hale gelmiş, title tag'ine eklenmiş.", () => {
  const elements = document.getElementsByTagName('title');
  expect(elements[0].textContent).toBe('Workintech');
});

test("[4] Sayfa'nın başlığı getElementsByTagName ile seçilmiş.", () => {
  expect(script.includes(".getElementsByTagName('title')")).toBe(true);
});

test("[5] Header'daki linklere href değerleri eklenmiş.", () => {
  const elements = document.getElementsByTagName('a');
  expect(elements[0].href).toBe('programlarimiz.html');
  expect(elements[1].href).toBe('blog.html');
  expect(elements[2].href).toBe('sorulariniz.html');
  expect(elements[3].href).toBe('hakkimizda.html');
});

test("[5] Header'daki linklerin metinleri eklenmiş.", () => {
  const elements = document.getElementsByTagName('a');
  expect(elements[0].textContent).toBe('Programlarımız');
  expect(elements[1].textContent).toBe('Blog');
  expect(elements[2].textContent).toBe('Sorularınız');
  expect(elements[3].textContent).toBe('Hakkımızda');
});
