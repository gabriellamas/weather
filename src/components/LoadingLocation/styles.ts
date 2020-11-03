import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #121212;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.out {
    animation: .5s fadeOut;
    animation-fill-mode: forwards;

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        display: none;
        pointer-events: none;
      }
    }
  }
`