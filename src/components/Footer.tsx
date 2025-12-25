'use client';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Mesbah Uddin Tanvir
        </p>
      </div>
    </footer>
  );
};

export default Footer;
