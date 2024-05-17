import PostCard from "./post-card"

export function PostLists({posts}){
    return(
        <>
            {
        posts?.map(post => {
          const {
            id,
            user,
            content
          } = post
           
          const {
            user_name: userName,
            name: userFullName,
            avatar_url: userAvatarUrl,
          } = user

          return (
          <PostCard 
            avatarUrl= {userAvatarUrl}
            content={content}
            key={id} 
            userName={userName}
            userFullName= {userFullName}
             />
            )
        })
      }
        </>
    )
}