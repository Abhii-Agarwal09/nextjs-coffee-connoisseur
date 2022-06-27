import styles from './Banner.module.css';

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title_black}>Coffee</span>{' '}
        <span className={styles.title_purple}>Connnoiseur</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={props.btnClickHandler}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
