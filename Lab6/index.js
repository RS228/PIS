// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end('<h1>End Server</h1>')
// })


// server.listen(3000,()=>{
//     console.log('You are a really cool programist and you has started server...')
// })

const http = require('http');

const port = + process.env.PORT || 228;

const handler = (req, res) => {
	console.log(`-> ${req.method} ${req.url}`);
	const myMoodleUsername = 'is-91-023';
	if (req.url.slice(1) === myMoodleUsername) {
		const body = {
			name: 'Роман',
			surname: 'Сильчук',
			course: 2,
			group: 'ІС-91'
		};
        
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(body));
	}
    else{
        res.end("Bye, bye :)>");
    }
};

const server = http.createServer(handler);
server.listen(port, () => {
	console.log(`Server is listening on ${port}`);
});
