const express = require('express');
const axios = require('axios');

const app = express();

// Endpoint to handle requests to external API with prompt and model
app.get('/api/gpt', async (req, res) => {
    const { prompt, model } = req.query;

    if (!prompt || !model) {
        return res.status(400).json({ error: 'Prompt and model parameters are required' });
    }

    try {
        // Make a GET request to the external API
        const apiUrl = 'https://openai-gptt-v1.onrender.com';
        const response = await axios.get(apiUrl, {
            params: {
                prompt,
                model
            }
        });

        // Extract the answer from the response data
        const answer = response.data.answer;

        res.json({ answer: answer });
    } catch (error) {
        console.error('Error fetching answer:', error);
        res.status(500).json({ error: 'Failed to fetch answer' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
