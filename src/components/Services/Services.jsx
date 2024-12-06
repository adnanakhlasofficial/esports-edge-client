import { FaTruck, FaGem, FaLifeRing } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-slate-200 dark:bg-[#161838] dark:text-slate-200 text-darkBg py-12">
      <div className="container mx-auto flex justify-around">
        <div className="text-center">
          <FaTruck className="text-6xl text-darkPurple dark:text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold">FREE SHIPPING</h3>
          <p>Free shipping on all orders over $100</p>
        </div>
        <div className="text-center">
          <FaGem className="text-6xl text-darkPurple dark:text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold">MONEY BACK</h3>
          <p>100% money back guarantee</p>
        </div>
        <div className="text-center">
          <FaLifeRing className="text-6xl text-darkPurple dark:text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold">ONLINE SUPPORT</h3>
          <p>Service support fast 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
