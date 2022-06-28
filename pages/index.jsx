import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';
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
        <div className={styles.cards}>
          <Card
            name="Starbucks Coffee"
            imgURL="/favicon.ico"
            href="/coffee-store/starbucks"
          />
          <Card
            name="Starbucks Coffee"
            imgURL="/favicon.ico"
            href="/coffee-store/starbucks"
          />
          <Card
            name="Starbucks Coffee"
            imgURL="/favicon.ico"
            href="/coffee-store/starbucks"
          />
          <Card
            name="Starbucks Coffee"
            imgURL="/favicon.ico"
            href="/coffee-store/starbucks"
          />
          <Card
            name="Starbucks Coffee"
            imgURL="/favicon.ico"
            href="/coffee-store/starbucks"
          />
          <Card
            name="Starbucks Coffee"
            imgURL="/favicon.ico"
            href="/coffee-store/starbucks"
          />
          <Card
            name="Starbucks Coffee"
            imgURL="/favicon.ico"
            href="/coffee-store/starbucks"
          />
        </div>
      </main>
    </div>
  );
}
