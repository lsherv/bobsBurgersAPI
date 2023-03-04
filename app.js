const express = require("express");
const app = express();

let characters = [
  {
    id: 1,
    name: "Bob Belcher",
    family: "Linda, Tina, Gene, Louise",
    friends: "Teddy, Mort",
  },
  {
    id: 2,
    name: "Linda Belcher",
    family: "Bob, Tina, Gene, Louise",
    friends: "Teddy, Mort",
  },
  {
    id: 3,
    name: "Tina Belcher",
    family: "Bob, Linda, Gene, Louise",
    friends: "Teddy, Mort, Andy, Ollie, Jimmy Jr",
  },
  {
    id: 4,
    name: "Louise Belcher",
    family: "Bob, Tina, Gene, Linda",
    friends: "Teddy, Mort",
  },
  {
    id: 5,
    name: "Gene Belcher",
    family: "Bob, Linda, Tina, Louise",
    friends: "Teddy, Mort",
  },
];
//base response
app.get("/", (req, res) => {
  res.send("<h1>Bobs Burgers simple service</h1>");
});
//all characters
app.get("/api/characters", (req, res) => {
  res.json(characters);
});
//specific character by id
app.get("/api/characters/id/:id", (req, res) => {
  const id = Number(req.params.id);
  const character = characters.find((character) => character.id == id);

  if (character) {
    res.json(character);
  } else {
    res.statusMessage = `Id ${id} not found`;
    res.status(404).end();
  }
});

//specific character by name
app.get("/api/characters/name/:name", (req, res) => {
  const name = String(req.params.name);
  const character = characters.find((character) => character.name == name);

  if (character) {
    res.json(character);
  } else {
    res.statusMessage = `Name ${name} not fonud`;
    res.status(404).end();
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
