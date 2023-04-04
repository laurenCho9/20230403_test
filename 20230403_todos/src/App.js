import { createGlobalStyle } from "styled-components";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <GlobalStyle />
      <Todos />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  * {
    margin:0; 
    padding:0;
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
  }
  ul{
    list-style:none;
  }
  body{
    display:flex;
    justify-content:center;
    align-items:center;

    height:100vh;
    font-size:12px;
    font-weight:bold;
    background-color:#fff;    
    cursor: default;
    user-select: none;
  }
  button{
    border:none;
    padding:5px 10px;
    border-radius:4px;
    background-color: #fff;
    color:#fff;
    font-weight: bold;
    cursor: pointer;
  }
  `;

export default App;
