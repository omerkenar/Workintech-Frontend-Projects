import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { isPropertySetInCss } from './utility.js';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './index.css'), 'utf8');

let dom;
let container;

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('html-1 CSS dosyası sayfaya eklenmiş', () => {
    const cssLinkTag = dom.window.document.head.querySelector(
      'link[href*="index.css"]'
    );
    expect(cssLinkTag).toBeInTheDocument();
  });

  it("html-2 Poller One fontu google fonts'tan eklenmiş.", () => {
    const poller = dom.window.document.head.querySelector('link[href*=Poller]');
    expect(poller).toBeInTheDocument();
  });

  it("css-1 default font body tag'inde 'Poller One' ayarlanmış", () => {
    expect(
      isPropertySetInCss(css, 'body', 'font-family', "'Poller One'") ||
        isPropertySetInCss(css, 'body', 'font-family', "'Poller One'")
          .includes('Poller One')
          .toBe(true)
    );
  });

  it('css-2 resim bulunduğu alana sığması için ayarlar yapılmış', () => {
    expect(isPropertySetInCss(css, 'img', 'object-fit', 'cover')).toBe(true);
  });

  it('css-3 resim bulunduğu alanda yukarı dayanması için "50% 0" veya "center top" olarak ayarlanmış', () => {
    const isSetTo50Percent0 = isPropertySetInCss(
      css,
      'img',
      'object-position',
      '50% 0'
    );
    const isSetToCenterTop = isPropertySetInCss(
      css,
      'img',
      'object-position',
      'center top'
    );
    expect(isSetTo50Percent0 === true || isSetToCenterTop === true).toBe(true);
  });

  it('css-4 resimin üst sol ve sağ kenarları yuvarlatılmış', () => {
    const caseA = isPropertySetInCss(
      css,
      'img',
      'border-top-left-radius',
      '10px'
    );
    const caseB = isPropertySetInCss(
      css,
      'img',
      'border-top-right-radius',
      '10px'
    );
    const caseAB = isPropertySetInCss(
      css,
      'img',
      'border-radius',
      '10px 10px 0 0'
    );

    expect((caseA === true && caseB === true) || caseAB === true).toBe(true);
  });

  it('css-5 h1 ve h2 yazıları css ile büyük harf yapılmış', () => {
    expect(
      isPropertySetInCss(css, 'h1,h2', 'text-transform', 'uppercase')
    ).toBe(true);
  });
});
