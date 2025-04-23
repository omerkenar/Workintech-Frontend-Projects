/*
  Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  'IconButton' fonksiyonu 3 argüman alacak: 
  - btnText: butonun içindeki metin
  - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
  - iconClass: FontAwesome kütüphanesi icon class ismi 

Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun: 

    1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }

Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin

*/

// Adım 1
function IconButton(btnText, btnColor, iconClass) {
  const btn = document.createElement('button');
  btn.classList = `btn btn-${btnColor}`;
  btn.textContent = `${btnText}`;
  const icon = document.createElement('i');
  icon.classList = `${iconClass}`;
  btn.appendChild(icon);
  return btn;
}

// Adım 2
const buttonData = [
  { btnText: 'Aç', btnColor: 'blue', iconClass: 'fa fa-folder-open' },
  { btnText: 'Düzenle', btnColor: 'orange', iconClass: 'fa fa-pen' },
  { btnText: 'Sil', btnColor: 'red', iconClass: 'fa fa-trash' },
];

const buttons = buttonData.map((data) =>
  IconButton(data.btnText, data.btnColor, data.iconClass)
);

// Adım 3
const selectedElm = document.querySelector('div #icon-buttons');
buttons.forEach((button) => selectedElm.appendChild(button));
