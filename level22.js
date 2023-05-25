document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'I don´t like helping my mum in the kitchen.'
    },
    {
      name: '1',
      img: 'Nerád pomáham mame v kuchyni.'
    },
    {
      name: '2',
      img: 'I rather play in the playground.'
    },
    {
      name: '2',
      img: 'Radšej sa hrám na ihrisku.'
    },
    {
      name: '3',
      img: 'I always set the table.'
    },
    {
      name: '3',
      img: 'Vždy prestieram stôl.'
    },
    {
      name: '4',
      img: 'The living-room is the largest room in our flat.'
    },
    {
      name: '4',
      img: 'Obývačka je najväčšia miestnosť v našom byte.'
    },
    {
      name: '5',
      img: 'My dad works on his computer here.'
    },
    {
      name: '5',
      img: 'Môj otec tu pracuje na svojom počítači.'
    },
    {
      name: '6',
      img: 'I prefer playing games on the computer.'
    },
    {
      name: '6',
      img: 'Radšej hrám hry na počítači.'
    },
    {
      name: '7',
      img: 'Little children play in the sand-pit.'
    },
    {
      name: '7',
      img: 'Malé deti sa hrajú na pieskovisku.'
    },
    {
      name: '8',
      img: 'Put on your clean trousers.'
    },
    {
      name: '8',
      img: 'Daj si čisté nohavice.'
    },
    {
      name: '9',
      img: 'In spring the country is lovely.'
    },
    {
      name: '9',
      img: 'Na jar je krajina nádherná.'
    },
    {
      name: '10',
      img: 'Trees, meadows and gardens are full of flowers.'
    },
    {
      name: '10',
      img: 'Stromy, lúky a záhrady sú plné kvetov.'
    },
    {
      name: '11',
      img: 'We go to the lake which isn´t far from our town.'
    },
    {
      name: '11',
      img: 'Ideme k jazeru, ktoré nie je ďaleko od nášho mesta.'
    },
    {
      name: '12',
      img: 'We play with sand and swim there.'
    },
    {
      name: '12',
      img: 'Hráme sa s pieskom a plávame tam.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 22 completed!</h2><a href='https://elaidina.github.io/michelle/level23.html'> Continue to Level 23</a>";


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
