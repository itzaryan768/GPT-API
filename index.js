const express = require('express');
const axios = require('axios');

const app = express();

/*
Supported models:
*gpt-4
*gpt-4-0613
*gpt-4-32k
*gpt-4-0314
*gpt-4-32k-0314
*gpt-3.5-turbo
*gpt-3.5-turbo-16k
*gpt-3.5-turbo-0613
*gpt-3.5-turbo-16k-0613
*gpt-3.5-turbo-0301
*text-davinci-003
*text-davinci-002
*code-davinci-002
*gpt-3
*text-curie-001
*text-babbage-001
*text-ada-001
*davinci
*curie
*babbage
*ada
*babbage-002
*davinci-002
*/

app.get('/api/gpt', async (req, res) => {
    const { prompt, model } = req.query;

    if (!prompt || !model) {
        return res.status(400).json({ error: 'Prompt and model parameters are required' });
    }

    // Check if the requested model is in the list of supported models
    const supportedModels = [
        'gpt-4', 'gpt-4-0613', 'gpt-4-32k', 'gpt-4-0314', 'gpt-4-32k-0314',
        'gpt-3.5-turbo', 'gpt-3.5-turbo-16k', 'gpt-3.5-turbo-0613', 'gpt-3.5-turbo-16k-0613', 'gpt-3.5-turbo-0301',
        'text-davinci-003', 'text-davinci-002', 'code-davinci-002',
        'gpt-3', 'text-curie-001', 'text-babbage-001', 'text-ada-001',
        'davinci', 'curie', 'babbage', 'ada', 'babbage-002', 'davinci-002'
    ];

    if (!supportedModels.includes(model)) {
        return res.status(400).json({ error: 'Unsupported model specified' });
    }

    try {
        // Make a GET request to the external API
        const apiUrl = 'https://openai-v01.onrender.com/chat';
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
