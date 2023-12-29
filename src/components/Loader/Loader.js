import { LoaderWrap } from './Loader.styled';
import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderWrap>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#320D51"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderWrap>
  );
};
