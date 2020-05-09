import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 *{
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
 }

 h1{
  font-size: 30px;
 }

 p{
  font-size: 16px;
 }
 a {
  color: 'hsl(258deg, 100%, 50%',
 }
`;

export default GlobalStyles;