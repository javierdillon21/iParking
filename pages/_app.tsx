import '../styles/globals.css'
import "../fontAwesome.ts";
import type { AppProps } from 'next/app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function App({ Component, pageProps }: AppProps) {
  return <div title='layout' className='flex flex-col h-screen w-screen justify-between'>
    <Component {...pageProps} />
   
   
  </div>
}
