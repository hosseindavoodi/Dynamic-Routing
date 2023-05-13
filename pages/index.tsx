import Link from "next/link";

export const Arr = [
  {id: 1, "name": 'test1', "text": "add some text for test 1"},
  {id: 2, "name": 'test2', "text": "add some text for test 2"},
  {id: 3, "name": 'test3', "text": "add some text for test 3"},
  {id: 4, "name": 'test4', "text": "add some text for test 4"}
]

export default function Index() {
  return (
    <>
    {
      Arr.map(item=>(
        <>
        <Link href="/post/[id]" as={`/post/${item.name}`}>
        {item.name}
      </Link> <br />
      </>
      ))
    }
     
    </>
  );
}
