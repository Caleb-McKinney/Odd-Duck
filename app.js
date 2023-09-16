"use-strict"

const state = {
  ducks: [
    new Duck("R2D2 Bag", "./images/bag.jpg"),
    new Duck("Banana Cutter", "./images/banana.jpg"),
    new Duck("iBathroom", "./images/bathroom.jpg"),
    new Duck("Rain Boots", "./images/boots.jpg"),
    new Duck("Breakfast Machine", "./images/breakfast.jpg"),
    new Duck("Bubble Balls", "./images/bubblegum.jpg"),
    new Duck("Red Chair", "./images/chair.jpg"),
    new Duck("Cruisin-Goat", "./images/cruisin-goat.jpg"),
    new Duck("Cthulhu", "./images/cthulhu.jpg"),
    new Duck("Dog-Duck", "./images/dog-duck.jpg"),
    new Duck("Dragon Meat", "./images/dragon.jpg"),
    new Duck("Pen Cuttlery", "./images/pen.jpg"),
    new Duck("Pet-Sweep", "./images/pet-sweep.jpg"),
    new Duck("Pizza Scissors", "./images/scissors.jpg"),
    new Duck("Shark Sleeper", "./images/shark.jpg"),
    new Duck("Sweeper", "./images/sweep.png"),
    new Duck("Tauntaun", "./images/tauntaun.jpg"),
    new Duck("Unicorn", "./images/unicorn.jpg"),
    new Duck("water-can", "./images/water-can.jpg"),
    new Duck("wine-glass", "./images/wine-glass.jpg"),
  ],
  imageContainer: document.getElementById("image-container"),
  resultsSection: document.getElementById("results"),
  duckChart: null,
};
console.log()
// constructor function for ducks

function Duck(name, filePath) {
this.name = name;
this.filepath = filePath;
this.lastClicked = null;
this.votes = 0;
this.views = 0;
}
//method to render duck image
Duck.prototype.render = function() {
  const duckImgTag = document.createElement("img");
  duckImgTag.setAttribute("src", this.filepath);
  duckImgTag.setAttribute("alt", this.name);
 let imgName = duckImgTag.getAttribute("alt") 
//  console.log(imgName)
duckImgTag.addEventListener("click", handleClickDuck)
console.log("duckImg", duckImgTag)
  state.imageContainer.appendChild(duckImgTag);
};

function renderDucks() {
  state.imageContainer.innerHTML = "";
  // state.imageContainer.addEventListener("click", handleClickDuck);
  let duckOne = state.ducks[getRandomInt(0, state.ducks.length)];
  let duckTwo = state.ducks[getRandomInt(0, state.ducks.length)];
  let duckThree = state.ducks[getRandomInt(0, state.ducks.length)];

  while (duckOne === duckTwo) {
     duckOne = state.ducks[getRandomInt(0, state.ducks.length)];
  }
  while (duckTwo === duckThree) {
     duckOne = state.ducks[getRandomInt(0, state.ducks.length)];
  }
  while (duckOne === duckThree) {
     duckOne = state.ducks[getRandomInt(0, state.ducks.length)];
  }

  duckOne.views++;
  duckTwo.views++;
  duckThree.views++;

duckOne.render();
duckTwo.render();
duckThree.render();
}

renderDucks();

function handleClickDuck(event) {
  event.preventDefault();

  const target = event.target.alt;
// console.log("event.target.alt", event.target.alt)
  //loop through the ducks array, once we found one that was clicked, we increment the duck objects clicks
  for (let i = 0; i < state.ducks.length; i++) {
    // console.log("state.ducks[i].name", state.ducks[i].name)
    if (target === state.ducks[i].name) {
      state.ducks[i].votes++;
    }
  }

  renderDucks();
  renderResults();
}

function renderResults() {
  state.resultsSection.innerHTML = "";
  renderChart();
  const resultsElm = document.createElement("ul");

  for (let i = 0; i < state.ducks.length; i++) {
    const duck = state.ducks[i];

    const resultItemElm = document.createElement("li");
    resultItemElm.textContent = `${duck.name} was seen ${duck.views} and was clicked ${duck.votes} times.`;
    resultsElm.appendChild(resultItemElm);
  }

  state.resultsSection.appendChild(resultsElm);
}

function renderChart() {
  const ctx = document.getElementById("duck-chart");

  const labels = [];
  const votes = [];
  const views = [];

  // populate the labels, votes, and views arrays
  for (let i = 0; i < state.ducks.length; i++) {
    const duck = state.ducks[i];

    labels.push(duck.name);
    votes.push(duck.votes);
    views.push(duck.views);
  } 

  if (state.duckChart) {
    state.duckChart.clear();
    state.duckChart.destroy();
  }

  state.duckChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: votes,
          borderWidth: 1,
        },
        {
          label: "# of Views",
          data: views,
          borderwidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function getRandomInt(min, max) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


 