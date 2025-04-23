import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const cardDataList = [
  {
    imgURL: 'https://i.ibb.co/W3hCdQt/js.png',
    header: '1. Giriş: Dinamik İçerik ve JavaScript',
    paragraph:
      'Web teknolojilerindeki gelişmelerle birlikte, kullanıcılarla etkileşimi artırmak ve daha zengin deneyimler sunmak için dinamik içerik kullanımı giderek yaygınlaşıyor. Bu bağlamda, JavaScript (JS) dili, tarayıcı tabanlı uygulamalarda dinamik içerik oluşturmak için güçlü bir araç olarak öne çıkıyor.',
    navigationURL:
      'https://appmaster.io/tr/blog/javascript-dinamik-web-icerigi',
  },
  {
    imgURL: 'https://i.ibb.co/pxym76z/dom.png',
    header: '2. Temel JavaScript Fonksiyonları ve DOM Manipülasyonu',
    paragraph:
      'JavaScript, tarayıcı üzerindeki Document Object Model (DOM) üzerinde güçlü bir kontrol sağlar. JS kullanılarak, sayfanın HTML yapısı üzerinde değişiklik yapabilir ve bu sayede içeriği dinamik olarak güncelleyebiliriz. Örneğin, createElement ve appendChild gibi fonksiyonlarla yeni HTML öğeleri oluşturabilir ve sayfa içine ekleyebiliriz.',
    navigationURL:
      'https://medium.com/@kahil_kubilay/doma-hakim-olma-702de9c0a0d0',
  },
  {
    imgURL: 'https://i.ibb.co/8mfvnf4/ajax.png',
    header: '3. Ajax Teknolojisi ile Asenkron İçerik Yükleme',
    paragraph:
      'JavaScript, Asenkron JavaScript ve XML (Ajax) teknolojisi aracılığıyla sayfayı yenilemeden arka planda veri alışverişi yapma imkanı sunar. Bu sayede, kullanıcılar sayfa içinde gezinirken, arka planda yeni veriler çekilebilir ve sayfa içeriği anlık olarak güncellenebilir.',
    navigationURL:
      'https://medium.com/@cagla.aslantas1/web-geli%C5%9Ftirmede-bir-devrim-ajax-ile-dinamik-i%CC%87%C3%A7erik-y%C3%BCkleme-f59b040be5f9',
  },
  {
    imgURL: 'https://i.ibb.co/6t26v2v/css.jpg',
    header: '4. Görsel İçerik Yönetimi: CSS ve Animasyonlar',
    paragraph:
      'Dinamik içerik oluşturmanın yanı sıra, JavaScript ile CSS stil özelliklerini de değiştirebiliriz. Bu, kullanıcı etkileşimlerini artırmak için önemlidir. Örneğin, bir butona tıklandığında arka plandaki renk değişimi veya bir öğenin yavaşça kaybolması gibi animasyonlar ekleyerek kullanıcı deneyimini zenginleştirebiliriz.',
    navigationURL: 'https://www.kodkampusu.com/css-animasyonlar/',
  },
  {
    imgURL: 'https://i.ibb.co/3NWj2x7/user-experience.jpg',
    header: '5. Güvenlik İpuçları ve Sonuç: Kullanıcı Deneyimini Artırma',
    paragraph:
      'Dinamik içerik oluştururken, güvenlik önlemlerini ihmal etmemek önemlidir. Kullanıcı girişlerini doğrulama, güvenliği sağlama ve tarayıcı uyumluluğunu gözetme gibi konulara dikkat ederek, JavaScript ile dinamik içerik oluşturarak kullanıcı deneyimini önemli ölçüde artırabiliriz. Bu sayede, modern web uygulamalarında daha etkileşimli ve çekici içerikler sunabiliriz.',
    navigationURL:
      'https://www.kukumav.net/blog/web-site-kullanici-deneyimi-iyilestirme/',
  },
];

