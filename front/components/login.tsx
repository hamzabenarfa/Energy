"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";


const Login = () => {  const router = useRouter();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const onSubmit = () => {
    if (user === "admin" && pwd === "admin") {
        router.push("/main");
    
    }
  };

  return (
    <div className=" shadow-xl p-6 rounded-xl">
    <form>
      <div className="form-group">
        <label className="block font-semibold">Nom :</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="block font-semibold">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded-md"
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      
    </form>
    <Button
       type="submit"
       onClick={onSubmit}
        className="mt-4 w-full self-center"
      >
        Log in
      </Button>
  </div>
  );
};

export default Login;
