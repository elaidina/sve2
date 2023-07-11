document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Det hördes på den mörka rösten.'
    },
    {
      name: '1',
      img: "It was heard on the dark voice."
    },
    {
      name: '2',
      img: 'Vi kommer inte att öppna dörren.'
    },
    {
      name: '2',
      img: "We will not open the door."
    },
    {
      name: '3',
      img: 'ropade killingarna,'
    },
    {
      name: '3',
      img: "cried the kittens,"
    },
    {
      name: '4',
      img: 'Du är inte vår mamma.'
    },
    {
      name: '4',
      img: "You are not our mother."
    },
    {
      name: '5',
      img: 'Hon har en mjuk, behaglig röst.'
    },
    {
      name: '5',
      img: "She has a soft, pleasant voice. "
    },
    {
      name: '6',
      img: 'Din röst är mörk och skrovlig.'
    },
    {
      name: '6',
      img: "Your voice is dark and gruff. "
    },
    {
      name: '7',
      img: 'Du är vargen!'
    },
    {
      name: '7',
      img: "You are the wolf!"
    },
    {
      name: '8',
      img: "Vargen gick då iväg till en handlare och köpte sig en stor bit krita, som han åt upp för att göra rösten ljusare."
    },
    {
      name: '8',
      img: 'The wolf then went off to a merchant and bought himself a large piece of chalk, which he ate to make his voice brighter.'
    },
    {
      name: '9',
      img: 'Han gick sedan tillbaks till killingarnas hus, knackade på dörren och ropade:'
    },
    {
      name: '9',
      img: "He then went back to the kittens' house, knocked on the door and called:"
    },
    {
      name: '10',
      img: 'Öppna dörren kära barn, er mor är här och har med sig något till er alla.'
    },
    {
      name: '10',
      img: "Open the door dear children, your mother is here and has brought something for you all."
    },
    {
      name: '11',
      img: ' Men han hade lagt en av sina svarta tassar på fönstret.'
    },
    {
      name: '11',
      img: "But he had put one of his black paws on the window. "
    },
    {
      name: '12',
      img: 'Det såg killingarna och de ropade: '
    },
    {
      name: '12',
      img: "The kittens saw it and shouted: "
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

cards[optionOneId].parentElement.classList.remove("green")
      

      

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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 2 completed!</h2><a href="https://elaidina.github.io/sve2/level3.html"> Continue to Level 3</a>'


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
