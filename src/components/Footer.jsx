const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-700 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">Gadget Heaven</h2>
        <p className="text-sm mb-6">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="text-sm space-y-1">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-sm space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="text-sm space-y-1">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
