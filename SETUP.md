# Setup Guide

## Getting Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

## Setting Up Environment Variables

1. Create a `.env` file in the root directory of your project
2. Add your API key to the file:

```
GEMINI_API_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with the API key you copied from Google AI Studio.

## Running the Application

After setting up your API key, you can run the application:

```bash
npm run dev
```

The application should now be able to generate lesson content using the Gemini API.

## Troubleshooting

If you're still seeing the error message "Sorry, we couldn't generate the lesson content at this moment. Please try again later.", check:

1. Your `.env` file exists and contains the correct API key
2. The API key is valid and has the necessary permissions
3. You have an active internet connection
4. The Gemini API service is available
