import Link from "next/link";
import Head from "next/head";
const Notfound = () => {
    return ( 
        <>
    <Head>
      <title>Employee List | Notfound</title>
    </Head>
        <div className="not-found">
            <h1> OOPSSSS.....</h1>
            <h2> Page Not Found</h2>
            <p> Go back To The <Link href={'/'}><a>Home Page</a></Link></p>
        </div>
        </>
     );
}
 
export default Notfound;