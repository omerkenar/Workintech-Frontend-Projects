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

test('[1] head bölümünde index.css dosyası doğru linklenmiş', () => {
  const elements = document.getElementsByTagName('link');
  expect(elements[1].href).toMatch(/index.css/i);
});

test('[2] tüm resimlerin linkleri doğru sıralama ile eklenmiş', () => {
  const elements = document.querySelectorAll('.gallery-content img');
  expect(elements[0].src).toBe(
    'https://i.ibb.co/3N3KkNS/food-avocadotoast.jpg'
  );
  expect(elements[1].src).toBe('https://i.ibb.co/grVFpy9/food-burger.jpg');
  expect(elements[2].src).toBe(
    'https://i.ibb.co/JvjdLXh/food-chickenfingers.jpg'
  );
  expect(elements[3].src).toBe('https://i.ibb.co/cQxmZsF/food-poutine.jpg');
  expect(elements[4].src).toBe('https://i.ibb.co/YDYgB6J/food-ribs.jpg');
  expect(elements[5].src).toBe('https://i.ibb.co/Lp1sJ2G/food-sandwich.jpg');
  expect(elements[6].src).toBe('https://i.ibb.co/Qn4mLHc/food-sausage.jpg');
  expect(elements[7].src).toBe('https://i.ibb.co/mFjbcZV/food-steak.jpg');
  expect(elements[8].src).toBe('https://i.ibb.co/Bq2ZRWc/food-tacos.jpg');
});

test('[3] tüm resimler querySelectorAll kullanılarak seçilmiş', () => {
  expect(script.toLowerCase().includes('.queryselectorall(')).toBe(true);
});

test('[4] For döngüsü kullanılarak dinamik olarak eklenmiş.', () => {
  expect(script.toLowerCase().replaceAll(' ', '').includes('for(')).toBe(true);
});

test('[5] tüm resimlere "border-md" classı eklenmiş', () => {
  const elements = document.querySelectorAll('.gallery-content img.border-md');
  expect(elements.length).toBe(9);
});

test('[6] tüm resimlere "border-md" classı classListin add metodu ile eklenmiş', () => {
  expect(script.toLowerCase().includes('.classlist.add(')).toBe(true);
});

test('[7] tüm resimlerin alt metinleri eklenmiş', () => {
  const elements = document.querySelectorAll('.gallery-content img');
  expect(elements[1].alt).toBe('food-burger');
  expect(elements[2].alt).toBe('food-chickenfingers');
  expect(elements[3].alt).toBe('food-poutine');
  expect(elements[4].alt).toBe('food-ribs');
  expect(elements[5].alt).toBe('food-sandwich');
  expect(elements[6].alt).toBe('food-sausage');
  expect(elements[7].alt).toBe('food-steak');
  expect(elements[8].alt).toBe('food-tacos');
});

test('[8] tüm resimlerin alt metinleri .setAttibute ile eklenmiş', () => {
  expect(script.toLowerCase().includes('.setattribute(')).toBe(true);
});
