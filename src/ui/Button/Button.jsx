import cn from 'classnames';
import styles from './Button.module.scss'

export const Button = ({ type = 'try', text, onClick }) => {
  const buttonClass = cn(
  '',
    {
      [`button-try ${styles.button} `]: type === 'try',
      [`button-free ${styles.button} ${styles.free}`]: type === 'free',
      'button-head py-4 px-7 rounded-[3.875rem] backdrop-blur-[10px] bg-btn-bg-header text-white border border-solid border-btn-border transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-white': type === 'header', 
    }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
       {(type === 'try' || type === 'free') && (
        <img src="/icon/left-side.png" alt="left icon" className={styles.iconLeft} />
      )}
      {text}
      {(type === 'try' || type === 'free') && (
        <img src="/icon/right-side.png" alt="right icon" className={styles.iconRight} />
      )}
    </button>
  )
}