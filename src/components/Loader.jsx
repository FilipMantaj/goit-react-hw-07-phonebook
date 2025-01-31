import { RotatingLines } from 'react-loader-spinner';
import css from '../styles/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.container}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};