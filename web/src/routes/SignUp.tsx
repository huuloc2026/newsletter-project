import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { makeid } from "../utils/randomUser";
interface SignUpSuccessPayload {
  email: string;
}
// const emailInputTest = makeid(10) + "@gmail.com";
const SignUp = () => {
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  //
  const handleClick = async () => {
    if (!address) {
      setErrorMessage("Please provide an email address!");
      return;
    }
    const API_URL = "http://localhost:8080";
    const body = JSON.stringify({ email: address });

    try {
      const response = await fetch(`${API_URL}/v1/newsletter/signup`, {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const payload = (await response.json()) as SignUpSuccessPayload;
      console.log(payload); // Check the payload structure

      const isOkResquest = response.status === 200 || response.status === 201;
      if (!isOkResquest) {
        if (typeof payload === "string") {
          return setErrorMessage(payload);
        }
        return setErrorMessage("Invalid Email, please try again!!");
      }

      return navigate("/confirm-email-sent", { state: { address } });
    } catch (error) {
      console.log(error);
      setAddress("");
    }
  };
  const handleChange = (inputAdress: string) => {
    setAddress(inputAdress);
    setErrorMessage("");
  };

  return (
    <>
      {/* Heading Section */}
      <div className="m-4 mb-10 text-center font-bold text-3xl">
        <h1>Welcome to the</h1>
        <span className="text-orange-500">Newsletter Page</span>
        <h2>Please sign up below to be the first to get notified</h2>
      </div>

      {/* Sign Up Form Section */}
      <div className="flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center">
          <span className="mb-4 text-lg text-gray-600">
            Sign up with your email address
          </span>

          {/* Email Input and Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-x-4 sm:space-y-0 w-full max-w-md">
            <input
              type="email" // Fixed: Use type="email" instead of {address}
              placeholder="Enter your email"
              value={address}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              onClick={handleClick}
              type="button" // Avoid using "submit" as the button is not inside a form
              className="w-full sm:w-auto px-6 py-2 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Sign Up
            </button>
          </div>

          {/* Display Error Message */}
          {errorMessage && (
            <div className="mt-4 text-sm text-red-500">
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Optional Footer Message */}
          <div className="mt-4 text-sm text-gray-500">
            <p>We value your privacy. Your email is safe with us!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
