import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

let dom, container;

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const haberler = fs.readFileSync(
  path.resolve(__dirname, './components/haber/haberler.js'),
  'utf8'
);
const menu = fs.readFileSync(
  path.resolve(__dirname, './components/menu/menu.js'),
  'utf8'
);

beforeAll(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  container = dom.window.document.body;

  let scriptElement = dom.window.document.createElement('script');
  scriptElement.textContent = haberler;
  dom.window.document.body.appendChild(scriptElement);

  let scriptElement2 = dom.window.document.createElement('script');
  scriptElement2.textContent = menu;
  dom.window.document.body.appendChild(scriptElement2);
});

test('[1] 4 Haber componenti eklendi', () => {
  const elements = container.querySelectorAll('.articles > .article');
  expect(elements.length).toBe(4);
});

test('[2] Haber componentleri başlıkları eklendi', () => {
  const headers = container.querySelectorAll('.articles > .article > h2');
  expect(headers[0]).toHaveTextContent(
    /Workintech Teknoloji üretecek gençler yetiştiriyor/i
  );
  expect(headers[1]).toHaveTextContent(
    /Bosch, çok daha verimli 800V motorların üretimine başladı!/i
  );
  expect(headers[2]).toHaveTextContent(
    /Apple Vision Pro, insanların akıl sağlığını tedavi edecek/i
  );
  expect(headers[3]).toHaveTextContent(
    /Adobe, 20 milyar dolarlık Figma satın alımından vazgeçti/i
  );
});

test('[3] Haber componentleri tarihleri eklendi', () => {
  const tarihler = container.querySelectorAll('.articles > .article > p.tarih');

  expect(tarihler[0]).toHaveTextContent(/11 Kasım 2022/i);
  expect(tarihler[1]).toHaveTextContent(/10 Ekim 2023/i);
  expect(tarihler[2]).toHaveTextContent(/9 Kasım 2022/i);
  expect(tarihler[3]).toHaveTextContent(/18 Kasım 2023/i);
});

test('[4] 1. Haber componenti paragrafları eklendi', () => {
  const paragraflar = container.querySelectorAll(
    '.articles > .article:nth-child(1) > p'
  );

  expect(paragraflar[0]).toHaveTextContent(/11 Kasım 2022/i);
  expect(paragraflar[1]).toHaveTextContent(
    /Yazılım ön bilgisi olmayan üniversitelileri 6 ayda dünyanın en iyi şirketlerine girecek seviyede yetiştiren Workintech, 3 yılda 5 bin yazılımcıyı sektöre kazandıracak. Öğrenciler kurs ücretini işe yerleşince ödeyecek./i
  );
  expect(paragraflar[2]).toHaveTextContent(
    /Gençlere 6 ay boyunca sabah 9 akşam 6 saatleri arasında eğitim veren Workintech, bu programla gençleri işe girecek seviyeye getiriyor. Eğitim boyunca üniversiteliler öğretim ücreti ödemiyor, işe yerleşince ödemeye başlıyor. Eğer çocuk 12 ay içerisinde bir iş bulamazsa da kurs ücreti alınmıyor. Bir bilgisayar ve internet vasıtasıyla her yerden çalışabilen yazılımcılar, yurtiçinde yaşayıp, dövizle yurtdışına da iş yapabiliyor./i
  );
  expect(paragraflar[3]).toHaveTextContent(
    /Türkiye'de yeni mezun bir yazılımcı 15 bin ila 30 bin TL arasında maaş alıyor. Bu iş kolunda deneyim kazandıkça maaşlar katlanıyor. Tuğrul Türkkan'ın verdiği bilgiye göre şu anda en fazla yazılımcıya ihtiyacı olan sektör bankacılık. Finans sektörü yazılımcıları ortalama 22 ila 25 bin TL arasında maaşlara işe alıyor. Daha sonra telekom, e-ticaret ve oyun sektörü geliyor. Kursu bitiren gençlerin iş bulmalarına da yardımcı olduklarını ifade eden Tuğrul Türkkan: "Biz bu çocuklar kursu bitirir bitirmez, iş ortaklarımıza tavsiye ediyoruz. Gençlere mülakatlara nasıl girecekleri, nasıl iş arayacakları hatta nasıl maaş pazarlığı yapacaklarına kadar her konuda eğitim veriyoruz" diye konuştu./i
  );
});

