function divideQueue() {
    const originalQueue = document.getElementById('queue').value.split(',').map(item => item.trim());
    
    const queue1 = [];
    const queue2 = [];
    
    for (let i = 0; i < originalQueue.length; i++) {
        if (i % 2 === 0) {
            queue1.push(originalQueue[i]);
        } else {
            queue2.push(originalQueue[i]);
        }
    }
    
    const output = document.getElementById('output');
    output.innerHTML = `
        <p>Cola 1: [${queue1.join(', ')}]</p>
        <p>Cola 2: [${queue2.join(', ')}]</p>
    `;
}

function removeUnauthorized() {
    const ticketQueue = document.getElementById('tickets').value.split(',').map(item => parseInt(item.trim()));
    
    const unauthorized = [];
    const authorized = [];
    
    while (ticketQueue.length > 0) {
        const ticket = ticketQueue.shift();
        if (!isNaN(ticket)) {
            authorized.push(ticket);
        } else {
            unauthorized.push(ticket);
        }
    }
    
    const output = document.getElementById('output2');
    output.innerHTML = `
        <p>Cola Inicial: [${authorized.join(', ')}]</p>
        <p>Colados Retirados: [${unauthorized.join(', ')}]</p>
        <p>Cola Final: [${authorized.join(', ')}]</p>
    `;
}
