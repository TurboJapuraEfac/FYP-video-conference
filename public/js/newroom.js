let adjectives = [
  "Room"
];

let nouns = [
  "_1",
  "_2",
  "_3",
  "_4",
  "_5",
  "_6",
  "_7",
  "_8",
  "_9",
  "_10"
];

let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let noun = nouns[Math.floor(Math.random() * nouns.length)];
noun = noun.charAt(0).toUpperCase() + noun.substring(1);
adjective = adjective.charAt(0).toUpperCase() + adjective.substring(1);
document.getElementById("roomName").value = "";


let i = 0;
let txt = adjective + noun;
let speed = 100;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("roomName").value += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