test('[5] 2. Haber componenti paragrafları eklendi', () => {
  const paragraflar = container.querySelectorAll(
    '.articles > .article:nth-child(2) > p'
  );

  expect(paragraflar[0]).toHaveTextContent(/10 Ekim 2023/i);
  expect(paragraflar[1]).toHaveTextContent(
    /Alman teknoloji devi Bosch, yeni nesil elektrik motor ve inverter üretimine başladığını duyurdu. Silikon karbür çiplerin kullanımı sayesinde eski nesil 400V çözümlere kıyasla verimliliği ciddi şekilde artıran firma, belki de bir sonraki nesil Togg'lara bu motoru tedarik edecek./i
  );
  expect(paragraflar[2]).toHaveTextContent(
    /Motorun içerisinde yeni bir bakır sargı tasarımj kullandığını ve bu sayede güç yoğunluğunu %35 artırarak aynı beygir gücü ve torka daha hafif motorla ulaşabildiğini söyleyen Bosch, inverter tarafında ise ısınma kaynaklı kayıpları %50 düşürüp verimliliği neredeyse %99 seviyesine çıkarmış./i
  );
  expect(paragraflar[3]).toHaveTextContent(
    /Elektrikli araçlarda 800V mimariye geçişin kaçınılmaz olduğu aşikar. Daha hafif motor, inverter ve yüksek voltaj kablolaması ile araç ağırlığını düşüren 800V mimari, güç elektroniği tarafında verimliliği artırarak menzile çok büyük katkı sağlıyor. Üstelik DC şarj hızının da 400 kW üstüne çıkmasını mümkün kılıyor./i
  );
});

test('[6] 3. Haber componenti paragrafları eklendi', () => {
  const paragraflar = container.querySelectorAll(
    '.articles > .article:nth-child(3) > p'
  );

  expect(paragraflar[0]).toHaveTextContent(/9 Kasım 2022/i);
  expect(paragraflar[1]).toHaveTextContent(
    /Apple, karma gerçeklik gözlüğü Vision Pro ile insanların akıl hastalıklarını iyileştirmeyi hedefliyor. Sensör ve kameralar yardımıyla kullanıcıların yüz ifadelerini, hislerini ve duygularını ölçeceği, kullanıcıların depresyon ve anksiyetelerini tedavi edebileceği kaydedildi./i
  );
  expect(paragraflar[2]).toHaveTextContent(
    /Bu teknolojinin aynı zamanda ağırlıktaki değişiklikleri, göz bebeği genişlemesini ölçebileceği ve potansiyel olarak Parkinson hastalığının belirtilerini tespit etmek için bir araç olarak kullanıcıların hareketlerini değerlendirebileceği bildiriliyor. Vision Pro'nun bu koşulları tedavi etmek için kullanıcıların stres, depresyon veya anksiyetesini hafifletmeyi amaçlayan dahili bir ekranda görüntüler ve sesler gösterebileceği belirtildi. Kulaklık bir eğlence cihazı olarak tasarlanmış olsa da, ruhsal hastalıkları ele almak için potansiyel kullanımı Apple'ın ruh sağlığı alanındaki ilk girişimi değil./i
  );
  expect(paragraflar[3]).toHaveTextContent(
    /Hastalık Kontrol ve Önleme Merkezlerine göre, ABD'de her beş kişiden biri ruhsal hastalıklarla mücadele ediyor. Yaklaşık her 25 ABD'li yetişkinden biri bipolar bozukluk, majör depresyon veya şizofreni gibi ciddi akıl hastalıklarıyla mücadele etmektedir./i
  );
});

