import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { isPropertySetInCss } from './utility.js';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
//const css = fs.readFileSync(path.resolve(__dirname, './index.css'), 'utf8');

let dom;
let container;

describe('Web Sayfalarının Head Bölümü Testleri', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('CSS dosyası sayfaya eklenmiş', () => {
    const cssLinkTag = dom.window.document.head.querySelector(
      'link[href*="index.css"]'
    );
    expect(cssLinkTag).toBeInTheDocument();
  });

  it('Sayfanın head bölümüne Türkçe karakterleri destekleyecek karakter seti için meta tag eklenmiş', () => {
    const cssMetaTag = dom.window.document.head.querySelector(
      'meta[charset="UTF-8"]'
    );
    expect(cssMetaTag).toBeInTheDocument();
  });

  it("tab başlığı olarak 'Full Stack Web Developer' ayarlanmış.", () => {
    const csstitleTag = dom.window.document.head.querySelector('title');
    expect(csstitleTag).toBeInTheDocument();
    expect(csstitleTag.textContent).toBe('Full Stack Web Developer');
  });
});
