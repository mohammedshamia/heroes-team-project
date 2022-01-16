import styled from 'styled-components' 
export const StepperContainer = styled.div`
   width: 600px;
  height: 600px;
  position: relative;
  overflow: hidden;
  display: inline-block;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
 `
export const StepWrapper = styled.div`
   width: 600px;
  height: 100%;
 `
export const StepperSelector = styled.div`
   position: absolute;
  top: 0;
  height: 100%;
  display: inline-flex;
  /* Animate each step movement */
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0s;
 
 `
export const StepperProgress = styled.div`
   position: absolute;
  top: 15px;
  width: 100%;
  z-index: 9;
 `
 export const StepperProgressWrapper = styled.div`
   width: 90%;
  position: relative;
  display: flex;
  margin: auto;
  justify-content: space-between;
 
 `
export const StepperProgressBar = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  top: 13px;
  z-index: -1;
  background: #FCDD06;
  transition: width 1s cubic-bezier(0.23, 1, 0.32, 1) 0s;
 `