(function(){
    var app = angular.module('scottmotors',[ ]);
    app.controller('listadoCtrl', ['$scope', function($scope){
    $scope.carros=[
          {
            "id": 0,
            "Marca": "BMW",
            "Modelo": "M4",
            "Color": "Rojo",
            "Year": "2021",
            "Precio": 1140000.00,
            "Transmision": "Automatica",
            "img": "bmw",
          },
          {
            "id": 1,
            "Marca": "Chevrolet",
            "Modelo": "Camaro",
            "Color": "Azul",
            "Year": "2022",
            "Precio": 1268900.00,
            "Transmision": "Automatica",
            "img": "camaro",
            "Destacado": true
          },
          {
            "id": 2,
            "Marca": "Ferrari",
            "Modelo": "F12",
            "Color": "Blanco",
            "Year": "2013",
            "Precio": 7849880.00,
            "Transmision": "Automatica",
            "img": "ferrari"
          },
          {
            "id": 3,
            "Marca": "Jeep",
            "Modelo": "Wrangler",
            "Color": "Negro",
            "Year": "2015",
            "Precio": 1226000.00,
            "Transmision": "Automatica",
            "img": "jeep",
            "Destacado": true
          },
          {
            "id": 4,
            "Marca": "Mazda",
            "Modelo": "3",
            "Color": "Negro",
            "Year": "2021",
            "Precio": 373900.00,
            "Transmision": "Automatica",
            "img": "mazda 3"
          },
          {
            "id": 5,
            "Marca": "Mclaren",
            "Modelo": "720S",
            "Color": "Blanco",
            "Year": "2018",
            "Precio": 6476151.00,
            "Transmision": "Automatica",
            "img": "Mclaren",
            "Destacado": true
          },
          {
            "id": 6,
            "Marca": "Mercedes Benz",
            "Modelo": "GT",
            "Color": "Gris",
            "Year": "2018",
            "Precio": 3081077.00,
            "Transmision": "Automatica",
            "img": "mercedes-benz",
            "Destacado": true
          },
          {
            "id": 7,
            "Marca": "NISSAN",
            "Modelo": "Patrol",
            "Color": "Negro",
            "Year": "2022",
            "Precio": 349990.00,
            "Transmision": "Automatica",
            "img": "nissan"
          },
          {
            "id": 8,
            "Marca": "Porsche",
            "Modelo": "991",
            "Color": "Rojo",
            "Year": "2011",
            "Precio": 10793585.00,
            "Transmision": "Automatica",
            "img": "porsche"
          },
          {
            "id": 9,
            "Marca": "Tesla",
            "Modelo": "Roadster",
            "Color": "Blanco",
            "Year": "2012",
            "Precio": 4700000.00,
            "Transmision": "Automatica",
            "img": "tesla",
            "Destacado": true
          },
          {
            "id": 10,
            "Marca": "TOYOTA",
            "Modelo": "Tacoma TRD",
            "Color": "Arena",
            "Year": "2019",
            "Precio": 749000.00,
            "Transmision": "Automatica",
            "img": "toyota"
          }
          ,
          {
            "id": 11,
            "Marca": "TOYOTA",
            "Modelo": "Avalon",
            "Color": "Blanco",
            "Year": "2014",
            "Precio": 372830.00,
            "Transmision": "Automatica",
            "img": "toyota2",
            "Destacado": false
          }
          ,
          {
            "id": 12,
            "Marca": "VW",
            "Modelo": "MK2",
            "Color": "Dorado",
            "Year": "1991",
            "Precio": 80000.00,
            "Transmision": "Estandar",
            "img": "mk2",
            "Destacado": false
          },
          {
            "id": 13,
            "Marca": "VW",
            "Modelo": "Vocho",
            "Color": "Plateado",
            "Year": "1969",
            "Precio": 120000.00,
            "Transmision": "Estandar",
            "img": "vw-vocho",
            "Destacado": false
          }
        ];
    }]);
})();
    