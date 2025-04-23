import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

let dom, container;

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');
//comment;
beforeEach(async () => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  container = dom.window.document;

  let scriptElement = dom.window.document.createElement('script');
  scriptElement.textContent = script;
  dom.window.document.head.appendChild(scriptElement);

  await new Promise((resolve) => dom.window.addEventListener('load', resolve));
});

test('[1] 1. thumbnaila mouseenter eventi doğru şekilde eklenmiş', () => {
  const images = container.querySelectorAll('header img');
  const mainImage = container.getElementById('main-image');
  images[0].dispatchEvent(new dom.window.MouseEvent('mouseenter'));
  expect(mainImage.src).toBe(images[0].src);
});

test('[2] 2. thumbnaila mouseenter eventi doğru şekilde eklenmiş', () => {
  const images = container.querySelectorAll('header img');
  const mainImage = container.getElementById('main-image');
  images[1].dispatchEvent(new dom.window.MouseEvent('mouseenter'));
  expect(mainImage.src).toBe(images[1].src);
});

test('[3] 3. thumbnaila mouseenter eventi doğru şekilde eklenmiş', () => {
  const images = container.querySelectorAll('header img');
  const mainImage = container.getElementById('main-image');
  images[2].dispatchEvent(new dom.window.MouseEvent('mouseenter'));
  expect(mainImage.src).toBe(images[2].src);
});

test('[4] 4. thumbnaila mouseenter eventi doğru şekilde eklenmiş', () => {
  const images = container.querySelectorAll('header img');
  const mainImage = container.getElementById('main-image');
  images[3].dispatchEvent(new dom.window.MouseEvent('mouseenter'));
  expect(mainImage.src).toBe(images[3].src);
});

test('[5] imagelara eventler for döngüsü veya forEach ile eklenmiş', () => {
  const code = script.replaceAll(' ', '').toLowerCase();
  expect(code.includes('for(') || code.includes('.foreach(')).toBe(true);
});
