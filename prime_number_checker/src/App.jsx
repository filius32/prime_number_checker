import { useState } from 'react'
import { checkPrime } from './services/primeService';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');

  const handleCheck = async () => {
    setError('');
    setResult(null);
    setLoading(true);

    if(!inputValue){
      setError('Please enter a number');
      return;
    }
    setLoading(true);

    try{
      const data = await checkPrime(inputValue);
      setResult(data);
    } catch (err){
      console.error("Full Error Details: ", err);
      setError(err.message || "Something went ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app_container">
      <div className="checker_card">
        <h1>Prime Number Checker</h1>

        <input
          type="number"
          placeholder="Enter a number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          disabled={loading}
        />

        <button onClick={handleCheck} disabled={loading}>
          {loading ? 'Checking..' : 'Check Number'}
        </button>

        {/* Conditional rendering for error */}
        {error && <div className='message_error'>{error}</div>}

        {/* Conditional rendering for error */}
        {result && (
          <div className={`message_result  ${result.isPrime ? 'success' : 'fail'}`}>
            {result.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
