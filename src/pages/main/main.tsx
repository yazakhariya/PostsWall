import { useGetPostsQuery } from 'src/app/providers/with-redux/with-redux'
import PostCard from 'src/widgets/post-card/post-card'

export default function Main() {
  const { data } = useGetPostsQuery()
  return (
    <div>
      {data
        ? data.map((el, i: number) => {
            return <span key={i}>{el.id}</span>
          })
        : null}
        <PostCard />
    </div>
  )
}
