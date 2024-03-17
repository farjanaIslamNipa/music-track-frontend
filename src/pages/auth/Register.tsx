/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../../assets/images/auth-logo.svg";
import eye from "../../assets/images/eye.svg";
import eyeSlash from "../../assets/images/eye-slash.svg";
import Button from "../../components/ui/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterUser, registerSchema } from "./ZodAuthValidation";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterUser>({ resolver: zodResolver(registerSchema) });

  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registering User");
    try {
      const userInfo = {
        name: data.username,
        email: data.email,
        password: data.password,
      };

      let res : any = {}
      res = await registerUser(userInfo);

      if((res?.error?.status as number) === 400){
        throw new Error(res?.error?.data?.message)
      }
      toast.success("Successfully registered user", {
        id: toastId,
        duration: 2000,
      });
      navigate("/login");
    } catch (err: any) {
      console.log(err, 'err')
      toast.error(err ? err.message : "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="w-full bg-brand lg:bg-secondary bg-opacity-70 lg:bg-opacity-35 p-6 rounded-3xl z-50">
      <div className="flex justify-center">
          <img src={logo} alt="logo" className="h-16" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-6 pb-2 space-y-6">
        <div>
          <input
            type="text"
            id="username"
            className="custom-input"
            placeholder="Enter username"
            {...register("username")}
          />
          {errors?.username && (
            <p role="alert" className="text-sm text-red-500">
              {errors?.username?.message as string}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            id="email"
            className="custom-input"
            placeholder="Enter email address"
            {...register("email")}
          />
          {errors?.email && (
            <p className="text-sm text-red-500">
              {errors?.email?.message as string}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type={!showPassword ? "password" : "text"}
            id="password"
            className="custom-input"
            placeholder="Enter password"
            {...register("password")}
          />
          {errors?.password && (
            <p className="text-sm text-red-500">
              {errors?.password?.message as string}
            </p>
          )}
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <img
                src={eyeSlash}
                alt=""
                className="absolute top-3 right-4 h-5"
              />
            ) : (
              <img src={eye} alt="" className="absolute top-4 right-4 h-[14px]" />
            )}
          </button>
        </div>
        <div className="pt-2">
          <Button type="submit" className="w-full tracking-widest">
            Register
          </Button>
        </div>
        <div className="text-sm text-offWhite text-center">
          Already have an account?
          <NavLink
            to="/login"
            className="font-bold text-primary hover:text-secondary text-base pl-2"
          >
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
