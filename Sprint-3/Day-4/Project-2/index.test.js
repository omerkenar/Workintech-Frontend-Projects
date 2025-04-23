import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { isPropertySetInCss, isMediaRuleCorrect } from './utility.js';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './index.css'), 'utf8');
const parts = css.split('@media');
const mediaQuery = parts[1];

let dom;
let container;

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('css-1 media query tanımlanmış', () => {
    expect(parts.length).toBe(2);
  });

  it('css-1 media query maks genişlik 500px için ayarlanmış', () => {
    expect(isMediaRuleCorrect(mediaQuery, 'max-width', '500px')).toBe(true);
  });

  it("css-2 responsive için body tag'i ile min genişlik 300px ayarlanmış", () => {
    expect(isPropertySetInCss(mediaQuery, 'body', 'min-width', '300px')).toBe(
      true
    );
  });

  it("css-3 menu-items class'ında istenen 3 özellik de tanımlanmış.", () => {
    expect(
      isPropertySetInCss(mediaQuery, '.menu-items', 'flex-direction', 'column')
    ).toBe(true);
    expect(
      isPropertySetInCss(mediaQuery, '.menu-items', 'align-items', 'stretch')
    ).toBe(true);
    expect(isPropertySetInCss(mediaQuery, '.menu-items', 'gap', '0')).toBe(
      true
    );
  });

  it("css-4 gallery-section'daki image'ların genişliği 45% yapılmış", () => {
    expect(
      isPropertySetInCss(mediaQuery, '.gallery-sectionimg', 'width', '45%')
    ).toBe(true);
  });

  it("css-5 gallery-section'daki image'ların 5.sinden sonrakiler(n+5) display ile ekrandan kaldırılmış.", () => {
    expect(
      isPropertySetInCss(
        mediaQuery,
        '.gallery-sectionimg:nth-child(n+5)',
        'display',
        'none'
      )
    ).toBe(true);
  });
});
