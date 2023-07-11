document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Om du inte gör som jag säger, kommer jag att äta upp dig.'
    },
    {
      name: '1',
      img: "If you don't do as I say, I will eat you."
    },
    {
      name: '2',
      img: 'Då blev mjölnaren rädd och gjorde hans tassar vita med mjölet.'
    },
    {
      name: '2',
      img: "Then the miller got scared and turned his paws white with the flour."
    },
    {
      name: '3',
      img: 'Så nu gick den elaka vargen för tredje gången till killingarnas dörr.'
    },
    {
      name: '3',
      img: "So now the wicked wolf went to the kittens' door for the third time."
    },
    {
      name: '4',
      img: 'Han knackade och sa:'
    },
    {
      name: '4',
      img: "He knocked and said:"
    },
    {
      name: '5',
      img: 'Öppna dörren barn, er kära mor har kommit tillbaka hem från skogen och har med sig något till var och en av er.'
    },
    {
      name: '5',
      img: "Open the door children, your dear mother has returned home from the forest and has brought something for each of you."
    },
    {
      name: '6',
      img: 'Killingarna ropade då:'
    },
    {
      name: '6',
      img: "The kittens then shouted:"
    },
    {
      name: '7',
      img: 'Visa först dina fötter så att vi kan se att det är vår mor.'
    },
    {
      name: '7',
      img: "Show your feet first so we can see that it is our mother."
    },
    {
      name: '8',
      img: 'Vargen visade då sina fötter i fönstret. '
    },
    {
      name: '8',
      img: "The wolf then showed his feet in the window."
    },
    {
      name: '9',
      img: 'När killingarna såg de vita fötterna trodde de att han talade sanning och öppnade dörren.'
    },
    {
      name: '9',
      img: "When the kittens saw the white feet, they thought he was telling the truth and opened the door."
    },
    {
      name: '10',
      img: "Men vem var det som kom in om inte vargen! "
    },
    {
      name: '10',
      img: 'But who came in if not the wolf! '
    },
    {
      name: '11',
      img: 'De blev skräckslagna och ville gömma sig.'
    },
    {
      name: '11',
      img: 'They were terrified and wanted to hide.'
    },
    {
      name: '12',
      img: 'En sprang under bordet, den andra hoppade ner i sängen, den tredje gömde sig i ugnen, '
    },
    {
      name: '12',
      img: 'One ran under the table, the second jumped into the bed, the third hid in the oven, '
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 4 completed!</h2><a href='https://elaidina.github.io/sve2/level5.html'> Continue to Level 5</a>";


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
