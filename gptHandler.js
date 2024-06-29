const axios = require('axios');
const { getSystemPrompt } = require('./systemPrompt');

const supportedModels = [
  'gpt-4', 'gpt-4-0613', 'gpt-4-32k', 'gpt-4-0314', 'gpt-4-32k-0314',
  'gpt-3.5-turbo', 'gpt-3.5-turbo-16k', 'gpt-3.5-turbo-0613', 'gpt-3.5-turbo-16k-0613', 'gpt-3.5-turbo-0301',
  'text-davinci-003', 'text-davinci-002', 'code-davinci-002',
  'gpt-3', 'text-curie-001', 'text-babbage-001', 'text-ada-001',
  'davinci', 'curie', 'babbage', 'ada', 'babbage-002', 'davinci-002'
];

const fetchGPTResponse = async (prompt, model, systemPrompt) => {
  const apiUrl = 'https://openai-v01.onrender.com/chat';
  const params = { prompt, model, system_prompt: systemPrompt };

  try {
    const response = await axios.get(apiUrl, { params });
    return response.data.answer;
  } catch (error) {
    console.error('Error fetching answer:', error);
    throw new Error('Failed to fetch answer');
  }
};

module.exports = async (req, res) => {
  const { prompt, model } = req.query;
  const systemPrompt = getSystemPrompt();

  if (!prompt || !model) {
    return res.status(400).json({ error: 'Prompt and model parameters are required' });
  }

  if (!supportedModels.includes(model)) {
    return res.status(400).json({ error: 'Unsupported model specified' });
  }

  try {
    const answer = await fetchGPTResponse(prompt, model, systemPrompt);
    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
