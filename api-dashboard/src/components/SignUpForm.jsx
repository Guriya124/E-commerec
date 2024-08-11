import { Square, SquareCheck } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from "react";


function SignUpForm() {
  const [data, setData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => { 
    e.preventDefault();
    setLoading(true);
    console.log(data);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="mt-10">

        {/* Sign in */}
        <div className="border border-neutral-200 rounded-3xl p-8 max-w-lg w-full mx-auto">
          <div className="mb-8">
            <h1 className=" lg:text-center text-2xl font-semibold mb-1">
              Sign up
            </h1>

          </div>

          <form className="w-full" onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="inline-block mb-2 text-body font-semibold"
            >
              Email Address
            </label>
            <div className="mb-4 flex items-center gap-2">

              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                onChange={handleChange}
                value={data.email}
                required={true}
                className="flex-1 p-2 border rounded-md"
              />
            </div>
            <label
              htmlFor="password"
              className="inline-block mb-2 text-body font-semibold"
            >
              Password
            </label>
            <div className="mb-4 flex items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
                value={data.password}
                required={true}
                className="flex-1 p-2 border rounded-md"
              />
            </div>
            <span
              className="flex items-center text-body gap-2 mb-6 cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? <SquareCheck className="w-6 h-6" /> : <Square className="w-6 h-6" />}
              Show password
            </span>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gray-700 text-white p-2 rounded-md"
              onClick={() => setLoading(true)} // Assuming you want to set loading state on submit
            >
              {loading ? (
                <>
                  <span className="w-6 h-6 rounded-full border-2 border-white/10 border-r-white animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign Up

                </>
              )}
            </button>
          </form>
          <div className="flex items-center justify-center gap-3 p-5">
            <p className="text-md font-semibold">Have you an account...</p>
            <Link to="/login" className="text-md font-semibold text-blue-500 underline">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
}


export default SignUpForm;
