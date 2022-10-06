import useFetchData from './Hooks42/useFetchData';

const App = () => { 
const users = useFetchData('https://jsonplaceholder.typicode.com/users', 
  (data)=> data.map((item)=>({name: item.name, id:item.id, username:item.username}))); //akahne chaile amra custom property add korte paro, and oi data gulo sara onno data memoryte store hobe na
// console.log(users.data)
const posts = useFetchData('https://jsonplaceholder.typicode.com/posts', (data)=>data.slice(0, 10))
const comments = useFetchData('https://jsonplaceholder.typicode.com/comments', (data)=>data.slice(0, 10))


  return (
    <div style={{width:'1000px', display:'flex', gap:'1rem', justifyContent:'space-between'}}>
       <div>
         <h1>Users</h1> <hr />
         {users.loading && <h3>Loading...</h3>}
         {users.error && <h3>{error}</h3> }
         {users.data?.map((user)=>(
          <li key={user.id}>{user.username}</li>
         ))}
       </div>
       <div>
         <h1>Posts</h1> <hr />
         {posts.loading && <h3>Loading...</h3>}
         {posts.error && <h3>{postError}</h3> }
         {posts.data?.map((post)=>(
          <li key={post.id}>{post.title}</li>
         ))}
       </div>
       <div>
         <h1>Comments</h1> <hr />
         {comments.loading && <h3>Loading...</h3>}
         {comments.error && <h3>{postError}</h3> }
         {comments.data?.map((comment)=>(
          <li key={comment.id}>{comment.name}</li>
         ))}
       </div>
    </div>
  )
}

export default App