import styled from 'styled-components'

export const Container = styled.div`
  width: 100%; min-height: 100%;
  background-color: #6C7B8B;
  margin: 0; padding: 0; box-sizing: border-box;
`
export const Title = styled.div`
  width: 100%; heigth: 40vh;
  display: flex; justify-content: center; align-items: center;
`
export const TitleText = styled.p`
  @font-face {
    font-family: 'TTTogether';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/TTTogetherA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'TTTogether';
  font-size: 35px; color: #EAEDED;
  margin-top: 15%; 
`