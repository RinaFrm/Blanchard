ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.76006518668377,37.60100266931142],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl'] }, {
          zoomControlSize: 'small'
    });

// Создание метки
        myPlacemark = new ymaps.Placemark( [55.75846806898367,37.60108849999989], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/contacts-map.svg', // картинка иконки
          iconImageSize: [20, 20], // размеры картинки
        });

  // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark)
  };

