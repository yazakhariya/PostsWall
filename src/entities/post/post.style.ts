import { styled } from 'styled-components'
import { PostView } from './enums'
import { postView } from './consts'

type PropsType = {
  $postView: PostView
}

export const PostWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 25px;
`

export const Img = styled.img`
  width: 100px;
`

export const Card = styled.div<PropsType>`
  padding: 20px;
  border-radius: 12px;
  background-color: #feb79c;
  width: ${({ $postView }) => postView[$postView].width};
  && > button {
    margin-top: 15px;
  }
`
