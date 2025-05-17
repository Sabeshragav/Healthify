# Healthify Backend

This is the backend server for the Healthify healthcare application.

## Getting Started

1. Install dependencies: `npm install`
2. Configure environment variables (see below)
3. Run the development server: `npm run dev`

## Environment Setup

Create a `.env` file in this directory with the following configuration:

```env
# Environment Configuration for Healthify Backend

# Application Environment
NODE_ENV=development

# Server Configuration
PORT=3001

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/Healthify

# JWT Secret for Authentication
JWT_SECRET="your_secure_jwt_secret_here"

# AI Engine Configuration
GEMINI_API_KEY1=your_first_gemini_api_key
GEMINI_API_KEY2=your_second_gemini_api_key
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest
MODEL_NAME=gemini-1.5-flash

# Email Configuration (for notifications)
EMAIL=your_email@gmail.com
PASS=your_app_password
```

## API Key Management

The application uses Google's Gemini API for AI features. You need to configure two API keys for redundancy:

1. Get your API keys from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add them to your `.env` file as `GEMINI_API_KEY1` and `GEMINI_API_KEY2`
3. Set `MODEL_NAME` to the Gemini model you want to use:
   - `gemini-1.5-flash` (recommended for lower quota usage)
   - `gemini-1.5-pro` (higher quality but higher quota usage)

### Handling Rate Limits

The free tier of Gemini API has certain rate limits:

- 60 requests per minute
- 5 MB input tokens per minute
- 60 requests per day per model

If you encounter rate limit errors:

1. Wait a few minutes before trying again
2. Switch to `gemini-1.5-flash` model which has lower token consumption
3. Consider upgrading to a paid tier if needed

## Testing API Connection

Run the restart script to test your API keys:

```bash
node restart.js
```

This will verify both API keys and start the server if at least one is working.

## Running in Development

```bash
npm run dev
```

## Running in Production

```bash
npm start
```
