import Link from "next/link";
import Head from "next/head";
import styles from '../../styles/Ninja.module.css';
export const getStaticProps= async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props : {ninjas : data}
  }
}
 

const Ninjas = ({ninjas}) => {
        return (
          <>
    <Head>
      <title>Employee List</title>
    </Head>

            <div>
              <h1>ALL EMPLOYEES</h1>

              {ninjas.map((user)=>(
              <div key = {user.id}>
                <Link href={'/ninjas/'+ user.id}>
                <a className={styles.single}>
                <h3>{user.name}</h3>
                </a>
                </Link>
              </div>
            ) )}</div>
            </>
          );
          
    }
 
export default Ninjas;