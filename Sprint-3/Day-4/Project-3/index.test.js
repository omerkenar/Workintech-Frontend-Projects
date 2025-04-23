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

  it('html-0 CSS dosyası sayfaya eklenmiş', () => {
    const cssLinkTag = dom.window.document.head.querySelector(
      'link[href*="index.css"]'
    );
    expect(cssLinkTag).toBeInTheDocument();
  });

  it('html-1 header bölümü içine img doğru link ile eklenmiş', () => {
    const element = container.querySelector('header img');
    expect(element).toBeInTheDocument();
    expect(element.src).toBe(
      'https://workintech.com.tr/assets/logo-light-c0bded94.svg'
    );
  });

  it("html-2 header bölümü'ne navigasyon menüsü eklenmiş", () => {
    const element = container.querySelector('header nav');
    expect(element).toBeInTheDocument();
  });

  it("html-2 header bölümü'ün sadece 2 child element'i var: img ve nav", () => {
    const element = container.querySelector('header').children;
    expect(element.length).toBe(2);
  });

  it("html-2 navigasyon bölümü'nde 4 adet link eklenmiş", () => {
    const element = container.querySelectorAll('header nav a');
    expect(element.length).toBe(4);
  });

  it("html-2 navigasyon bölümü'nde 4 adet link doğru metinler ve sıralama ile eklenmiş", () => {
    const element = container.querySelectorAll('header nav a');
    expect(element.length).toBe(4);
    expect(element[0].textContent).toMatch(/Ana Sayfa/i);
    expect(element[1].textContent).toMatch(/Programlar/i);
    expect(element[2].textContent).toMatch(/İşverenler/i);
    expect(element[3].textContent).toMatch(/Hakkımızda/i);
  });

  it("html-3 navigasyon bölümü'nde ilk item'ın class'ı active ayarlanmış", () => {
    const element = container.querySelectorAll('header nav a');
    expect(element.length).toBe(4);
    expect(element[0].classList.contains('active')).toBe(true);
  });

  it("html-4 class'ı main-section olan bir bölüm(section) oluşturmuş", () => {
    const element = container.querySelector('section.main-section');
    expect(element).toBeInTheDocument();
  });

  it("html-5 main-section içinde main-container class'ı olan bir div tag'i eklenmiş", () => {
    const element = container.querySelector('.main-section div.main-container');
    expect(element).toBeInTheDocument();
  });

  it('html-6 main-container içinde heading ve metin doğru tag ve metin ile eklenmiş', () => {
    const element = container.querySelector('.main-container h1');
    const metin = container.querySelector('.main-container p');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toMatch(/6 ayda uluslararası yazılımcı ol/i);
    expect(metin).toBeInTheDocument();
    expect(metin.textContent).toMatch(/Yazılım ön bilgisi olmayan gençleri/i);
  });

  it("html-7 main-container içinde class'ı btn olan button doğru metin ile eklenmiş", () => {
    const element = container.querySelector('.main-container button');
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe('Kayıt Ol');
  });

  it("html-8 main-section içinde son child img oluşturulmuş", () => {
    const element = container.querySelector('.main-section>img');
    expect(element).toBeInTheDocument();
  });

  it("html-9 class'ı advantages-section olan bir bölüm oluştulmuş", () => {
    const element = container.querySelector('section.advantages-section');
    expect(element).toBeInTheDocument();
  });

  it('html-10 advantages-section için 4 tane resim doğru linkler ile eklenmiş', () => {
    const elements = container.querySelectorAll('.advantages-section img');
    let isOk = elements.length === 4;
    for (let i = 0; i < elements.length; i++) {
      isOk = isOk && elements[0].src.includes('https://picsum.photos/200/800?');
    }
    expect(isOk).toBe(true);
  });

  it('html-11 advantages-section içine resimlerden sonra div eklenmiş', () => {
    const element = container.querySelector('.advantages-section > div');
    const children = container.querySelector('.advantages-section').children;
    expect(children[4]).toBe(element);
  });

  it("html-12 advantages-section içindeki div'de class'ı bold olan pragraf var", () => {
    const element = container.querySelector(
      '.advantages-section > div > p.bold'
    );
    expect(element).toBeInTheDocument();
    expect(element.textContent).toBe("Workintech'in farkı");
  });

  it("html-13 advantages-section içinde div'de 2 pragraf var", () => {
    const elements = container.querySelectorAll(
      '.advantages-section > div > p'
    );
    expect(elements.length).toBe(2);
    expect(elements[1].textContent).toMatch(
      /Workintech programını kurslardan/i
    );
  });

  it('css-1 header içindeki 2 item için gerekli kurallar ayarlanmış.', () => {
    expect(isPropertySetInCss(css, 'header', 'display', 'flex')).toBe(true);
    expect(isPropertySetInCss(css, 'header', 'flex-direction', 'column')).toBe(
      true
    );
    expect(isPropertySetInCss(css, 'header', 'align-items', 'center')).toBe(
      true
    );
    expect(isPropertySetInCss(css, 'header', 'gap', '2rem')).toBe(true);
  });

  it('css-2 .main-container içindeki metinler ortalanmış', () => {
    expect(
      isPropertySetInCss(css, '.main-container', 'text-align', 'center')
    ).toBe(true);
  });

  it("css-3 .main-container'ın ekran genişliği 80% ve maksium genişliği 750px ayarlanmış'", () => {
    expect(isPropertySetInCss(css, '.main-container', 'width', '80%')).toBe(
      true
    );
    expect(
      isPropertySetInCss(css, '.main-container', 'max-width', '750px')
    ).toBe(true);
  });

  it("css-4 .main-container'ın margin ile blok olarak yatayda ortalı ayarlanmış", () => {
    const a =
      isPropertySetInCss(css, '.main-container', 'margin', 'auto') === true;
    const b =
      isPropertySetInCss(css, '.main-container', 'margin', '0 auto') === true;
    expect(a || b).toBe(true);
  });

  it("css-5 .main-container'ın iç dolgusu %5 ayarlanmış", () => {
    expect(isPropertySetInCss(css, '.main-container', 'padding', '5%')).toBe(
      true
    );
  });

  it('css-6 h1 için metin büyük harf yapılmış.', () => {
    expect(isPropertySetInCss(css, 'h1', 'text-transform', 'uppercase')).toBe(
      true
    );
  });

  it('css-7 .main-section içindeki imajı ekranın sağına ve soluna dayanmış yapalım', () => {
    expect(isPropertySetInCss(css, '.main-sectionimg', 'width', '100%')).toBe(
      true
    );
  });

  it("css-7 .main-section içindeki imajı ekranın sağına ve soluna tam dayamak için body'de gerekli ayarlar yapılmış.", () => {
    expect(isPropertySetInCss(css, 'body', 'margin', '0')).toBe(true);
    expect(isPropertySetInCss(css, 'body', 'padding', '0')).toBe(true);
  });

  it("css-8 advantages-section class'ındaki ayarlar yapılmış", () => {
    expect(
      isPropertySetInCss(css, '.advantages-section', 'display', 'flex')
    ).toBe(true);
    expect(
      isPropertySetInCss(
        css,
        '.advantages-section',
        'justify-content',
        'space-between'
      )
    ).toBe(true);
    const a =
      isPropertySetInCss(css, '.advantages-section', 'margin', '5% 0') === true;
    const b =
      isPropertySetInCss(css, '.advantages-section', 'margin', '5% 0 5% 0') ===
      true;
    const c1 =
      isPropertySetInCss(css, '.advantages-section', 'margin-top', '5%') ===
      true;
    const c2 =
      isPropertySetInCss(css, '.advantages-section', 'margin-bottom', '5%') ===
      true;
    const c3 =
      isPropertySetInCss(css, '.advantages-section', 'margin-right', '0') ===
      true;
    const c4 =
      isPropertySetInCss(css, '.advantages-section', 'margin-left', '0') ===
      true;
    expect(a || b || (c1 && c2 && c3 && c4)).toBe(true);
  });

  it('css-9 .advantages-section içindeki imajı ekranın sağına ve soluna dayanmış', () => {
    expect(
      isPropertySetInCss(css, '.advantages-sectionimg', 'width', '15%')
    ).toBe(true);
    expect(
      isPropertySetInCss(css, '.advantages-sectionimg', 'aspect-ratio', '1/4')
    ).toBe(true);
  });

  it("css-10 .advantages-section içindeki div'ler için genişlik 15% ayarlanımş", () => {
    expect(
      isPropertySetInCss(css, '.advantages-sectiondiv', 'width', '15%')
    ).toBe(true);
  });

  it("css-11 .advantages-section içindeki div'ler için genişlik 15% ayarlanımş", () => {
    expect(
      isPropertySetInCss(css, '.advantages-sectiondiv', 'padding', '1rem')
    ).toBe(true);
  });

  it("css-12 .advantages-section içindeki div'ler için flex ile column şeklinde yatayda ortalı ayarlanımş", () => {
    expect(
      isPropertySetInCss(css, '.advantages-sectiondiv', 'display', 'flex')
    ).toBe(true);
    expect(
      isPropertySetInCss(
        css,
        '.advantages-sectiondiv',
        'flex-direction',
        'column'
      )
    ).toBe(true);
    expect(
      isPropertySetInCss(css, '.advantages-sectiondiv', 'align-items', 'center')
    ).toBe(true);
    expect(
      isPropertySetInCss(
        css,
        '.advantages-sectiondiv',
        'justify-content',
        'center'
      )
    ).toBe(true);
  });

  it("css-13 .advantages-section içindeki div'ler için metinler ortalanmış", () => {
    expect(
      isPropertySetInCss(css, '.advantages-sectiondiv', 'text-align', 'center')
    ).toBe(true);
  });

  it('css-14 media query tanımlanmış', () => {
    expect(parts.length).toBe(2);
  });

  it('css-14 media query maks genişlik 500px için ayarlanmış', () => {
    expect(isMediaRuleCorrect(mediaQuery, 'max-width', '500px')).toBe(true);
  });

  it("css-15 responsive için body tag'i ile min genişlik 300px ayarlanmış", () => {
    expect(isPropertySetInCss(mediaQuery, 'body', 'min-width', '300px')).toBe(
      true
    );
  });

  it("css-16 advantages-section class'ı için istenen responsive ayarları yapılmış", () => {
    expect(
      isPropertySetInCss(mediaQuery, '.advantages-section', 'flex-wrap', 'wrap')
    ).toBe(true);
    const a =
      isPropertySetInCss(
        mediaQuery,
        '.advantages-section',
        'row-gap',
        '1rem'
      ) === true;
    const b =
      isPropertySetInCss(mediaQuery, '.advantages-section', 'gap', '1rem') ===
      true;

    expect(a || b).toBe(true);
  });

  it("css-17 reponsive için advantages-section class'ıdaki imajların genişliği ayarlanmış", () => {
    expect(
      isPropertySetInCss(mediaQuery, '.advantages-sectionimg', 'width', '45%')
    ).toBe(true);
  });

  it("css-18 reponsive için advantages-section class'ıdaki div için genişliği ayarlanmış", () => {
    const a =
      isPropertySetInCss(
        mediaQuery,
        '.advantages-sectiondiv',
        'width',
        '100%'
      ) === true;
    const b = isPropertySetInCss(
      mediaQuery,
      '.advantages-sectiondiv',
      'flex',
      '1'
    );
    expect(a || b).toBe(true);
  });

  it("css-19 reponsive için navigasyon'daki ayarlar yapılmış", () => {
    expect(
      isPropertySetInCss(mediaQuery, 'nav', 'flex-direction', 'column')
    ).toBe(true);
    expect(
      isPropertySetInCss(mediaQuery, 'nav', 'align-items', 'stretch')
    ).toBe(true);
    expect(isPropertySetInCss(mediaQuery, 'nav', 'text-align', 'center')).toBe(
      true
    );
    expect(isPropertySetInCss(mediaQuery, 'nav', 'width', '50%')).toBe(true);
  });
});
