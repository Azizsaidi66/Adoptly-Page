import { Content } from "./FeddsCp/content"
import { Head } from "./FeddsCp/head"
import { Interact } from "./FeddsCp/interact"

export const Feeds = ({post}) =>{
  return(
    <div className="feed">
      <Head name={post.name} date={post.date}/>
      <Content content={post.text}/>
      <hr />
      <Interact />
    </div>
  )
}