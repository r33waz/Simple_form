import React from 'react'

import { useForm } from "react-hook-form";

function Login() {
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
    } = useForm();
    
    function onSubmit(data:any) {
        console.log(data)
    }
  return (
    <>
      <section className="flex flex-wrap rounded-md">
        <div className="container flex flex-wrap justify-center">
          <div className="flex flex-col flex-wrap gap-2 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-5 p-8 bg-black border-5 w-96 mt-36 border-x-4 border-y-4">
                <div className="flex flex-col">
                  <label className="font-semibold text-white">Username</label>
                  <input
                    className="h-10 p-4"
                    type="text"
                    id="fname"
                    {...register("fname", {
                      required: true,
                    })}
                  />
                  <span className="text-red-500">
                    {errors.fname && "Enter minimum 3 and maximum 10 character"}
                  </span>
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-white">Password</label>
                  <input
                    type="text"
                    id="lname"
                    className="h-10 p-4"
                    {...register("lname", {
                      required: true,
                      disabled: !watch("fname"),
                    })}
                  />
                  <span className="text-red-500">
                    {errors.lname && "Enter minimum 3 and maximum 10 character"}
                  </span>
                </div>

                <div className="flex flex-col justify-center h-10 bg-white rounded-md hover:bg-gray-400">
                  <input
                    type="submit"
                    id="submit"
                    // {...register("submit", {
                    //   required: true,
                    //   disabled:!watch("health_insurance") ,
                    // })}
                  />
                </div>
                <p className="text-white">
                                  Already have account?<a href="../pages/signup.tsx">Signup</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login