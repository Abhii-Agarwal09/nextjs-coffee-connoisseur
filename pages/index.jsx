import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import styles from '../styles/Home.module.css';

export default function Home() {
  const bannerBtnClickHandler = () => {
    console.log('hello');
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Connnoiseur</title>
      </Head>
      <main className="">
        <Banner
          buttonText="View stores nearby"
          btnClickHandler={bannerBtnClickHandler}
        />
      </main>
    </div>
  );
}
