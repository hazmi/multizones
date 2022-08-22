import Head from 'next/head';
import Link from 'next/link';
import randomColor from 'randomcolor';
import styles from '../styles/Home.module.css';

export default function Home({ colors }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>List of Random Color</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>List of Random Color</h1>
        <ul className={styles.list}>
          {colors.map((color) => (
            <li key={color}>
              <Link href={`/color/${color.substring(1)}`}>
                <a style={{ backgroundColor: color }}>{color}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const colors = [];
  for (let i = 0; i < 12; i++) {
    colors.push(randomColor({ luminosity: 'light' }));
  }
  return {
    props: {
      colors
    }
  };
}
