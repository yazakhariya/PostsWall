import * as S from './info-page.style'
import { PostView } from 'src/entities/post/enums'
import Post from 'src/entities/post/post'

export default function InfoPage() {
  return (
    <S.MainWrapper>
      <Post postView={PostView.Page} />
    </S.MainWrapper>
  )
}
