const ws = require('ws');

const data = [
	{
		ipn: '1111',
		amount: 10000
	},
	{
		ipn: '2222',
		amount: 20000
	},
	{
		ipn: '3333',
		amount: 40000
	},
	{
		ipn: '4444',
		amount: 50000
	},
	{
		ipn: '5555',
		amount: 60000
	},
];

const port = process.env.PORT || 12;
const wss = new ws.Server({ port });

console.log(`=> Server is listening on ${port}`);

wss.on('connection', async (ws) => {
	ws.on('message', async (message) => {
		console.log(`-> received: ${message}`);

		const record = data.find(record => record.ipn === message); 
		ws.send(record?.amount.toString() || 0);
	});
});
