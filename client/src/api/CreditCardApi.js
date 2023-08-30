import Api from './config/Api.js'

const validateCreditCard = async (creditCardNumber) => {
    try {
        const {data} =  await Api.get(`/api/validate/${creditCardNumber}`);
        return data.isValid ? {message: 'Your credit card is valid', isValid: true} : {message: 'Your credit card is invalid', isValid: false};
    } catch (error) {
        // Handle network or other errors
        if (error.response?.status === 400 && error.response?.data?.error) {
            // Invalid credit card number
            return {message: error.response.data.error, isValid: false}
        } else {
            // Handle unexpected responses
            console.error('An error occurred:', error);
        }
    }
}

export {validateCreditCard}
