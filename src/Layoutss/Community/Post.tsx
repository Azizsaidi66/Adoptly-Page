export const Posts = () => {
  return(
    <div className="post">
      <textarea name="story" id="pl" placeholder="share your story ..." maxLength={500}></textarea>
      <br />
      <button>Post</button>
    </div>
  )
}