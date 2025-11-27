const API_BASE_URL = import.meta.env.PROD
    ? ''
    : 'http://localhost:3001';


export const checkPrime = async (number) => {
    
    try{
        const response = await fetch(`${API_BASE_URL}/check_prime/${number}`);
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.message || 'Server Error');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};