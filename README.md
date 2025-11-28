# Prime Number Checker
A simple prime number checker website built using React.js and Node.js and deployed on Vercel.

## Demo Link
https://prime-number-checker-mauve.vercel.app/

## Problem Solving Approach & Key Features
This project implements a Sevice-Oriented Architecture. 
It seperates the user interface (primary_number_checker) from the business logic (api), ensuring scalability and maintainability.

### Key Features
* **Optimized Algorithm**
* **Detailed Input Validation:**
    * Prevents  *Decimal* inputs (e.g: 4.5)
    * Handles *Negative* numbers
    * Cleans non-numeric inputs
* **Responsive UI:** Mobile-first design that adapts to all screen sizes.
* **Edge Case Handling**: Specific logic for numbers, 0, 1, 2

## Technology Used
* **Frontend:** React.js (Vite)
* **Backend:** Node.js + Express
* **API**: RESTful JSON
* **Deployment**: Vercel

## Project Structure
The project follows *Monorepo* structure, keeping the frontend and backend decoupled but managed in a single repository
