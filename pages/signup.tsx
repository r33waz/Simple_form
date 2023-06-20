import React from "react";
import { useForm } from "react-hook-form";
import Login from "./login";


function SignUp() {
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
                  <label className="font-semibold text-white">First Name</label>
                  <input
                    className="h-10 p-4"
                    type="text"
                    id="fname"
                    {...register("fname", {
                      required: true,
                      maxLength: 10,
                      minLength: 3,
                    })}
                  />
                  <span className="text-red-500">
                    {errors.fname && "Enter minimum 3 and maximum 10 character"}
                  </span>
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-white">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    className="h-10 p-4"
                    {...register("lname", {
                      required: true,
                      maxLength: 10,
                      minLength: 3,
                      disabled: !watch("fname"),
                    })}
                  />
                  <span className="text-red-500">
                    {errors.lname && "Enter minimum 3 and maximum 10 character"}
                  </span>
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-white">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="h-10 p-4"
                    {...register("email", {
                      required: true,
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      disabled: !watch("lname"),
                    })}
                  />
                  <span className="text-red-500">
                    {errors.email && "Enter valid email"}
                  </span>
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phnum"
                    className="h-10 p-4"
                    {...register("phnum", {
                      required: true,
                      pattern:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
                      disabled: !watch("email"),
                    })}
                  />
                  <span className="text-red-500">
                    {errors.phnum && "Enter valid number"}
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
                  Already have account?
                  <a href="">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
