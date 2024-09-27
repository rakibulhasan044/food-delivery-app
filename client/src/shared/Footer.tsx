const Footer = () => {
  return (
    <div className=" bg-neutral-800 text-white p-4">
      <aside>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </div>
  );
};

export default Footer;
