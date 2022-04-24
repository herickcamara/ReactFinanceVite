import styled from "styled-components";



export const TableTr = styled.tr``;

export const TableTd = styled.td`
    padding:10px 0;
`;
export const Category = styled.div<{bg:string}>`
display: inline-block;
padding:5px 10px;
border-radius:5px;
color:#fff;
background-color:${props=>props.bg?props.bg:''};

`;

export const Value = styled.div<{color:string}>`
color:${props=>props.color}
`