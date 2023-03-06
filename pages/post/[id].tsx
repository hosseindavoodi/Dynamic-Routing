import { useRouter } from 'next/router';
import { Arr } from '..';


const Post = () => {
  const router = useRouter();
  const name = router.query.id
  const item = Arr.find(item => item.name === name);

  return (
    <div>
    <h2>{item?.text}</h2>
  </div>
  );
}

export default Post;
