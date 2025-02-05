# Number Classification API

## Overview
This is a simple Express.js API that classifies a given number based on various mathematical properties. It checks whether a number is:

- **Prime**
- **Perfect**
- **Armstrong**
- **Even/Odd**

Additionally, it calculates the sum of the digits and fetches a fun fact about the number from the [Numbers API](http://numbersapi.com/).

## Features
- Check if a number is **prime**
- Check if a number is **perfect**
- Check if a number is an **Armstrong number**
- Determine if a number is **even or odd**
- Calculate the **sum of digits**
- Fetch a **fun fact** about the number

## Technologies Used
- **Node.js** with **Express.js**
- **TypeScript** for type safety
- **Axios** for API requests
- **Cors** for cross-origin requests
- **dotenv** for environment variables

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Lanre290/HNG-stage-1.git
   ```
2. Navigate into the project directory:
   ```sh
   cd number-classification-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and specify the port (optional):
   ```sh
   PORT=3000
   ```
5. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000`.

## API Endpoints
### Classify a Number
**Endpoint:**
```http
GET /api/classify-number?number={number}
```

**Query Parameter:**
- `number` (integer) - The number to classify.

**Response:**
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is the atomic mass of silicon."
}
```

**Error Response:**
```json
{
  "number": "abc",
  "error": "Only integers are allowed"
}
```

## Notes
- The API only accepts **integer** values.
- If the fun fact request fails, an error message will be returned instead.

## License
This project is licensed under the MIT License.


