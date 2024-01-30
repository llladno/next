import Link from "next/link";

async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await res.json();
    return result;
}

export default async function Home() {
const posts = await fetchData()

    return (
        <div>
            <h1>Главная страница</h1>

            {posts.map( (el:any) => (
                <div key={el.id} className='post'>
                    <h3>{el.title}</h3>
                    <p>{el.body}</p>
                    <Link href={`/posts/${el.id}`}>Пост</Link>
                </div>
            ))}
        </div>
    );
}
