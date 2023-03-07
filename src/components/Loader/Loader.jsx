import { FallingLines } from 'react-loader-spinner';
import { LoaderStyle } from './Loader.style';

const Loader = () => (
  <LoaderStyle>
    <FallingLines
      color="teal"
      width="100"
      visible={true}
      ariaLabel='falling-lines-loading'
    />
  </LoaderStyle>
);

export default Loader;