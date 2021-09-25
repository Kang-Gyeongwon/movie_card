import { BrowserRouter } from 'react-router-dom'
import Collection from './components/Collection'
import { Container, Title, TitleText } from './components/custom-styled'

const App = () => {
  return <BrowserRouter>
    <Container>
      <Title>
        <TitleText>movie</TitleText>
      </Title>
      <Collection />
    </Container>
  </BrowserRouter>
}

export default App;