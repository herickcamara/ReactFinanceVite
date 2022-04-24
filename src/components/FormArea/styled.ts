import styled from "styled-components";



export const Container = styled.div`
    background-color:#fff;
    border-radius:10px;
    padding:20px;
    margin-top:15px;
    box-shadow:0px 0px 5px #ccc;
    display:flex;
    align-items:center;
    flex-wrap:wrap;

`; 


export const InputField = styled.label`
flex:1;
margin:10px;
padding:5px;
`;

export const InputTitle = styled.div`
margin-bottom:5px;
`
export const Input = styled.input`
    width:100%;
    padding:5px;
    outline:none;
    border:none;
    box-shadow:0px 0px 5px #ccc;
    font-size:18px;
    color:#888;
    border-radius:10px
`
export const InputSelct =styled.select`
width:100%;
padding:5px;
outline:none;
text-align:center;
font-size:18px;
border:none;
box-shadow:0px 0px 5px #ccc;
`;

export const FieldButtons = styled.div`
width:100%;
padding:10px;
margin-top:20px;
display:flex;
align-items:center;
justify-content:space-between;

`

export const Button = styled.button<{clear?:boolean}>`
padding:10px;
border-radius:5px;
flex:1;
max-width:150px;
background-color:${props=>props.clear?'rgba(200,0,0,.8)':'rgba(0,200,0,.7)'};
outline:none;
border:none;
color:#f5f5f5;
font-size:15px;
box-shadow:0px 0px 5px ${props=>props.clear?'rgba(200,0,0,.7)':'green'};
font-weight:bold;

:hover{
    transition:3ms;
    background-color:${props=>props.clear?'red':'green'};

}

`
