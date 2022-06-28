import Image from 'next/image';
import Link from 'next/link';

import styles from './card.module.css';

const Card = ({ name, imgURL, href }) => {
  return (
    <Link href={href}>
      {/* Placing a tag inside Link due to SEO reasons */}
      <a className={styles.card}>
        <div className={`${styles.card_container} ${styles.redi}`}>
          <h2 className={styles.heading}>{name}</h2>
          <div className={styles.card_img_container}>
            <Image
              className={styles.img}
              src={imgURL}
              width={260}
              height={160}
              alt="coffee store image"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
