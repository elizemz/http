const express = require("express");
const fs = require("fs");

const app = express();

app.

const users = [
	{ id: 1, username: "Ben", age: 10 },
	{ id: 2, username: "Ten", age: 21 },
	{ id: 3, username: "Hes", age: 23 },
	{ id: 4, username: "Akid", age: 20 },
];

app.get("/", (req, res) => {
	const a = fs.readFileSync("test.txt", { encoding: "utf-8" });
	const count = content.split(" ").length;
	res.send("hello express");
});

app.get("/about", (req, res) => {
	res.status(200).json({ name: "Naraa", age: 29 });
});

app.get("/wordCount", (req, res) => {
	const a = fs.readFileSync("test.txt", { encoding: "utf-8" });
	const count = content.split(" ").length;
	res.send("Count" + count);
});

app.get("/users/:userId", (req, res) => {
	const { userId }= req.params;
  console.log("UI", userId);
	const findUser = users.filter((user)=> user.id=== Number(userId));
  console.log("FU", findUser);
	if (findUser.length === 0) {
		res.status(404).json({ message: "Not Found"});
	} else{

  }
	res.json(findUser);
});

// JSON.stringify();

app.listen(3000, () => console.log("server listening at 3000 port"));
