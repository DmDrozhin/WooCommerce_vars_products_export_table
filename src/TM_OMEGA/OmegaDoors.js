export default {
  Meta: {
    TM: 'TM «OMEGA»',
    Name: 'OMEGA',
    DecFilm: false,
    Yoast1: 'Двері OMEGA %%sep%% %%title%% %%sep%% +38 (099) 309-02-22',
    Yoast2: '✅ Якісні фарбовані  двері які відмінно підкреслять стиль та витонченість Вашого інтер’єру. 🌟 RAL / Kemichal ✅ 7 акційних кольорів RAL за ціною базових 🎁',
    Logo: '../TM_OMEGA/OMEGA_logo.png'
  },
  Decors: {
    DecorSet1: ['Білий базовий', 'Слонова кістка', 'RAL акційний'],
    // ['RAL1014', 'RAL3015', 'RAL5024', 'RAL6019', 'RAL7037', 'RAL7040', 'RAL9001'],
    DecorSet2: ['RAL не базовий'],

    Glasses: {
      GlassSet1: ['Двосторонній сатин'],
      GlassSet7: ['Без скла - «глухе» полотно']
    },

    OnLay1: ['Без декор. накладок'],
    OnLay2: ['Lacobel чорне скло', 'Lacobel біле скло'],
    OnLay3: ['Lacobel бордо', 'Lacobel слонова кістка'],

    Edge1: ['Звичайний торець'],
    Edge2: ['Alum. торець - алюміній'],
    Edge3: ['Alum. торець - чорний']
  },

  PanelDoors: {
    'ART VISION A3': { Decors: [['DecorSet1', 'OnLay2', 8154], ['DecorSet2', 'OnLay2', 9785], ['DecorSet1', 'OnLay3', 9376], ['DecorSet2', 'OnLay3', 11008]], Modern: true, VLines: true }
  }
}
