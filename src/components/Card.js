import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Item = styled.div`
  width: 22.6%; height: 425.5px;
  margin: 3% auto;
  @media all and (max-width: 800px){
    width: 25.6%; height: 250px;
  }
  @media all and (max-width: 450px){
    width: 25.6%; height: 175px;
  }
`
const Image = styled.div`
  width: 100%; height: 100%;
  background-image: url(${props => props.imagePath});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &:hover{
    transform: scaleX(1.2);
  }
`

class Card extends React.Component {
  render() {
    const { content } = this.props
    return <Item>
      <Link to={content.path}>
        <Image imagePath={content.imagePath} 
        onClick={() => this.props.updateMovie(content.title)} />
      </Link>
    </Item>
  }
}

export default Card;