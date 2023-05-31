import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function firstPost({ data }) {
  console.log(data);
  return (
    <Layout title="Post-One" description="Es mi primer post">
      <div>
        <h1>First Post</h1>
        {/* <Link href="/">Volver al inicio</Link>
        <br />
        <Link href="/about">Ir about</Link>
        <Image src="/img/1.jpg" width={600} height={600} alt="Imagen" />
        <br />
        <a href="/">Soy el diversion</a>
        <br /> */}
        <p>{data.body}</p>
        {/* <h1>{data.id}</h1>
        <h2>{data.title}</h2>
        <h3>{data.body}</h3> */}
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
