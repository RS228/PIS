const apiBaseURL = 'ws://localhost';
const ws = new WebSocket(apiBaseURL);

const form = document.getElementById('ipn-form');
const resultContainer = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const ipn = form.elements.ipn.value;
    ws.send(ipn);
});

ws.onmessage = ({ data: amount }) => {
    resultContainer.innerHTML = `
        <strong>Зарплата:</strong> ${amount} грн.
    `;
};