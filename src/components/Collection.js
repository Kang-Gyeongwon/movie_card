import { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Modal from './Modal'
import { contents } from './utilities/contents'

const Items = styled.div`
  width: 80%;
  display: flex; flex-wrap: wrap;
  margin: 0 auto;
`

const Collection = () => {

  const [ currentMovie, updateMovie ]= useState("")

  return <div>
      <Items>
        {contents.map((content, idx) => {
          return <Card key={idx} content={content} updateMovie={updateMovie} />
        })}
      </Items>
      {currentMovie !== "" && <Modal currentMovie={currentMovie} isDisplay={currentMovie !== ""} updateMovie={updateMovie} content={contents} />}
      {/* <Modal currentMovie={currentMovie} isDisplay={currentMovie !== ""} /> */}
      {/* <div isDisplay={currentMovie !== ""}>
       
      </div> */}
  </div>
}

export default Collection