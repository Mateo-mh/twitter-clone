import PostCard from './post-card'
import { Post } from '@/app/types/posts' // Asegúrate de importar el tipo Post desde el archivo correcto

export function PostLists ({ posts }: { posts: Post[] | null }) {
  return (
    <>
    {
        posts?.map(post => {
          const {
            id,
            user,
            content,
            created_at
          } = post

          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl
          } = user

          return (
            <PostCard
              avatarUrl={avatarUrl}
              content={content}
              key={id}
              userFullName={userFullName}
              userName={userName}
            />
          )
        })
      }
    </>
  )
}
