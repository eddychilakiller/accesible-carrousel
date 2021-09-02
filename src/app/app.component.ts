import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'accessible-slider';
  slides = [
    {
      img: "http://placehold.it/350x150/000000",
      link: "https://www.scjn.gob.mx",
      alttext: "Enlace al portal de la Suprema Corte de la Nación"
    },
    {
      img: "http://placehold.it/350x150/111111",
      link: "https://www.scjn.gob.mx/derechos-humanos",
      alttext: "Enlace al portal de Derechos Humanos de la Suprema Corte de la Nación"
    },
    {
      img: "http://placehold.it/350x150/333333",
      link: "https://www.scjn.gob.mx/igualdad-de-genero",
      alttext: "Enlace al portal de Igualdad de Género de la Suprema Corte de la Nación"
    },
    {
      img: "http://placehold.it/350x150/666666",
      link: "https://www.scjn.gob.mx/transparencia",
      alttext: "Enlace al portal de la Unidad de Transparencia de la Suprema Corte de la Nación"
    }
  ];
  slideConfig = {
  "slidesToShow": 3,
  "slidesToScroll": 3,
  "infinite": true,
  "dots": true,
  "accessibility": true,
  "autoplay": true,
  "arrows": true,
  "prevArrow": "<button type=\"button\" class=\"slick-prev\">Anterior</button>",
  "nextArrow": "<button type=\"button\" class=\"slick-next\">Next</button>",
  "mobileFirst": true,
  "instructionsText": "Este es un carrusel",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };


  slickInit(e: any) {
    console.log('slick initialized');
  }
  constructor() { }

  ngOnInit(): void { }

}
