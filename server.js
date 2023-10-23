console.log("End of File Read");

const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
	// if (req.method === "Get") {
	console.log("Request", req);
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	res.end("<h1>Get Method</h1>");
	// } else if (req.method === "Post") {
	// 	res.statusCode = 200;
	// 	res.setHeader("Content-Type", "text/html");
	// 	res.end("<h1>Post Method</h1>");
	// }
});

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
