//specify the http module or package from NPM. User protocol.
var http = require("http");
//specify the port being used where the requests will come in through
var PORT = 7000;
var PORT2 = 7500;
//function to do something with the request
function handleRequest1(request, response) {
	//after request is made the response to the user
	  response.end("You are awesome!");
}
function handleRequest2(request, response) {
	//after request is made the response to the user
	  response.end("You are a failure!");
}
	//create the server action to handle the request
	var server1 = http.createServer(handleRequest1);
	//listener which will look out for requests comming through the port
	server1.listen(PORT, function() {
		//provide feedback that the server is listening to a particular port
		  console.log("Server listening on: http://localhost:%s", PORT);
		});
	var server2 = http.createServer(handleRequest2);
	//listener which will look out for requests comming through the port
	server2.listen(PORT2, function() {
		//provide feedback that the server is listening to a particular port
		  console.log("Server listening on: http://localhost:%s", PORT2);
		});
