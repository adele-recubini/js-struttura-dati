// struttura dati
// DATI , FUNZIONI GENERICHE CON SCOPO IN BASE ALLE RICHIESTE , OUTPUT UTENTE DOVE VERRANNO RICHIAMATE LE FUNZIONI CON GLI ARGOMENTI DEI MIEI DATI
// richiesta : array di oggetti con varie proprietà , vogliamo filtrarle in base ad una proprietà specifica , power : i suoi valori che ogni carta avra da 1 a 5


$(document).ready(function () {

const powerValue = [1,2,3,4,5]


const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards = [{
// PRIMA CARTA
  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  // SECONDA CARTA
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 2,  // r
      toughness: 3
    }

    },
    // TERZA CARTA
    {

      cardName: 'Sviluppatore ad hoc',

      cost: {
        genericCostNumber: 7,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[1],
          fieldCodes[1]
        ],
      },

      picture: 'images/g.png',  // da inserire immagine
      cardType: cardTypes[4],
      cardObject: 'cat',

      editionType: editions['BL'],

      description: 'aiuto',
      story: 'cerca di sopravvivere.',

      score: {
        power: 5,  // r
        toughness: 3
      }

    },
    // QUARTA CARTA
    {

      cardName: 'strega',

      cost: {
        genericCostNumber: 5,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[1],
          fieldCodes[1]
        ],
      },

      picture: 'images/g.png',  // da inserire immagine
      cardType: cardTypes[2],
      cardObject: 'dog',

      editionType: editions['BL'],

      description: 'bha',
      story: 'la vita è una pacchia .',

      score: {
        power: 0,  // r
        toughness: 3
      }

    },
]


// CREAZIONE DELLE FUNZIONI
// 1 funzione che mi filtri dei valori (argomento) in un array ( secondo argomento ) questa funzione ritornera un array di valori ma quali ? gli do io i valori
// richiamandola mi filtrerà le carte array = cards con il valore per esempio 2 che ho preso da power value

function filterByPower(powerValue, array) {

   return array.filter((element) =>{
    return element.score.power === powerValue;
  })

}
console.log(filterByPower(2,cards));

// 2 funzione che dato un elemento del html ci stampa gli elementi di un array , cioe una restituzione grafica nel dom,
// vogliamo in questo caso inserire le nostre card nel html come lista
// cosa ci serve : function(elementohtml, array )
function rendering(elementHTML, array) {
  const cardList= document.getElementbyid(elementHTML)

  array.forEach((element) => {
  cardList.innerHTML+=`

  <div>${element.cardName}</div>

  `
});
return cardlist
}




// fine del document ready
});
