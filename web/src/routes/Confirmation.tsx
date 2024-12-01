import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Confirmation</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for signing up! Please check your inbox for a confirmation
        email.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
          Back to homepage
        </button>
      </Link>
    </div>
  );
};

export default Confirmation;
