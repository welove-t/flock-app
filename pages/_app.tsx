import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <footer className="border-t py-6">
        <div className="container">
          <p>&copy; eveent</p>
        </div>
      </footer>
    </>
  );
};

export default MyApp;
