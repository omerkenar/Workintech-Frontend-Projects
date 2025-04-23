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

  it('css-1 resimler kendi satırında dikey ortalı mı?', () => {
    expect(isPropertySetInCss(css, 'img', 'vertical-align', 'middle')).toBe(
      true
    );
  });

  it('css-2 resim bulunduğu alana sığması için ayarlar yapılmış', () => {
    expect(isPropertySetInCss(css, 'img', 'object-fit', 'cover')).toBe(true);
  });

  it("css-3 ince class'ı için aspect-ratio doğru ayarlanmış mı?", () => {
    expect(
      isPropertySetInCss(css, '.ince', 'aspect-ratio', '5/1') ||
        isPropertySetInCss(css, 'img.ince', 'aspect-ratio', '5/1')
    ).toBe(true);
  });

  it("css-4 orta class'ı için aspect-ratio doğru ayarlanmış mı?", () => {
    expect(
      isPropertySetInCss(css, '.orta', 'aspect-ratio', '5/3') ||
        isPropertySetInCss(css, 'img.orta', 'aspect-ratio', '5/3')
    ).toBe(true);
  });

  it("css-5 tam class'ı için aspect-ratio doğru ayarlanmış mı?", () => {
    expect(
      isPropertySetInCss(css, '.tam', 'aspect-ratio', '5/5') ||
        isPropertySetInCss(css, 'img.tam', 'aspect-ratio', '5/5')
    ).toBe(true);
  });
});
