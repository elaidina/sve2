document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'She put a disposable mask over her nose and mouth.'
    },
    {
      name: '1',
      img: 'Na nos a ústa si dala jednorazovú masku.'
    },
    {
      name: '2',
      img: 'What´s that for?'
    },
    {
      name: '2',
      img: 'Na čo to je?'
    },
    {
      name: '3',
      img: 'So that I don´t breathe over you.'
    },
    {
      name: '3',
      img: 'Aby som nad tebou nedýchal.'
    },
    {
      name: '4',
      img: 'It´s your turn now.'
    },
    {
      name: '4',
      img: 'Teraz si na rade.'
    },
    {
      name: '5',
      img: 'She found a little hole in one of Tom´s teeth.'
    },
    {
      name: '5',
      img: 'Našla malú dierku v jednom z Tomových zubov.'
    },
    {
      name: '6',
      img: 'I will clean that hole and put a filling in it.'
    },
    {
      name: '6',
      img: 'Vyčistím tú dieru a dám do nej výplň.'
    },
    {
      name: '7',
      img: 'It will stop pieces of food getting in and turning nasty.'
    },
    {
      name: '7',
      img: 'Zabráni tomu, aby sa kúsky jedla dostali dovnútra a robili neplechu.'
    },
    {
      name: '8',
      img: 'The sucking tube in Tom´s mouth made funny sucking noises.'
    },
    {
      name: '8',
      img: 'Nasávacia hadička v Tomových ústach vydávala smiešne zvuky sania.'
    },
    {
      name: '9',
      img: 'Then she used a whizzy drill to clean out the hole in Tom´s tooth.'
    },
    {
      name: '9',
      img: 'Potom použila vrtačku na vyčistenie diery v Tomovom zube.'
    },
    {
      name: '10',
      img: 'The nurse gave Tom a glass of pink water to rinse his mouth.'
    },
    {
      name: '10',
      img: 'Sestra dala Tomovi pohár ružovej vody, aby si vypláchol ústa.'
    },
    {
      name: '11',
      img: 'The dentist dried the hole with a little air blower, so that the filling would stick tight inside.'
    },
    {
      name: '11',
      img: 'Zubár dieru vysušil malým dúchadlom, aby sa výplň pevne prilepila.'
    },
    {
      name: '12',
      img: 'The nurse mixed a tiny bit of silver filling.'
    },
    {
      name: '12',
      img: 'Sestra namiešala malý kúsok striebornej náplne.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/michelle/level39.html'> Continue to next level </a>";


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
