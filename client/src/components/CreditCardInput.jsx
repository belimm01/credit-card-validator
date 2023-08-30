import React, {useState} from 'react';
import styled from 'styled-components';
import {validateCreditCard} from '../api/CreditCardApi.js';
import {ClipLoader} from 'react-spinners';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  text-align: center;
`;

const Card = styled.div`
  background: #f0325a;
  width: 300px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  color: white;
  font-size: 16px;
  text-align: left;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  background: transparent;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid white;
  cursor: pointer;
  font-size: 16px;
`;

const Message = styled.div`
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  color: ${(props) => (props.isError ? 'red' : 'green')};
`;

function CreditCardInput() {
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setError] = useState(false);

    const handleInputChange = (e) => {
        setCreditCardNumber(e.target.value);
    };

    const handleSubmit = async () => {
        if (creditCardNumber) {
            setLoading(true);
            const response = await validateCreditCard(creditCardNumber);
            setMessage(response?.message);
            setError(!response.isValid);
            setLoading(false);
        } else {
            setError(true);
            setMessage("Credit card number couldn't be empty");
        }
    };

    return (
        <Container>
            {isLoading && (
                <Overlay>
                    <ClipLoader color="#ffffff" loading={isLoading} size={20}/>
                </Overlay>
            )}
            <CardContainer>
                <Card>
                    <Title>Enter Your Credit Card Number</Title>
                    <InputContainer>
                        <Input
                            type="text"
                            id="creditCardNumber"
                            name="creditCardNumber"
                            placeholder="Enter your credit card number"
                            value={creditCardNumber}
                            onChange={handleInputChange}
                        />
                    </InputContainer>
                    <ButtonContainer>
                        <Button onClick={handleSubmit} type="submit">
                            Submit
                        </Button>
                    </ButtonContainer>
                </Card>
                {message && <Message isError={isError}>{message}</Message>}
            </CardContainer>
        </Container>
    );
}

export default CreditCardInput;
