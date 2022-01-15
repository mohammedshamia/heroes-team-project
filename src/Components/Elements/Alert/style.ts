import styled from "styled-components";

const getAlertBg= (type?: string)=> {
  switch(type){
    case 'default': return 'rgba(162, 162, 162, 0.38)';
    case 'success': return 'rgba(94, 255, 94, 0.678)';
    case 'warning': return ' rgb(247,178,23, 0.8)';
    case 'error': return 'rgba(205, 0, 0, 0.568)';
    default: return 'rgba(162, 162, 162, 0.38)';
  }
}

interface IProps{
  type?: string;
  position?: string
}
export const Alert= styled('div')<IProps>`
  position: ${({position})=> position ==='snackBar' && 'fixed' };
  right: ${({position})=> position ==='snackBar' && '20px' };
  bottom:  ${({position})=> position ==='snackBar' && '20px' };
  background-color: ${ ({type})=> getAlertBg(type)};

  padding: 10px;
  border-radius: 5px;
  transition: all 5s ;

  max-width: ${({position})=> position ==='snackBar' && '40%' };
  text-align: ${({position})=> position ==='snackBar' && 'center' };;
`