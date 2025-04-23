import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { isPropertySetInCss } from './utility.js';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './index.css'), 'utf8');

let dom;
let container;

describe('Sıralı Olmayan Liste Testleri', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('html-1 İletişim başlığı doğru tag ile eklenmiş', () => {
    const element = container.querySelector('.iletisim-section h2');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toMatch(/İLETİŞİM/i);
  });

  it("html-1 İletişim bölümünde sıralı olmayan listeleme tag'i kullanılmış", () => {
    const element = container.querySelector('address ul');
    expect(element).toBeInTheDocument();
  });

  it('html-1 İletişim bölümünde madde madde bilgiler eklenmiş', () => {
    const element = container.querySelectorAll('address li');
    expect(element[0]).toBeInTheDocument();
    expect(element.length).toBe(4);
  });

  it("css-1 sıralı olmayan listeleme tag'i için yuvarlak butonlar kaldırılmış.", () => {
    expect(isPropertySetInCss(css, 'ul', 'list-style-type', 'none')).toBe(true);
  });

  it("css-1 sıralı olmayan listeleme tag'i için soldaki girinti kaldırılmış.", () => {
    expect(
      isPropertySetInCss(css, 'ul', 'padding', '0') ||
        isPropertySetInCss(css, 'ul', 'padding', '0px')
    ).toBe(true);
  });

  it("css-1 sıralı olmayan listeleme tag'i için satır yüksekliği 150% ayarlanmış", () => {
    expect(
      isPropertySetInCss(css, 'ul', 'line-height', '150%') ||
        isPropertySetInCss(css, 'ul', 'line-height', '1.5')
    ).toBe(true);
  });
});
