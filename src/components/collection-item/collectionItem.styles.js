import styled from "styled-components";
import Button from "../button/button";


export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover{
    .image{
      opacity: .8;
    }
    button{
      opacity: .85;
      display: flex;
    }
  }
  @media screen and (max-width:800px){
    width: 40vw;
      &:hover{
        .image{
            opacity: unset;
        }
        button{
          opacity: unset;
        }
      }
  }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`}
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    @media screen and (max-width:800px){
      font-size: 12px;
    }
`;

export const NameContainer = styled.span`
    width:70%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 19%;
`;

export const AddButton = styled(Button)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top:225px;
    display: none;
    @media screen and (max-width:800px){
        display:block;
        opacity:.9;
        min-width:unset;
        padding:0 10px;
    }    
`;