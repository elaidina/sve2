document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Does it move?'
    },
    {
      name: '1',
      img: 'Hýbe sa?'
    },
    {
      name: '2',
      img: 'How do you go to school?'
    },
    {
      name: '2',
      img: 'Ako chodíš do školy?'
    },
    {
      name: '3',
      img: 'On foot, by bus, by tram or by car?'
    },
    {
      name: '3',
      img: 'Pešo, autobusom, električkou alebo autom?'
    },
    {
      name: '4',
      img: 'We´re going to make a salad in the kitchen.'
    },
    {
      name: '4',
      img: 'Urobíme šalát v kuchyni.'
    },
    {
      name: '5',
      img: 'We need a knife, a spoon, a bowl, carrots, one cucumber, a cabbage, peas, some sugar and lemon juice.'
    },
    {
      name: '5',
      img: 'Potrebujeme nôž, lyžicu, misku, mrkvu, jednu uhorku, kapustu, hrášok, trochu cukru a citrónovú šťavu.'
    },
    {
      name: '6',
      img: 'First, we cut the vegetables.'
    },
    {
      name: '6',
      img: 'Najskôr si nakrájame zeleninu.'
    },
    {
      name: '7',
      img: 'Then we mix all the ingredients together.'
    },
    {
      name: '7',
      img: 'Potom všetky ingrediencie spolu zmiešame.'
    },
    {
      name: '8',
      img: 'Finally, we put everything on plates.'
    },
    {
      name: '8',
      img: 'Nakoniec dáme všetko na taniere.'
    },
    {
      name: '9',
      img: 'The salad is very tasty.'
    },
    {
      name: '9',
      img: 'Šalát je veľmi chutný.'
    },
    {
      name: '10',
      img: 'My room is in a mess.'
    },
    {
      name: '10',
      img: 'V mojej izbe je neporiadok.'
    },
    {
      name: '11',
      img: 'There are clothes everywhere.'
    },
    {
      name: '11',
      img: 'Všade je oblečenie.'
    },
    {
      name: '12',
      img: 'All my books and toys are on the floor.'
    },
    {
      name: '12',
      img: 'Všetky moje knihy a hračky sú na podlahe.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 14 completed!</h2><a href='https://elaidina.github.io/michelle/level15.html'> Continue to Level 15</a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
