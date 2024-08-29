// eslint-disable-next-line react/prop-types
const Error = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <svg
        className="h-8 w-8 text-red-500 mb-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M12 4a8 8 0 110 16 8 8 0 010-16z"
        />
      </svg>
      <p className="text-red-500 text-lg">{message}</p>
    </div>
  );
};

export default Error;
