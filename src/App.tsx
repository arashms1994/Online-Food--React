import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartSection from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDiv from "./components/ProductDiv";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <ProductDiv />
        <CartSection />
      </main>
      <Footer />
      <ToastContainer
        containerId="A"
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <ToastContainer
        containerId="B"
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
