/* eslint-disable react/prop-types */

export const Button = ({
  title,
  handleClick,
}: {
  title: string;
  handleClick: any;
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
