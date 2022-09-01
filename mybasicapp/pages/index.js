import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/navbar';
import Bottom from '../comps/bottom';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {



   
  return (
    <>
    <Head>
      <title>Employee List | Home</title>
    </Head>
    <div >
      <h1 className={styles.title}>Welcome to Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
      <Link  href={'/ninjas'}><a className={styles.btn}>SEE All EMPLOYEES</a></Link>
   </div>
    </>
  )

}
