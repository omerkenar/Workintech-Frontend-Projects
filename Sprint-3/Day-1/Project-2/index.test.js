import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { isPropertySetInCss } from './utility.js';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, './index.css'), 'utf8');

let dom;
let container;

describe('Web Sayfalarında Header ve Navigasyon Linkleri Testleri', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('CSS dosyası sayfaya eklenmiş mi?', () => {
    const cssLinkTag = dom.window.document.head.querySelector(
      'link[href*="index.css"]'
    );
    expect(cssLinkTag).toBeInTheDocument();
  });

  it('Sayfanın head bölümüne Türkçe karakterleri destekleyecek karakter seti için meta tag eklenmiş mi?', () => {
    const cssMetaTag = dom.window.document.head.querySelector(
      'meta[charset="UTF-8"]'
    );
    expect(cssMetaTag).toBeInTheDocument();
  });

  it("tab başlığı olarak 'Workintech' ayarlanmış mı?", () => {
    const csstitleTag = dom.window.document.head.querySelector('title');
    expect(csstitleTag).toBeInTheDocument();
    expect(csstitleTag.textContent).toBe('Workintech');
  });

  it('header bölümü eklenmiş mi?', () => {
    const element = container.querySelector('header');
    expect(element).toBeInTheDocument();
  });

  it('header bölümüne image doğru şekilde eklenmiş mi?', () => {
    const element = container.querySelector('header img');
    expect(element).toBeInTheDocument();
    expect(element.src).toMatch(/logo.svg/i);
  });

  it('header bölümüne navigasyon menüsü eklenmiş mi?', () => {
    const element = container.querySelector('header nav');
    expect(element).toBeInTheDocument();
  });

  it('navigasyon bölümünde 4 adet link eklenmiş mi?', () => {
    const element = container.querySelectorAll('header nav a');
    expect(element.length).toBe(4);
  });

  it('navigasyon bölümünde 4 adet link doğru metinler ve sıralama ile eklenmiş mi?', () => {
    const element = container.querySelectorAll('header nav a');
    expect(element.length).toBe(4);
    expect(element[0].textContent).toBe('Programlarımız');
    expect(element[1].textContent).toBe('Blog');
    expect(element[2].textContent).toBe('Sorularınız');
    expect(element[3].textContent).toBe('Hakkımızda');
  });

  it('navigasyon bölümünde 4 adet anchor tag için linkler doğru eklenmiş mi?', () => {
    const element = container.querySelectorAll('header nav a');
    expect(element.length).toBe(4);
    expect(element[0].href).toMatch(/programlarimiz/i);
    expect(element[1].href).toMatch(/blog/i);
    expect(element[2].href).toMatch(/sorulariniz/i);
    expect(element[3].href).toMatch(/hakkimizda/i);
  });

  it('css-1 container classı için istenen 2 kural da ayarlanmış mı?', () => {
    expect(isPropertySetInCss(css, '.container', 'width', '750px')).toBe(true);
    expect(isPropertySetInCss(css, '.container', 'margin', '0 auto')).toBe(
      true
    );
  });

  it('css-2 header nav a için istenen 3 kural da eklenmiş mi?', () => {
    expect(
      isPropertySetInCss(css, 'headernava', 'text-decoration', 'none') ||
        isPropertySetInCss(css, 'headernava', 'color', 'gray')
    ).toBe(true);
    expect(isPropertySetInCss(css, 'headernava', 'padding', '20px 10px')).toBe(
      true
    );
  });
});
