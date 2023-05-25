document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Mamman klippte upp magen på vargen och nästan innan hon gjort första klippet, hoppade en liten killing ut.'
    },
    {
      name: '1',
      img: 'The mother cut open the belly of the wolf and almost before she made the first cut, a little kitten jumped out. '
    },
    {
      name: '2',
      img: 'Efter några klipp till hoppade alla sex killingar ut en efter en. '
    },
    {
      name: '2',
      img: 'After a few more clips, all six guys jumped out one by one. '
    },
    {
      name: '3',
      img: 'De var alla fortfarande i livet och hade inte kommit till skada eftersom vargen i sin glupskhet hade svalt dem hela. '
    },
    {
      name: '3',
      img: 'They were all still alive and had not been harmed because the wolf in its voraciousness had swallowed them whole. '
    },
    {
      name: '4',
      img: 'Vilket glatt återseende det var!'
    },
    {
      name: '4',
      img: 'What a happy reunion it was! '
    },
    {
      name: '5',
      img: 'De omfamnade alla sin mor och skuttade glatt omkring.'
    },
    {
      name: '5',
      img: 'They all hugged their mother and darted about happily.'
    },
    {
      name: '6',
      img: 'Mamman sa till dem: '
    },
    {
      name: '6',
      img: 'The mother said to them:'
    },
    {
      name: '7',
      img: 'Gå nu och hämta några stora stenar, så skall vi fylla den elakingens mage med dem medan han sover.'
    },
    {
      name: '7',
      img: "Now go get some big stones, and we'll fill that wretch's stomach with them while he sleeps."
    },
    {
      name: '8',
      img: 'De sju killingarna skyndade sig då att hämta stenar, som de fyllde vargens mage med.'
    },
    {
      name: '8',
      img: "The seven kittens then hurried to get stones, which they filled the wolf's stomach with. "
    },
    {
      name: '9',
      img: 'Mamman sydde sedan ihop honom igen så fort att han inte märkte något, utan fortsatte att sova.'
    },
    {
      name: '9',
      img: "The mother then sewed him back together so quickly that he didn't notice, but continued to sleep."
    },
    {
      name: '10',
      img: 'När vargen så småningom vaknade och kom upp på sina fötter, gjorde stenarna i magen honom väldigt törstig.'
    },
    {
      name: '10',
      img: 'When the wolf eventually woke up and got to his feet, the stones in his stomach made him very thirsty. '
    },
    {
      name: '11',
      img: 'Han gick därför bort till brunnen för att dricka vatten, men när han började gå började stenarna i hans mage att röra sig och skramlade mot varandra. '
    },
    {
      name: '11',
      img: 'He therefore went to the well to drink water, but as he began to walk the stones in his stomach began to move and rattled against each other. '
    },
    {
      name: '12',
      img: 'Han skrek då:'
    },
    {
      name: '12',
      img: 'He then shouted:'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 7 completed!</h2><a href='https://elaidina.github.io/sve2/level8.html'> Continue to Level 8</a>";


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
