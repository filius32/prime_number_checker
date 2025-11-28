const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const router = express.Router();

app.use(cors());
app.use(express.json());

router.get('/check-prime/:number', (req, res) => {
        
    const isPrime = (num) => {
        if(num<=1) return false;
        if(num<=2) return true;
        if(num%2===0) return false;

        const limit = Math.sqrt(num);
        for(let i = 3; i<= limit; i+=2){
            if(num%i===0) return false;
        }
        return true;
    };

    app.get('/check-prime/:number', (req, res) => {
        const input = parseFloat(req.params.number);

        if(isNaN(input)){
            return res.status(400).json({
                error: true,
                message: "Invalid input. Please provide a whole number."
            });
        }

        if(!Number.isInteger(input)){
            return res.json({
                input: input,
                isPrime: false,
                message: `${input} is a decimal. Please enter a whole number`
            });
        }

        if(input < 0){
            return res.json({
                input: input,
                isPrime: false,
                message: "Negative numbers cannot be prime"
            })
        }

        const result = isPrime(input);

        res.json({
            input: input,
            isPrime: result,
            timestamp: new Date().toISOString(),
            message: result ? `${input} is a Prime Number!` : `${input} is NOT a Prime Number`
        });
    });
});

app.use('/api', router);
app.get('/', (req, res) => {
    res.send('Backend is alive!');
});


module.exports = app;

if (process.env.NODE_ENV !== 'production'){
    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
