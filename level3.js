 document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Vi kommer inte att öppna dörren.'
    },
    {
      name: '1',
      img: "We will not open the door."
    },
    {
      name: '2',
      img: 'Vår mor har inte svarta fötter som du har.'
    },
    {
      name: '2',
      img: "Our mother doesn't have black feet like you do."
    },
    {
      name: '3',
      img: 'Du är vargen!'
    },
    {
      name: '3',
      img: "You are the wolf!"
    },
    {
      name: '4',
      img: 'Vargen gick då till bagaren och sa:'
    },
    {
      name: '4',
      img: "The wolf then went to the baker and said: "
    },
    {
      name: '5',
      img: 'Jag har skadat mina fötter.'
    },
    {
      name: '5',
      img: "I have hurt my feet. "
    },
    {
      name: '6',
      img: 'Du kan väl lägga på lite deg på dem.'
    },
    {
      name: '6',
      img: "You might as well put some dough on them."
    },
    {
      name: '7',
      img: 'Sedan gick han vidare till mjölnaren och sa: '
    },
    {
      name: '7',
      img: 'Then he went on to the miller and said,'
    },
    {
      name: '8',
      img: 'Strö lite vitt mjöl på mina fötter.'
    },
    {
      name: '8',
      img: "Sprinkle some white flour on my feet."
    },
    {
      name: '9',
      img: 'Mjölnaren tänkte för sig själv:'
    },
    {
      name: '9',
      img: 'The miller thought to himself: '
    },
    {
      name: '10',
      img: 'Vargen tänker lura någon.'
    },
    {
      name: '10',
      img: 'The wolf is going to trick someone.'
    },
    {
      name: '11',
      img: 'och vägrade. '
    },
    {
      name: '11',
      img: "and refused."
    },
    {
      name: '12',
      img: 'Vargen sa då till mjölnaren:'
    },
    {
      name: '12',
      img: "The wolf then said to the miller:"
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 3 completed!</h2><a href="https://elaidina.github.io/michelle/level4.html"> Continue to Level 4</a>';


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
