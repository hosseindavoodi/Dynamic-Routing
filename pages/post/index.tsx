import Link from "next/link"

export const Arr = [
  {id: 1, "name": 'test1', "text": "add some text for test 1"},
  {id: 2, "name": 'test2', "text": "add some text for test 2"},
  {id: 3, "name": 'test3', "text": "add some text for test 3"},
  {id: 4, "name": 'test4', "text": "add some text for test 4"}
]



const PostLink = (props: any) => {
  return (
    <div>
      <Link href="/[id]" as={`/${props.name}`}>
        {props.name}
      </Link>
    </div>
  );
};

export default function Blog() {
  return (
    <>
      <PostLink id="Learn-ReactJS" />
      <PostLink id="Learn-NextJS" />
      <PostLink id="Learn-Javascript" />
    </>
  );
}




