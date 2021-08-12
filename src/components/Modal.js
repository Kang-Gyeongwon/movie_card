import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { contents } from './utilities/contents'

import "./Modal.css"

const ModalBack = styled.div`
  display: ${props => props.isDisplay ? "block" : "none"};
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.4);
`
const ModalBox = styled.div`
  width: 55%; height: 70%;
  position: absolute;
  top: 16.5%; left: 22.5%;
  background-color: black;
  display: flex; justify-content: center; 
  align-items: center;
  @media all and (max-width: 800px){
    width: 59%;
  }
  @media all and (max-width: 450px){
    width: 76.3%; height: 76%;
    top: 14.2%; left: 12.5%;
  }
`
const CloseBtn = styled.button`
  width: 25px; height: 25px;
  padding: 0; border: none;
  position: absolute;
  top: 2%; left: 95.5%;
  background-color: transparent;
  font-size: 20px; color: #D3D3D3;
  @media all and (max-width: 800px){
    left: 93%;
  }
  @media all and (max-width: 800px){
    left: 91%;
  }
`
const Text = styled.p`
  @font-face {
    font-family: 'MaruBuri-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'MaruBuri-Regular';
  color: #D3D3D3;
`

const Modal = (props) => {

  const video = useRef()

  useEffect(() => {
    console.log(props)
    let youtubeVideo;
    contents.forEach(content => {
      if (content.title == props.currentMovie) {
        youtubeVideo = content.youtubeVideo
      }
    })
    const defaultHTML = video.current.innerHTML
    video.current.innerHTML = defaultHTML + youtubeVideo
  }, [])
  return <ModalBack isDisplay={props.isDisplay}>
    <ModalBox ref={video}>
      <Link to="/">
        <CloseBtn onClick={() => props.updateMovie("")}>X</CloseBtn>
      </Link>
      {props.content.map((con, idx) => {
        if (con.title == props.currentMovie) {
          return <div
            style={{ width: "95%", position: "absolute", top: "58.5%", left: "3%" }} key={idx}>
            <Text style={{ fontSize: 20 }}>{con.title}</Text>
            <Text style={{ fontSize: 15 }}>{con.runningTime}</Text>
            <Text style={{ fontSize: 14 }}>{`감독: ${con.director}`}</Text>
            <Text style={{ fontSize: 14 }}>{`출연: ${con.actors}`}</Text>
            <Text style={{ fontSize: 14 }}>{`개요: ${con.character}`}</Text>
          </div>
        }
      })}
    </ModalBox>
  </ModalBack>
}

export default Modal;