import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Container = styled.div`
  height: 0px;
  overflow: hidden;
  animation: .5s uncollapse;
  animation-delay: 2s;
  animation-fill-mode: forwards;

  @keyframes uncollapse {
    0% {
      height: 0px;
    }
    100% {
      height: 644px;
    }
  }
`;

export const Content = styled(Grid)`
  flex-direction: column;

  & > * {
    @keyframes fadeInRight {
      0% {
        opacity: 0;
        transform: translateX(-100px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    transform: translateX(-100px);
    opacity: 0;
    animation: .5s fadeInRight;
    animation-fill-mode: forwards;

    height: 76px;
    box-sizing: content-box !important;
    
    &:nth-child(1) {
      animation-delay: 1.5s;
    }
    &:nth-child(2) {
      animation-delay: 2s;
    }
    &:nth-child(3) {
      animation-delay: 2.5s;
    }
    &:nth-child(4) {
      animation-delay: 3s;
    }
    &:nth-child(5) {
      animation-delay: 3.5s;
    }
    &:nth-child(6) {
      animation-delay: 4s;
    }
    &:nth-child(7) {
      animation-delay: 4.5s;
    }
  }
`;
