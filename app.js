document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray =  [
    {
      name: '1',
      img: 'Det var en gång för länge sedan en getmamma, som hade sju små killingar.'
    },
    {
      name: '1',
      img: "Once upon a time there was a mother goat who had seven little kids."
    },
    {
      name: '2',
      img: 'Hon älskade dem över allt annat.'
    },
    {
      name: '2',
      img: "She loved them above all else. "
    },
    {
      name: '3',
      img: 'En dag skulle hon gå in i skogen för att hämta lite mat, så hon kallade alla sju barnen till sig och sa:'
    },
    {
      name: '3',
      img: "One day she was going into the forest to get some food, so she called all seven children to her and said: "
    },
    {
      name: '4',
      img: 'Kära barn, jag måste gå till skogen, var försiktiga och akta er för vargen.'
    },
    {
      name: '4',
      img: "Dear children, I have to go to the forest, be careful and beware of the wolf."
    },
    {
      name: '5',
      img: 'Om han kommer hit så slukar han er med hull och hår.'
    },
    {
      name: '5',
      img: "If he comes here, he will devour you with holes and hair. "
    },
    {
      name: '6',
      img: 'Han kommer att vara utklädd, men ni kommer att känna igen honom på hans mörka röst och svarta fötter.'
    },
    {
      name: '6',
      img: "He will be dressed up, but you will recognize him by his dark voice and black feet."
    },
    {
      name: '7',
      img: 'Killingarna svarade:'
    },
    {
      name: '7',
      img: "The kittens replied:"
    },
    {
      name: '8',
      img: 'Kära mamma, vi kommer att klara oss bra. Du behöver inte oroa dig för oss.'
    },
    {
      name: '8',
      img: "Dear mother, we will be fine. You don't have to worry about us."
    },
    {
      name: '9',
      img: ' Då bräkte den gamla getmamman lättad och gick iväg till skogen utan att oroa sig.'
    },
    {
      name: '9',
      img: "Then the old mother goat bleated with relief and went off to the forest without worrying."
    },
    {
      name: '10',
      img: "Det dröjde inte lång stund innan någon knackade på dörren och ropade:"
    },
    {
      name: '10',
      img: "It wasn't long before someone knocked on the door and called out:"
    },
    {
      name: '11',
      img: 'Öppna dörren, kära barn, er mor är här och har med sig något till er alla.'
    },
    {
      name: '11',
      img: "Open the door, dear children, your mother is here and has brought something for you all."
    },
    {
      name: '12',
      img: 'Men de små killingarna förstod att det inte var deras mor utan att det var vargen.'
    },
    {
      name: '12',
      img: "But the little kittens understood that it was not their mother but the wolf."
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 1 completed!</h2><a href="https://elaidina.github.io/sve2/level2.html"> Continue to Level 2</a>'


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
