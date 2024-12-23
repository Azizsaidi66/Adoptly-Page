import '../AllStyles/Community.css'
import { Feeds } from '../Layoutss/Community/feeds'
import { Posts } from '../Layoutss/Community/Post'
import { Trends } from '../Layoutss/Community/Trends'

export const Community = () =>{

  const posts = 
  [
    {name : 'Amir the deer', date : '10hours ago', text : '!'},
    {name : 'Ala najar', date : '5hours ago', text : 'hhhhhhhhhhhhhhhhhhhhhhh'},
    {name : 'Jawher', date : '1 week ago', text : 'pskch'}
  ];

  return (
    <>
    <div className="components">
      <div className="posts-section">
        <Posts />
        {
          posts.map(post => (
            <Feeds post={post}/>
          ))
        }
      </div>
      <div className="trend-section">
        <Trends />
      </div>
    </div>
    </>
  )
}