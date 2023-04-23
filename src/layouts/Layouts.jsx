import Footer from "./Footer";
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const Layouts = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children }
            <Footer/>
        </div>
    );
};

export default Layouts;