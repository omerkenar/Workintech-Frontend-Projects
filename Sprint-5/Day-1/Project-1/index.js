const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  title: 'Workintech',
  logo: 'https://i.ibb.co/gysPB8V/logo.png',
  links: [
    {
      href: 'programlarimiz.html',
      text: 'Programlarımız',
    },
    {
      href: 'blog.html',
      text: 'Blog',
    },
    {
      href: 'sorulariniz.html',
      text: 'Sorularınız',
    },
    {
      href: 'hakkimizda.html',
      text: 'Hakkımızda',
    },
  ],
};

/* Kodlar Buradan aşağıya */
document.getElementById('logo-img').src = siteContent.logo;
document.getElementsByTagName('title')[0].textContent = siteContent.title;

for (let i = 0; i < siteContent.links.length; i++) {
  const a = document.getElementsByTagName('a')[i];
  a.href = siteContent.links[i].href;
  a.textContent = siteContent.links[i].text;
}
