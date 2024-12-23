import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Interact = () => {
  return(
    <div className="interact">
      <button className='like-btn'><span className='heart'><FontAwesomeIcon icon={faHeart} /></span> Like </button>
      <button><FontAwesomeIcon icon={faComment} /> Comment </button>
      <button><FontAwesomeIcon icon={faShare} /> Share </button>
    </div>
  )
}