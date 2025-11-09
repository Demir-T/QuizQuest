let pic;
let number;
let question;

function preload() {
  pic = loadImage("assets/fruits.png"); // İlk görsel
}

function setup() {
  createCanvas(600, 600);
  textFont("Arial", 20);
  number = 1;
  question = "Click the best fruit";
}

function draw() {
  background(255);
  image(pic, 0, 50);
  fill(0);
  text(question, 20, 40);
}

function mouseClicked() {

 // Question 1
if (number === 1) {
  if (mouseX >= 30 && mouseX < 180 && mouseY >= 60 && mouseY < 200) {
    output("No, grapes are too sour");
  }
  else if (mouseX >= 250 && mouseX < 400 && mouseY >= 60 && mouseY < 200) {
    output("No, apples are sour");
  }
  else if (mouseX >= 30 && mouseX < 160 && mouseY >= 250 && mouseY < 450) {
    output("No, bananas are bland");
  }
  else if (mouseX >= 230 && mouseX < 400 && mouseY >= 270 && mouseY < 420) {
    output("Right, cherries are sweet");
    pic = loadImage("assets/animals2.jpg");
    question = "Click on the dog 🐶";
    number++;
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
