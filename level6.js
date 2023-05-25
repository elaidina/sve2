document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Då sa en späd röst gråtande:'
    },
    {
      name: '1',
      img: "Then a small voice said crying:"
    },
    {
      name: '2',
      img: 'Kära mamma, jag är inuti golvuret.'
    },
    {
      name: '2',
      img: "Dear mother, I am inside the floor clock."
    },
    {
      name: '3',
      img: 'Hon tog ut den lilla killingen, som då berättade att vargen hade kommit dit och ätit upp alla de andra.'
    },
    {
      name: '3',
      img: 'She took out the little kitten, who then told her that the wolf had come there and eaten all the others. '
    },
    {
      name: '4',
      img: 'Du kan tänka dig som hon grät över de stackars barnen.'
    },
    {
      name: '4',
      img: 'You can imagine how she cried over the poor children.'
    },
    {
      name: '5',
      img: 'Hon gick gråtande ut ur huset och den lilla killingen sprang efter henne. '
    },
    {
      name: '5',
      img: "She went out of the house crying and the little kitten ran after her."
    },
    {
      name: '6',
      img: 'När de kom ut på ängen, såg de vargen ligga snarkande under ett träd. '
    },
    {
      name: '6',
      img: 'When they came out into the meadow, they saw the wolf lying snoring under a tree.'
    },
    {
      name: '7',
      img: 'Han snarkade så högt att grenarna skakade. '
    },
    {
      name: '7',
      img: 'He snored so loudly that the branches shook.'
    },
    {
      name: '8',
      img: 'Den gamla getmamman tittade ingående på vargen och såg att det var något som rörde sig och kämpade inuti vargens mage. '
    },
    {
      name: '8',
      img: "The old mother goat looked closely at the wolf and saw that there was something moving and struggling inside the wolf's belly."
    },
    {
      name: '9',
      img: 'Oh kära nån'
    },
    {
      name: '9',
      img: 'Oh dear'
    },
    {
      name: '10',
      img: 'sa hon,'
    },
    {
      name: '10',
      img: 'she said,'
    },
    {
      name: '11',
      img: 'kanske är mina stackars killingar, som han svalde, fortfarande vid liv.'
    },
    {
      name: '11',
      img: 'perhaps my poor little ones, whom he swallowed, are still alive.'
    },
    {
      name: '12',
      img: 'Sedan sprang killingen hem och hämtade, sax, nål och tråd.'
    },
    {
      name: '12',
      img: "Then the kitten ran home and got scissors, needle and thread."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 6 completed!</h2><a href='https://elaidina.github.io/sve2/level7.html'> Continue to Level 7</a>";


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
