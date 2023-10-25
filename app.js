const express = require("express");
// const { v5: uuid } = require("uuid");
const fs = require("fs");

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
	console.log("Get all users");
	res.status(200).json({ message: "get_success" });
});

app.post("/api/users", (req, res) => {
	console.log("Create new users", req.body);
	const newUser = { ...req.body };

	const { users } = JSON.parse(
		fs.readFileSync("users.json", { encoding: "utf-8" })
	); //{users: []}

	users.push(newUser);

	fs.writeFileSync("users.json", JSON.stringify({ users }), {
		encoding: "utf-8",
	});
	res.status(200).json({ message: "post_success" });
});

app.put("/api/users/:id", (req, res) => {
	console.log("Update user by id");
	res.status(200).json({ message: "put_success" });
});

app.delete("/api/users/:id", (req, res) => {
	console.log("Delete user by id");
	const { id } = req.params;
	const { users } = JSON.parse(
		fs.readFileSync("users.json", { encoding: "utf-8" })
	);

	const index = users.findIndex((el) => el.id === userId,
	if (index < 0 ){
		res.status(400).json({message: `cannot find ${userId}`})
	} else{
		res
	});
	users.splice(index, 1);

	fs.writeFileSync("users.json", JSON.stringify({ users }), {
		encoding: "utf-8",
	});
	res.status(200).json({ message: "delete_success" });
});

app.listen(PORT, () => console.log("server listening at 3000 port"));
