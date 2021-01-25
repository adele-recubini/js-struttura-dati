// struttura dati
// DATI , FUNZIONI GENERICHE CON SCOPO IN BASE ALLE RICHIESTE , OUTPUT UTENTE DOVE VERRANNO RICHIAMATE LE FUNZIONI CON GLI ARGOMENTI DEI MIEI DATI
// richiesta : array di oggetti con varie proprietà , vogliamo filtrarle in base ad una proprietà specifica , power : i suoi valori che ogni carta avra da 1 a 5


$(document).ready(function () {

const powerValues = [1,2,3,4,5]


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
        power: 1,  // r
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
// questa invece la funzione che me le filtra per tipo
function filterByType(typeValue, array) {

   return array.filter((element) =>{
    return element.cardType === typeValue;
  })
}
// console.log(filterByPower(2,cards));

// 2 funzione che dato un elemento del html ci stampa gli elementi di un array , cioe una restituzione grafica nel dom,
// vogliamo in questo caso inserire le nostre card nel html come lista
// cosa ci serve : function(elementohtml, array )

function rendering(elementHTML, array) {
  const cardList= document.getElementById(elementHTML)
  cardList.innerHTML = ''; // svuota cioe ogni volta la lista di carte

  array.forEach((element) => {
  cardList.innerHTML+= ` Carta:${element.cardName};`
});
}



// richiamimao la funzione come argomento gli mettero il mio id come stringa cheho creato nell html
rendering('cards-container' ,cards);


// 3 funzione che mi inserisca nel search dell option dei valori di un array che poi saranno quelli collegati alle cards
// la funzione è praticamente simile a quella che mi inserisce dei valori nell html (vedi rendering)

function renderingValue(elementHTML, array) {
  const valueList= document.getElementById(elementHTML)
console.log(array);
  array.forEach((element) => {

  valueList.innerHTML+= ` <option>${element}</option>`
});
}
renderingValue('selector' , powerValues)
renderingValue('select' , cardTypes)



// OUTPUT UTENTE
// l utente sceglierà qualcosa dal dom e a quella scelta verrà associato una parte della lista cards, attivazione funzione change
// in ascolto sulla select con id selector cioè l utente clica li quindi cambierà la scelta dei valori da li
$("#selector").change(function(){
 const selectValue = parseInt($(this).val())
 // creiamo un array a cui diamo la funzione di filtraggio per valore cioe filterByPower a cui dimao come primo argomento dei valori ... quelli che seleziono io quando clicco su opzioni quindi select value  e lcome secondo agomento l array totale

 const arrayFiltrato = filterByPower(selectValue, cards);

 // ho l array filtrato in base ai valori che seleziono nelle option ma ora vorrei che comparisse nel dom, utilizzo la funzione rendering. dove come primo argomento mettero una sezione del dom e come secondo argomento l array filtrato appena creato
 rendering('cards-container',arrayFiltrato);
 // in cards container quindi nel dom visualizzerò ad ogni scelta del valore da 1 a 5 l array filtrato per quei valori

// BONUS CREARE UN ALTRA SELECT CHE filtra PER CARdTYPE
// prima dobbiamo inserire l array del ipo delle crte  nelle opzioni e abbiamo una funzione che possiamo riutilizzare
// NB la funzione la richiamimao sopra perche in questo momento siamo all interno di un change e quindi non funziona
})
$("#select").change(function(){
  const selectType = $(this).val()

  const arrayFiltratoType = filterByType(selectType, cards )

  rendering('cards-container', arrayFiltratoType);
})

// per l evento del reset ho creato un bottone quindi non sara una funzione di change ma di click ! e la funzione che mi mostrava tutte le carte per nome gia l avevo creata quindi la richiamo

$("#button-reset").click(function() {
 rendering('cards-container',cards)
})



// fine del document ready
});
