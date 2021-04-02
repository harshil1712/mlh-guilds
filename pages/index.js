import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Guild Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style="background-image: url('https://source.unsplash.com/collection/4964686/');" className="flex flex-col items-center mt-64">
        <h1 className="text-6xl">MLH Guilds!</h1>
        <ul className="mt-8 text-xl">
          {allPostsData.map(({ id, author, title }) => (
            <li key={id} className="mb-4">
              <Link href={`/posts/${id}`}>{title}</Link>
              <p className="text-base">by {author}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
