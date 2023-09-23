import { PostView } from 'src/entities/post/enums';
import * as S from './main.style'
import Post from "src/entities/post/post";

export default function Main() {

  return (
    <S.MainWrapper>
      <Post postView={PostView.Post} />
    </S.MainWrapper>
  )
}
