import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Collection from './components/Collection'
import { Container, Title, TitleText } from './components/custom-styled'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <BrowserRouter>
      <Container>
        <Title>
          <TitleText>movie</TitleText>
        </Title>
        
        <Collection />
      </Container>
    </BrowserRouter>
  }
}

export default App;