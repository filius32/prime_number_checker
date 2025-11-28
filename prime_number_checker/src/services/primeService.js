const API_BASE_URL = import.meta.env.PROD
    ? '/api'
    : 'http://localhost:3001/api';


export const checkPrime = async (number) => {
    try{
        const response = await fetch(`${API_BASE_URL}/check-prime/${number}`);

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || 'Server Error');
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch Error: ", error);
        throw error;
    }
};