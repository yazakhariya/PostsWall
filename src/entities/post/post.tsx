import { useGetPostsQuery } from 'src/app/providers/with-redux/with-redux'
import * as React from 'react'
import loader from 'src/shared/icons/Spinner.svg'
import * as S from './post.style'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Button } from 'src/shared/ui/Button/Button.style'
import { PostView } from './enums'
import { ElementType } from 'src/app/providers/with-redux/types'

type Props = {
  postView: PostView
}

export default function Post({ postView }: Props) {
  const [limit, setLimit] = React.useState<number>(1)
  const { data, isLoading } = useGetPostsQuery()
  const [list, setList] = React.useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    setList(data?.slice(0, 10))
  }, [data])

  React.useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return
      setList(list.concat(data?.slice(limit * 10, limit * 10 + 10)))
      setLimit(limit + 1)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [data, limit, list])

  const PostInfoPage = (
    <S.PostWrapper>
      {data
        ?.filter((el: { id: number }) => el.id === Number(id))
        ?.map((el: ElementType, i: number) => {
          return (
            <S.Card $postView={postView} key={i}>
              <b>{el.id}</b>
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
      ) : list ? (
        list.map((el: ElementType, i: number) => {
          return (
            <S.Card $postView={postView} key={i}>
              <b>{el.id}</b>
              {' - '}
              <b>{el.title}</b>
              <br />
              <span>{el.body?.slice(0, 135)}</span>{' '}
              {el.body?.length > 135 ? (
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
