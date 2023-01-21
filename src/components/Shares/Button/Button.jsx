import styled from 'styled-components';
import { color } from '@/styles/variables';

const { textColor} = color;

const Button = styled.button`
    background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);
    flex: 1 1 auto;
    padding: 20px 40px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: ${textColor};
    text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    border-radius: 10px;
    margin:0px auto 0px auto;
    cursor: pointer;
    &:hover {
        background-position: right center; 
    }
`

export default Button;