import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { trpc } from "lib/utils";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });
  return (
    <div className={styles.container}>
      <Head>
        <title>Anime List</title>
        <meta name="description" content="NextJs anime list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={"text-green-400 " + styles.title}>Welcome to Aklist</h1>

        <p className={styles.description}>
          Get started by <code className={styles.code}>Signing up</code>
        </p>

        <p>{hello?.data ? hello.data.greeting : "Loading..."}</p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Anime Name &rarr;</h2>
            <p>Anime description</p>
            <button className="btn btn-primary">Remove</button>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}
