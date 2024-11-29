import { useState } from "react";
import useEmailApi from "../hooks/api/useEmailApi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const { sentEmail } = useEmailApi();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");

    try {
      const response = await sentEmail(email);
      if (response.success) {
        setMsg("Promo code sent! Check your email.");
        setEmail("");
      } else {
        setMsg(response.errorMsg || "Failed to Subscribe");
      }
    } catch (error) {
      setMsg("An error occurred! please try again");
    }
  };

  return (
    <section className="bg-[#ffffff] my-10">
      {/* newsletter section */}
      <div className=" max-w-[600px] lg:max-w-[900px] xl:max-w-[1100px] h-[300px] object-cover bg-[url('assets/image/restImg.png')] mx-auto z-10 min-h-[400px] border rounded-[40px]">
        <div className="flex h-[400px] gap-4 flex-col justify-center items-center">
          <p className="text-4xl md:text-5xl text-gray-200 font-bold text-center w-[70%]">
            Get a Promo Code by Subscribing to our Newsletter.
          </p>
          <form
            onSubmit={handleSubmit}
            className="relative flex justify-center items-center"
          >
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-10 py-3 md:px-16 md:py-6 rounded-3xl"
            />
            <button className="absolute right-0 block text-white bg-[#EA6D27] hover:bg-[rgb(192,89,29)] px-4 py-3 md:px-6 md:py-4 m-2 rounded-full cursor-pointer">
              Send
            </button>
          </form>
          <div className="text-white">{msg && <p>{msg}</p>}</div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
