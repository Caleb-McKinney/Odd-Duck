"use-strict"

const state = {
  ducks: [
    new Duck("R2D2 Bag", "images/bag.jpg"),
    new Duck("Banana Cutter", "images/banana.jpg"),
    new Duck("iBathroom", "images/bathroom.jpg"),
    new Duck("Rain Boots", "images/boots.jpg"),
    new Duck("Breakfast Machine", "images/breakfast.jpg"),
    new Duck("Bubble Balls", "images/bubblegum.jpg"),
    new Duck("Red Chair", "images/chair.jpg"),
    new Duck("Cruisin-Goat", "images/cruisin-goat.jpg"),
    new Duck("Cthulhu", "images/cthulhu.jpg"),
    new Duck("Dog-Duck", "images/dog-duck.jpg"),
    new Duck("Dragon Meat", "images/dragon.jpg"),
    new Duck("Pen Cuttlery", "images/pen.jpg"),
    new Duck("Pet-Sweep", "images/pet-sweep.jpg"),
    new Duck("Pizza Scissors", "images/scissors.jpg"),
    new Duck("Shark Sleeper", "images/shark.jpg"),
    new Duck("Sweeper", "images/sweep.png"),
    new Duck("Tauntaun", "images/tauntaun.jpg"),
    new Duck("Unicorn", "images/unicorn.jpg"),
    new Duck("water-can", "images/water-can.jpg"),
    new Duck("wine-glass", "images/wine-glass.jpg"),
  ],
  photoContainer: document.getElementById
  resultsSection: document.getElementById
};

// constructor function for ducks

function Duck(name,filepath) {
this.name = name;
this.filepath = filePath;
this.lastClicked = null;
this.votes = 0;
this.views = 0;
}
//method to render duck image
Duck.prototype.render = function() {
  const goatImg = document.createElement("img");
  duckImg.src = this.filePath;
  duckImg.alt = this.name;

  state.imageContainer.appendChild(duckImg);
};

function renderDucks() {
  state.imageContainer.innerHTML = "";
  state.imageContainer.addEventListener("click", handleClickDuck);
  let duckOne = state.ducks[getRandomInt(0, state.ducks.length)];
  let duckTwo = state.ducks[(0, state.ducks.length)];

  while (duckOne === goatTwo) {
     duckOne = state.ducks[getRandomInt(0, state.ducks.length)];
  }
  duckOne.views++;
duckTwo.views++;

duckOne.render();
duckTwo.render();
}

renderDucks();

function handleClickDuck(event) {
  event.preventDefault();

  const target = event.target.alt;

  //loop through the ducks array, once we found one that was clicked, we increment the duck objects clicks
  for (let i = 0; i < state.ducks.length; i++) {
    if (target === state.ducks[i].name) {
      state.ducks[i].votes++;
    }
  }

  renderDucks();
  renderResults();
}

function renderResults() {
  state.resultsSection.innerHTML = "";
  const resultsElm = document.createElement("ul");

  for (let i = 0; i < state.ducks.length; i++) {
    const goat = state.ducks[i];

    const resultItemElm = document.createElement("li");
    resultItemElm.textContent = `${goat.name} was seen ${goat.views} and was clicked ${goat.votes} times.`;
    resultsElm.appendChild(resultItemElm);
  }

  state.resultsSection.appendChild(resultsElm);
}

function getRandomInt(min, max) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
}

