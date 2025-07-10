import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1">
          {/* Logo */}
          <div>
            <img src="/logo.png" alt="Logo" className="h-10 mb-6" />
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <p>1234 Example Street</p>
            <p>City, Country 12345</p>
            <p>Email: contact@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-6 text-xl">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400 mt-4">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-x-10 gap-y-2">
            {/* Column 1 */}
            <div className="flex flex-col space-y-2">
              <Link href="#">Help Center</Link>
              <Link href="#">Blog Posts</Link>
              <Link href="#">FAQs</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">About Us</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-2">
              <Link href="#">Careers</Link>
              <Link href="#">Support Team</Link>
              <Link href="#">User Guide</Link>
              <Link href="#">Feedback Form</Link>
              <Link href="#">Community Forum</Link>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// This code defines a footer component with a logo, contact information, social media links, and additional navigation links.
// It uses Tailwind CSS for styling and includes responsive design features. The footer is divided into two main sections: the left side with contact info and social links, and the right side with navigation links.
// The footer also includes a copyright notice and links to privacy policy, terms of service, and cookie settings.
// The social media icons are implemented using react-icons for easy integration and customization.