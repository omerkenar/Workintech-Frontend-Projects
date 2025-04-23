import React, { useState } from 'react';
import { movies } from './sahteVeri';

import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import { Route, Switch } from 'react-router-dom';
import FilmListesi from './components/FilmListesi';
import Film from './components/Film';

export default function App() {
  /* Görev: 1
  kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
  film listesini sahteVeri'den alın.
  */
  const [recordedFilms, setRecordedFilms] = useState([]);
  const [filmList, setFilmList] = useState(movies);

  const KaydedilenlerListesineEkle = (movie) => {
    /* Görev: 2
    kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
    aynı filmi 2. kez eklememeli.
    Kaydet butonunun olduğu component'e prop olarak gönderin.
    */
    setRecordedFilms((prev) => {
      if (prev.find((item) => item.id === movie.id)) {
          return prev;
      }
      return [...prev, movie];
  });
  };

  return (
    <div>
      <KaydedilenlerListesi list={recordedFilms} />
      {/* 
      Görev 3: 2 adet route tanımlayın.
      1. route '/' olacak ve FilmListesi component'ini yükleyecek ve buraya film listesini prop olarak yollayacak.
      2. route '/filmler/' parametresinden sonra 'id' parametresini alacak  (örnek: '/filmler/2', '/filmler/3' id dinamik olacak). Bu route 'Film' bileşenini yükleyecek.
      */}
      <Switch>
        <Route path="/" exact>
          <FilmListesi movies={filmList} />
        </Route>
        <Route path="/filmler/:id">
          <Film clickHandler={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}
