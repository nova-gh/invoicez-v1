import Link from "next/link";

const InvoiceDetailsBackButton = () => {
  return (
    <Link passHref href="/">
      <button className="flex items-center text-lg font-bold text-white ">
        <span className="mr-4 text-brand-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        Go Back
      </button>
    </Link>
  );
};

export default InvoiceDetailsBackButton;
