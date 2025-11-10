let pic;
let number;
let question;

function preload() {
  pic = loadImage("assets/fruits.png"); // İlk görsel
}

function setup() {
  createCanvas(900, 900);
  textFont("Arial", 20);
  number = 1;
  question = "Click the best fruit";
}

function draw() {
  background(255);
  image(pic, 0, 50, 900, 800);
  fill(0);
  text(question, 20, 40);
}

function mouseClicked() {

 // Question 1
if (number === 1) {
  // Grape
  if (mouseX >= 30 && mouseX < 100 && mouseY >= 80 && mouseY < 170) {
    output("No, grapes are too sour");
  }

  // Apple
  else if (mouseX >= 110 && mouseX < 170 && mouseY >= 80 && mouseY < 170) {
    output("No, apples are sour");
  }

  // Cherry
  else if (mouseX >= 160 && mouseX < 250 && mouseY >= 180 && mouseY < 200) {
    output("Right, cherries are sweet!");
    pic = loadImage("assets/animals2.jpg");
    question = "Click on the dog 🐶";
    number++;
  }

  // Banana
  else if (mouseX >= 40 && mouseX < 120 && mouseY >= 190 && mouseY < 200) {
    output("No, bananas are bland");
  }

  else {
    output("You missed!");
  }
}


  // Question 2
  else if (number === 2) {
    if (mouseX > 280 && mouseX < 350 && mouseY > 280 && mouseY < 350) {
      output("Right - Canberra");
      pic = loadImage("assets/sports.jpg");
      question = "Find American Football";
      number++;
    } else output("No, try again");
  }

  // Question 3
  else if (number === 3) {
    if (mouseX > 100 && mouseX < 205 && mouseY > 250 && mouseY < 360) {
      output("Correct");
      pic = loadImage("assets/drinks.jpg");
      question = "Which one is coconut juice?";
      number++;
    } else output("No");
  }

  // Question 4
  else if (number === 4) {
    if (mouseX > 250 && mouseX < 350 && mouseY > 50 && mouseY < 150) {
      output("Correct");
      pic = loadImage("assets/mc.jpg");
      question = "Which one is the Enderman?";
      number++;
    } else output("No, try again");
  }

  // Question 5
  else if (number === 5) {
    if (mouseX > 400 && mouseX < 460 && mouseY > 50 && mouseY < 150) {
      output("Correct!");
      pic = loadImage("assets/space.jpg");
      question = "Which planet is known as the Red Planet?";
      number++;
    } else output("No, try again");
  }

  // Question 6
  else if (number === 6) {
    if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
      output("Correct! It's Mars");
      pic = loadImage("assets/animals.jpg");
      question = "Click on the lion";
      number++;
    } else output("No, try again");
  }

  // Question 7
  else if (number === 7) {
    if (mouseX > 300 && mouseX < 400 && mouseY > 150 && mouseY < 250) {
      output("Correct! Lion spotted");
      pic = loadImage("assets/countries.jpg");
      question = "Which country has the Eiffel Tower?";
      number++;
    } else output("No, try again");
  }

  // Question 8 – Final
  else if (number === 8) {
    if (mouseX > 400 && mouseX < 500 && mouseY > 200 && mouseY < 300) {
      output("🎉 Congratulations! You completed QuizQuest!");
      noLoop();
    } else output("No, try again");
  }
}

function output(message) {
  alert(message);
}
