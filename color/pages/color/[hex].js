import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Color.module.css';

export default function Color({ hex }) {
  return (
    <div style={{ backgroundColor: `#${hex}` }} className={styles.container}>
      <Head>
        <title>{`#${hex} in List of Random Color`}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{`#${hex}`}</h1>
        <div className={styles.back}>
          <Link href="/">&larr; Back to Home</Link>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { hex } = context.query;
  return {
    props: {
      hex
    }
  };
}
