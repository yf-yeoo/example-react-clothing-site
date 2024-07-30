import styled from "styled-components";
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles.jsx';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    overflow: hidden;

    ${BaseButton}, 
    ${GoogleSignInButton}, 
    ${InvertedButton}  {
      margin-top: auto;
      font-size: 1vw;
    }
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    display: flex;
    padding-right: 17px;
    flex-direction: column;
    overflow-y: scroll;
`