import 'styles/global.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="main-container">
      <Component {...pageProps} />
    </main>
  );
}
