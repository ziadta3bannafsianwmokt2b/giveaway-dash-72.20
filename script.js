document.getElementById('giveawayForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const duration = document.getElementById('duration').value;
    const winners = document.getElementById('winners').value;
    const emoji = document.getElementById('emoji').value;
    const prize = document.getElementById('prize').value;

    const responseMessage = document.getElementById('responseMessage');

    // Validate inputs
    if (!duration || !winners || !emoji || !prize) {
        responseMessage.textContent = 'Please fill out all fields.';
        return;
    }

    // Send data to the bot's API
    try {
        const response = await fetch('http://your-bot-api-url/start-giveaway', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                duration,
                winners,
                emoji,
                prize,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            responseMessage.textContent = 'Giveaway started successfully!';
        } else {
            responseMessage.textContent = `Error: ${data.message}`;
        }
    } catch (error) {
        responseMessage.textContent = 'Failed to connect to the bot.';
        console.error(error);
    }
});
