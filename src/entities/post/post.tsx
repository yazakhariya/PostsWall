import { useGetPostsQuery } from 'src/app/providers/with-redux/with-redux'
import loader from 'src/shared/icons/Spinner.svg'
import * as S from './post.style'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Button } from 'src/shared/ui/Button/Button.style'
import { PostView } from './enums'

type Props = {
  postView: PostView
}

export default function Post({ postView }: Props) {
  const { data, isLoading } = useGetPostsQuery()
  const { id } = useParams()
  const navigate = useNavigate()

  const PostInfoPage = (
    <S.PostWrapper>
      {data
        ?.filter((el) => el.id === Number(id))
        .map((el, i: number) => {
          return (
            <S.Card $postView={postView} key={i}>
              <b>{id}</b>
              {' - '}
              <b>{el.title}</b>
              <br />
              <span>{el.body}</span>
              <br />
              <Button onClick={() => navigate('/')} children={'Назад'} />
            </S.Card>
          )
        })}
    </S.PostWrapper>
  )

  const PostPage = (
    <S.PostWrapper>
      {isLoading ? (
        <S.Img src={loader} />
      ) : data ? (
        data.map((el, i: number) => {
          return (
            <S.Card $postView={postView} key={i}>
              <b>{i + 1}</b>
              {' - '}
              <b>{el.title}</b>
              <br />
              <span>{el.body.slice(0, 135)}</span>{' '}
              {el.body.length > 135 ? (
                <>
                  <span>...</span> <br />
                  <Button
                    onClick={() => navigate(`/more/${el.id}`)}
                    children={'Читать дальше'}
                  />
                </>
              ) : null}
            </S.Card>
          )
        })
      ) : null}
    </S.PostWrapper>
  )

  return <>{postView === PostView.Post ? PostPage : PostInfoPage}</>
}