test('[7] 4. Haber componenti paragrafları eklendi', () => {
  const paragraflar = container.querySelectorAll(
    '.articles > .article:nth-child(4) > p'
  );

  expect(paragraflar[0]).toHaveTextContent(/18 Kasım 2023/i);
  expect(paragraflar[1]).toHaveTextContent(
    /Adobe, Figma'yı 20 milyar dolara satın alma planından, şirketlerin İngiltere ve Avrupa Birliği düzenleyicilerinden onay almak için net bir yol olmadığını tespit etmelerinin ardından vazgeçtiğini açıkladı. Adobe, işbirliğine dayalı tasarım platformu Figma'ya daha önce kararlaştırılan 1 milyar dolarlık fesih bedelini ödeyecek./i
  );
  expect(paragraflar[2]).toHaveTextContent(
    /Kasım ayında, Birleşik Krallık Rekabet ve Piyasalar Kurumu/i
  );
  expect(paragraflar[3]).toHaveTextContent(
    /Bugün ise Adobe, CMA'ya herhangi bir potansiyel çözüm yolu sunamayacağını beyan etti. Bir Adobe sözcüsü Bloomberg'e verdiği demeçte, "Hiçbir gerçekçi çözümün CMA'nın sürdürdüğü endişeleri karşılamayacağı ortada" dedi. Avrupa Komisyonu’da bu birleşmenin rekabeti azaltabileceğini söyemiş ve birleşme konusunda nihai kararını 5 Şubat'a kadar vereceğini açıklamıştı. Adobe, Avrupalı düzenleyicileri yatıştırmak için olası çözümler sunmaya istekli olduğunu belirtmişti, ancak görünen o ki artık durum böyle değil. Adobe Yönetim Kurulu Başkanı ve CEO'su Shantanu Narayen yaptığı açıklamada, “Adobe ve Figma düzenleyici bulgulara kesinlikle katılmıyor, ancak bağımsız olarak iler/i
  );
});

test('[8] Haber componentlerine expandButton eklendi', () => {
  const elements = container.querySelectorAll(
    '.articles > .article > button.expandButton'
  );
  expect(elements.length).toBeGreaterThanOrEqual(4);
});

test('[9] Haber componentleri buttonlarına click event handler eklendi', () => {
  const elements = container.querySelectorAll(
    '.articles > .article > button.expandButton'
  );
  elements[0].click();
  elements[1].click();
  elements[2].click();
  elements[3].click();
  const opens = container.querySelectorAll('.article-open');
  expect(opens.length).toBeGreaterThanOrEqual(4);
});

test('[10] Headera div.menu eklendi', () => {
  const menuDiv = container.querySelector('div.header > div.menu');

  expect(menuDiv).not.toBe(null);
});

test('[11] Menü içine UL elemanı eklendi', () => {
  const menuDiv = container.querySelector('div.header > div.menu > ul');

  expect(menuDiv).not.toBe(null);
});

test('[12] Menü > UL içine 6 tane LI elemanı eklendi', () => {
  const menuDivItems = container.querySelectorAll(
    'div.header > div.menu > ul > li'
  );

  expect(menuDivItems.length).toBe(6);
});

test('[13] Menü Elemanları LI içerisine eklendi', () => {
  const menuDivItems = container.querySelectorAll(
    'div.header > div.menu > ul > li'
  );

  expect(menuDivItems[0]).toHaveTextContent(/Gündem/i);
  expect(menuDivItems[1]).toHaveTextContent(/Dünya/i);
  expect(menuDivItems[2]).toHaveTextContent(/Ekonomi/i);
  expect(menuDivItems[3]).toHaveTextContent(/Yazarlar/i);
  expect(menuDivItems[4]).toHaveTextContent(/Burç Yorumları/i);
  expect(menuDivItems[5]).toHaveTextContent(/Diğer/i);
});

test('[14] Menü Button a click event handler eklendi', () => {
  const menuBtn = container.querySelector('div.header > .menu-button');

  menuBtn.click();

  const openMenu = container.querySelector('div.header > .menu.menu--open');

  expect(openMenu).not.toBe(null);
});
