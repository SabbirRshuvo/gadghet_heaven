import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Oops!</h1>
      <p className="mt-4 text-gray-600">
        The page you are looking for doesn not exist.
      </p>
      <Link
        to="/"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default Error;
