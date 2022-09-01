import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <nav>
        <div className="logo">
            <Image src = "/giphy.gif" width={100} height={77}/>


        </div>
        <Link href={'/'}><a>Home</a></Link> 
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/ninjas'}><a>Employee List</a></Link>

        </nav>

      );
}
 
export default Navbar;