import Bottom from "./bottom";
import Navbar from "./navbar";

const Layout = ({children}) => {
    return (
        <div className="content"> 
        <Navbar />
        {children}
        <Bottom />
        </div>
      );
}
 
export default Layout;