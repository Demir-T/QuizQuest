let pic;
let number;
let question;

function preload() {
  pic = loadImage("assets/fruits.png"); // Başlangıç görseli
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
    if (mouseX >= 0 && mouseX < 100) output("No, apples are sour");
    else if (mouseX >= 100 && mouseX < 200) output("No, bananas are bland");
    else if (mouseX >= 200 && mouseX < 300) {
      output("Right, cherries are sweet");
      pic = loadImage("assets/australia.gif");
      question = "Where is the capital?";
      number++;
      return;
    } else output("You missed");
  }

  // Question 2
  if (number === 2) {
    if (mouseX > 280 && mouseX < 350 && mouseY > 280 && mouseY < 350) {
      output("Right - Canberra");
      pic = loadImage("assets/sports.jpg");
      question = "Find American Football";
      number++;
      return;
    } else output("No, try again");
  }

  // Question 3
  if (number === 3) {
    if (mouseX > 100 && mouseX < 205 && mouseY > 250 && mouseY < 360) {
      output("Correct");
      pic = loadImage("assets/drinks.jpg");
      question = "Which one is coconut juice?";
      number++;
      return;
    } else output("No");
  }

  // Question 4
  if (number === 4) {
    if (mouseX > 250 && mouseX < 350 && mouseY > 50 && mouseY < 150) {
      output("Correct");
      pic = loadImage("assets/mc.jpg");
      question = "Which one is the Enderman?";
      number++;
      return;
    } else output("No, try again");
  }

  // Question 5
  if (number === 5) {
    if (mouseX > 400 && mouseX < 460 && mouseY > 50 && mouseY < 150) {
      output("Correct!");
      pic = loadImage("assets/space.jpg");
      question = "Which planet is known as the Red Planet?";
      number++;
      return;
    } else output("No, try again");
  }

  // Question 6 
  if (number === 6) {
    if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
      output("Correct! It's Mars");
      pic = loadImage("assets/animals.jpg");
      question = "Click on the lion";
      number++;
      return;
    } else output("No, try again");
  }

  // Question 7 
  if (number === 7) {
    if (mouseX > 300 && mouseX < 400 && mouseY > 150 && mouseY < 250) {
      output("Correct! Lion spotted");
      pic = loadImage("assets/countries.jpg");
      question = "Which country has the Eiffel Tower?";
      number++;
      return;
    } else output("No, try again");
  }

  // Question 8 
  if (number === 8) {
    if (mouseX > 400 && mouseX < 500 && mouseY > 200 && mouseY < 300) {
      output("Congratulations! You completed QuizQuest!");
      noLoop();
      return;
    } else output("No, try again");
  }
}

// Alert mesaj fonksiyonu
function output(message) {
  alert(message);
}
