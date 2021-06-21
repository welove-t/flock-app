import 'tailwindcss/tailwind.css';
import Layout from '../layouts/Layout';

const MyApp = ({ Component, pageProps }) => {
  return pageProps.noLayout ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
      <footer className="border-t py-6">
        <div className="container">
          <p>&copy; eveent</p>
        </div>
      </footer>
    </Layout>
  );
};

export default MyApp;
