import FAQBox from "./FAQ";
import styles from "./styles.module.css";

function Questions() {
  return (
    <section className='px-40 mt-14 mb-24'>
      <div className='mb-15 text-gray-5 text-center flex flex-col justify-center items-center'>
        <p className='font-medium text-5xl'>
          Do You Have <span className='text-brand-orange'>Questions?</span>
        </p>
        <p className={`opacity-70 text-sm font-thin mt-3 ${styles.questionSubtitles}`}>
          Here are the answers to the frequently asked questions we hear from our appreciated customers.
        </p>
      </div>
      <FAQBox />
    </section>
  );
}

export default Questions;
