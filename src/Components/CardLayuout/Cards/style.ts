import styled from 'styled-components'
export const Container = styled.div`
margin:50px;
display:flex; 
justify-content: space-between;
border: 1px solid #FCDD06;
border-radius: 16px;
overflow: hidden;
background-color:#F7F8FC;
  @media (max-width: 768px) {
    display:flex;
    flex-direction: column;
    align-items:center;
    gap:5px;
  }
`