let dom, container;

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const iconButton = fs.readFileSync(
  path.resolve(__dirname, './components/card/card.js'),
  'utf8'
);

beforeAll(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  container = dom.window.document.body;

  let scriptElement = dom.window.document.createElement('script');
  scriptElement.textContent = iconButton;
  dom.window.document.body.appendChild(scriptElement);
});

test('[1] 5 Tane card componenti eklendi', () => {
  const elements = container.querySelectorAll('div.container > .card');
  expect(elements.length).toBe(5);
});

test('[2] card component görselleri doğru bir şekilde eklendi', () => {
  const elements = container.querySelectorAll('div.container > .card > img');
  expect(elements[0].src).toEqual(cardDataList[0].imgURL);
  expect(elements[1].src).toEqual(cardDataList[1].imgURL);
  expect(elements[2].src).toEqual(cardDataList[2].imgURL);
  expect(elements[3].src).toEqual(cardDataList[3].imgURL);
  expect(elements[4].src).toEqual(cardDataList[4].imgURL);
});

test('[3] card component başlıkları doğru bir şekilde eklendi', () => {
  const elements = container.querySelectorAll('div.container > .card > h2');
  expect(elements[0].textContent).toEqual(cardDataList[0].header);
  expect(elements[1].textContent).toEqual(cardDataList[1].header);
  expect(elements[2].textContent).toEqual(cardDataList[2].header);
  expect(elements[3].textContent).toEqual(cardDataList[3].header);
  expect(elements[4].textContent).toEqual(cardDataList[4].header);
});

test('[4] card component hr tagleri doğru bir şekilde eklendi', () => {
  const elements = container.querySelectorAll('div.container > .card > hr');
  expect(elements.length).toEqual(5);
});

test('[5] card component content divleri doğru bir şekilde eklendi', () => {
  const elements = container.querySelectorAll(
    'div.container > .card > .card-content'
  );
  expect(elements.length).toEqual(5);
});

test('[6] card component content paragrafları doğru bir şekilde eklendi', () => {
  const elements = container.querySelectorAll(
    'div.container > .card > .card-content > p'
  );
  expect(elements.length).toEqual(5);
});

test('[7] card component content paragraf içerikleri doğru bir şekilde eklendi', () => {
  const elements = container.querySelectorAll(
    'div.container > .card > .card-content > p'
  );
  expect(elements[0].textContent).toEqual(cardDataList[0].paragraph);
  expect(elements[1].textContent).toEqual(cardDataList[1].paragraph);
  expect(elements[2].textContent).toEqual(cardDataList[2].paragraph);
  expect(elements[3].textContent).toEqual(cardDataList[3].paragraph);
  expect(elements[4].textContent).toEqual(cardDataList[4].paragraph);
});

test('[8] card component content linkleri doğru bir şekilde eklendi', () => {
  const elements = container.querySelectorAll(
    'div.container > .card > .card-content > a'
  );
  expect(elements.length).toEqual(5);
});

test('[9] card component link içerikleri doğru bir şekilde eklendi', () => {
  const elements = container.querySelectorAll(
    'div.container > .card > .card-content > a'
  );
  expect(elements[0].textContent).toEqual('Devamı...');
  expect(elements[1].textContent).toEqual('Devamı...');
  expect(elements[2].textContent).toEqual('Devamı...');
  expect(elements[3].textContent).toEqual('Devamı...');
  expect(elements[4].textContent).toEqual('Devamı...');
});

test('[10] card component link URLleri doğru bir şekilde eklendi', () => {
  const elements = container.querySelectorAll(
    'div.container > .card > .card-content > a'
  );
  expect(elements[0].href).toEqual(cardDataList[0].navigationURL);
  expect(elements[1].href).toEqual(cardDataList[1].navigationURL);
  expect(elements[2].href).toEqual(cardDataList[2].navigationURL);
  expect(elements[3].href).toEqual(cardDataList[3].navigationURL);
  expect(elements[4].href).toEqual(cardDataList[4].navigationURL);
});
