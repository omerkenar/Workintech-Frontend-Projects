import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { isPropertySetInCss } from './utility.js';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './index.css'), 'utf8');

let dom;
let container;

describe('CSS Kuralları Testleri', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it("HTML-1 Kabul şartları başlığı h2 tag'i ile eklenmiş", () => {
    const element = container.querySelector('.kabul-sartlari-section h2');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toMatch(/kabul şartlar/i);
  });

  it('HTML-1 Kabul şartları resmi eklenmiş', () => {
    const element = container.querySelector('img[src*="terms.jpg"]');
    expect(element).toBeInTheDocument();
  });

  it('HTML-1 Kabul şartları bölümündeki metin doğru tag ile eklenmiş.', () => {
    const element = container.querySelector('.kabul-sartlari-section p');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toMatch(
      /Öğrencilerimizde en başta şu iki özelliği/i
    );
  });

  it("HTML-2 Haftalık program başlığı h2 tag'i ile eklenmiş", () => {
    const element = container.querySelector('.haftalik-program-section h2');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toMatch(/k program/i);
  });

  it('HTML-2 Haftalık program resmi eklenmiş', () => {
    const element = container.querySelector('img[src*="calendar.jpg"]');
    expect(element).toBeInTheDocument();
  });

  it('HTML-2 Haftalık program bölümündeki metin doğru tag ile eklenmiş.', () => {
    const element = container.querySelector('.haftalik-program-section p');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toMatch(/Program haftada 40 saatinizi talep/i);
  });

  it("css-1 h2 tag'i font'u Bangers olarak ayarlanmış.", () => {
    expect(isPropertySetInCss(css, 'h2', 'font-family', 'Bangers')).toBe(true);
  });

  it("css-2 h2 tag'i sola-sağa yaslanmış resimler için temiz bir satırdan başlıyor.", () => {
    expect(isPropertySetInCss(css, 'h2', 'clear', 'both')).toBe(true);
  });

  it('css-2 left-img için sağında metin ile arasına boşluk eklenmiş ve sola yaslanması sağlanmış.', () => {
    expect(isPropertySetInCss(css, '.left-img', 'margin-right', '30px')).toBe(
      true
    );
    expect(isPropertySetInCss(css, '.left-img', 'float', 'left')).toBe(true);
  });

  it('css-3 sayfadaki tüm resimler için istenen css kuralları tanımlanmış.', () => {
    expect(isPropertySetInCss(css, 'img', 'margin-bottom', '25px')).toBe(true);
    expect(isPropertySetInCss(css, 'img', 'width', '200px')).toBe(true);
    expect(isPropertySetInCss(css, 'img', 'border-radius', '20px')).toBe(true);
  });

  it('css-4 left-img için sağında metin ile arasına boşluk eklenmiş ve sola yaslanması sağlanmış.', () => {
    expect(isPropertySetInCss(css, '.left-img', 'margin-right', '30px')).toBe(
      true
    );
    expect(isPropertySetInCss(css, '.left-img', 'float', 'left')).toBe(true);
  });

  it('css-5 right-img için solunda metin ile arasına boşluk eklenmiş ve sağa yaslanması sağlanmış.', () => {
    expect(isPropertySetInCss(css, '.right-img', 'margin-left', '30px')).toBe(
      true
    );
    expect(isPropertySetInCss(css, '.right-img', 'float', 'right')).toBe(true);
  });

  it('css-6 footer temiz bir satırdan başlıyor.', () => {
    expect(isPropertySetInCss(css, 'footer', 'clear', 'both')).toBe(true);
  });
});
