import Link from "next/link";

const NotFound = () => {
  return (
    <div className="items-center justify-center space-y-5 font-bold text-white page-wrapper">
      <h1 className="text-3xl">Error. Page Not Found</h1>
      <Link
        href="/"
        className="px-6 py-3 ease-in-out rounded-full bg-brand-600 hover:bg-brand-700"
      >
        Go to home page?
      </Link>
    </div>
  );
};

export default NotFound;
