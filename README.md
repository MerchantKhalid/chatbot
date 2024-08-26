# AI Chatbot

This is an AI chatbot developed using Next.js and TypeScript. The chatbot allows users to search for information, and it will respond with relevant details. The chatbot is powered by Upstash and Qstash for efficient data handling and processing.

## Features

- **Next.js**: A React framework that enables server-side rendering and generating static websites.
- **TypeScript**: Used for static type checking and better code quality.
- **Environment Variables**: Secure storage of API keys and other sensitive data.
- **Upstash**: Used for vector search and Redis REST operations.
- **Qstash**: Used for secure and scalable messaging.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MerchantKhalid/chatbot
   cd ai-chatbot
   ```

### Install dependencies:

- npm install

### Set up environment variables:

Create a .env.local file in the root of your project and add the following variables:

- UPSTASH_VECTOR_REST_URL=
- UPSTASH_VECTOR_REST_TOKEN=
- QSTASH_TOKEN=
- UPSTASH_REDIS_REST_URL=
- UPSTASH_REDIS_REST_TOKEN=

### Run the development server:

- npm run dev

### Usage

To search for information using the chatbot, append the URL you want to search at the end of your local host URL. For example, to search for information on MediaWiki:

- [http://localhost:3000/https://en.wikipedia.org/wiki/MediaWiki](http://localhost:3000/https://en.wikipedia.org/wiki/MediaWiki)

### Deployment

- Deploy this Next.js app to any platform that supports Node.js, such as Vercel, Netlify, or Heroku.

### Acknowledgments

- Next.js
- TypeScript
- Upstash
- Qstash
- Redis
