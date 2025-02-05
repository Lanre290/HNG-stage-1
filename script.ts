import { Request, Response } from "express";

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Function to check if a number is prime
const isPrime = (number: number) => {
  if (number < 2) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

// Function to check if a number is perfect
const isPerfect = (number: number) => {
  let sum = 1;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      sum += i + (i !== number / i ? number / i : 0);
    }
  }
  return sum === number && number !== 1;
};

// Function to check if a number is an Armstrong number
const isArmstrong = (number: number) => {
  const digits = number.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
  return sum === number;
};

app.get("/api/classify-number", async (req: Request, res: Response) => {
    const { number } = req.query;
    const num = Number(number);
    
    if (isNaN(num) || !Number.isInteger(num)) {
      return res.status(400).json({ number, error: "Only integers are allowed" });
    }
  
    const properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");
  
    try {
      const funFactRes = await axios.get(`http://numbersapi.com/${num}`);
      res.json({
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: num
          .toString()
          .split("")
          .reduce((acc, d) => acc + parseInt(d), 0),
        fun_fact: funFactRes.data,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch fun fact" });
    }
  });
  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
