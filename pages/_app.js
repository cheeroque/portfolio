import PropTypes from 'prop-types';
import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  pageProps: PropTypes.shape({}),
  Component: PropTypes.elementType,
};

export default MyApp;
