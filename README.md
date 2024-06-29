Creating a full `README.md` tutorial involves providing comprehensive documentation for your API, including features, usage instructions, model details, file structure, and more. Below is a template to get you started:

---

# ChatGPT API Documentation

Welcome to the ChatGPT API documentation! This API allows you to interact with OpenAI's ChatGPT models for generating text-based responses. Whether you're looking to integrate conversational AI into your application or explore natural language understanding, ChatGPT API provides a versatile toolset.

## Features

- **Text Generation**: Generate natural language responses based on given prompts.
- **Multiple Models**: Choose from various ChatGPT models based on your application's needs.
- **System Prompt**: Customize AI behavior with system prompts tailored to your use case.

## Models

The following models are supported by the ChatGPT API:

- **gpt-4**
- **gpt-4-0613**
- **gpt-4-32k**
- **gpt-4-0314**
- **gpt-4-32k-0314**
- **gpt-3.5-turbo**
- **gpt-3.5-turbo-16k**
- **gpt-3.5-turbo-0613**
- **gpt-3.5-turbo-16k-0613**
- **gpt-3.5-turbo-0301**
- **text-davinci-003**
- **text-davinci-002**
- **code-davinci-002**
- **gpt-3**
- **text-curie-001**
- **text-babbage-001**
- **text-ada-001**
- **davinci**
- **curie**
- **babbage**
- **ada**
- **babbage-002**
- **davinci-002**

## How to Use

### Installation

Clone the repository:

```bash
git clone https://github.com/your-repo/chatgpt-api.git
cd chatgpt-api
```

Install dependencies:

```bash
npm install
```

### Running the Server

Start the server:

```bash
node app.js
```

The server will start running on `http://localhost:3000` by default.

### API Endpoint

#### `/api/gpt`

- **Method**: GET
- **Parameters**:
  - `prompt`: The text prompt to generate a response.
  - `model`: The desired ChatGPT model to use for generating responses.
  - `systemPrompt` (optional): Custom system prompt to modify AI behavior.

#### Example Usage

```bash
curl -X GET "http://localhost:3000/api/gpt?prompt=How%20are%20you?&model=gpt-3.5-turbo"
```

### System Prompt

To customize AI behavior, edit the `systemPrompt.js` file:

```javascript
// systemPrompt.js

const getSystemPrompt = () => {
  return "Your custom system prompt here";
};

module.exports = { getSystemPrompt };
```

## File Features Detail

### `app.js`

Main application file that initializes the Express server and sets up API routes.

### `router.js`

Defines the API routes using Express Router and links them to request handlers.

### `gptHandler.js`

Handles GET requests to `/api/gpt`, interacts with the ChatGPT models using Axios, and processes responses.

### `systemPrompt.js`

Defines the `getSystemPrompt` function to customize AI behavior by providing a system prompt.

## Contributing

We welcome contributions to improve this API. Feel free to fork the repository, make improvements, and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

