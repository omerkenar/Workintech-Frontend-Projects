import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

let dom, container;

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, './index.js'), 'utf8');

beforeAll(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  container = dom.window.document.body;
  let scriptElement = dom.window.document.createElement('script');
  scriptElement.textContent = script;
  dom.window.document.head.appendChild(scriptElement);
});

test('[1] header menü linkleri doğru kelimeleri içeriyor', () => {
  const elements = container.querySelectorAll('nav a');
  expect(elements[0]).toHaveTextContent(/Eğitimler/i);
  expect(elements[1]).toHaveTextContent(/Eğitmenler/i);
  expect(elements[2]).toHaveTextContent(/Sorular/i);
  expect(elements[3]).toHaveTextContent(/Blog/i);
  expect(elements[4]).toHaveTextContent(/Hakkımızda/i);
  expect(elements[5]).toHaveTextContent(/İletişim/i);
});

test("[2] .cta-text'deki heading doğru metni içeriyor", () => {
  const element = container.querySelector('.cta-text h1');
  expect(element.textContent).toBe('Full Stack Web Developer');
});

test("[3] .cta-text'deki button doğru metni içeriyor", () => {
  const element = container.querySelector('.cta-text button');
  expect(element).toHaveTextContent('Kayıt Olun');
});

test("[4] .top-content'deki başlıklar doğru metni içeriyor ve doğru sırada", () => {
  const elements = container.querySelectorAll('.top-content h4');
  expect(elements[0]).toHaveTextContent(/Kabul Şartları/i);
  expect(elements[1]).toHaveTextContent(/Haftalık Program/i);
});

test("[5] .top-content'deki paragraflar doğru metni içeriyor ve doğru sırada", () => {
  const elements = container.querySelectorAll('.top-content p');
  expect(elements[0]).toHaveTextContent(
    /Öğrencilerimizde en başta şu iki özelliği arıyoruz:/i
  );
  expect(elements[1]).toHaveTextContent(
    /Program haftada 40 saatinizi talep ediyor/i
  );
});

test("[6] .bottom-content'deki başlıklar doğru metni içeriyor ve doğru sırada", () => {
  const elements = container.querySelectorAll('.bottom-content h4');
  expect(elements[0]).toHaveTextContent(
    /EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ/i
  );
  expect(elements[1]).toHaveTextContent(
    /BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR/i
  );
  expect(elements[2]).toHaveTextContent(
    /ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ/i
  );
});

test("[7] .bottom-content'deki paragraflar doğru metni içeriyor ve doğru sırada", () => {
  const elements = container.querySelectorAll('.bottom-content p');
  expect(elements[0]).toHaveTextContent(
    /Workintech olarak binlerce başvurudan potansiyeli/i
  );
  expect(elements[1]).toHaveTextContent(
    /Workintech eğitim programı sıfırdan yazılımcı yetiştiren,/i
  );
  expect(elements[2]).toHaveTextContent(
    /Workintech´in size özel atanmış ise alım uzmanı yıl boyunca/i
  );
});

test('[8] iletişim bölümü doğru metinleri içeriyor.', () => {
  const elements = container.querySelector('.contact').children;
  expect(elements[0]).toHaveTextContent(/İLETİŞİM/i);
  expect(elements[1]).toHaveTextContent(/Bağdat Cad. No:302/i);
  expect(elements[2]).toHaveTextContent(/550-5905/i);
  expect(elements[3]).toHaveTextContent(/bilgi@birsirketsitesi.com.tr/i);
});

test('[9] footer bölüme class ve doğru metin eklenmiş', () => {
  const element = container.querySelector('footer a');
  expect(element).toHaveTextContent(/Copyright Bir Şirket Sitesi 2023/i);
  expect(element.classList.contains('bold')).toBe(true);
});

test("[10] üstteki logo'nun img adresi doğru", () => {
  expect(dom.window.document.getElementById('logo-img')).toHaveAttribute(
    'src',
    'https://i.ibb.co/42PDMF2/logo.png'
  );
});

test('[11] cta img src si doğru', () => {
  expect(dom.window.document.getElementById('cta-img')).toHaveAttribute(
    'src',
    'https://i.ibb.co/XssVKxk/cta.png'
  );
});

test('[12] ortadaki img doğru src ye sahip', () => {
  expect(dom.window.document.getElementById('middle-img')).toHaveAttribute(
    'src',
    'https://i.ibb.co/5FZmL26/accent.png'
  );
});

test("[13] menü linklerinin class'ı italic ayarlanmış", () => {
  for (let link of container.querySelectorAll('nav a')) {
    expect(link).toHaveAttribute('class', 'italic');
  }
});

test("[14] class'ı italic olan başka link yok", () => {
  for (let link of container.querySelectorAll('nav a')) {
    expect(link).toHaveAttribute('class', 'italic');
  }
  expect(container.querySelector('footer a')).not.toHaveAttribute(
    'class',
    'italic'
  );
});

test("[15] class'ı bold olan başka link yok", () => {
  expect(container.querySelector('footer a')).toHaveAttribute('class', 'bold');
  for (let link of container.querySelectorAll('nav a')) {
    expect(link).not.toHaveAttribute('class', 'bold');
  }
});
