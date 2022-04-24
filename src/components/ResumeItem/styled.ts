import styled from "styled-components";

export const Contaoner = styled.div`
flex:1;
`;
export const Title = styled.div`
text-align:center;
font-weight:bold;
color:#888;
margin-bottom:5px;
`;
export const Info = styled.div<{color?:string}>`
text-align:center;
font-weight:bold;
color:${props=>props.color ?? '#000'};
`;