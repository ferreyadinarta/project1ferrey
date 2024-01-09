import Navbar from "./Navbar";
import Body1 from "./Body1";
import MiddleContacts from "./MiddleContacts";
import Products from "./Products";
import Product from "./Product";
import Body2 from "./Body2";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="border border-black overflow-hidden font-sans">
      <Navbar />
      <Body1 />
      <MiddleContacts/>
      <Products>
        <Product/>
      </Products>
      <Body2/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

