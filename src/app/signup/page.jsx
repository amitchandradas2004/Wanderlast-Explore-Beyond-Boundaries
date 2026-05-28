"use client";

import { authClient } from "@/lib/auth-client";
import { EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  InputGroup,
  Label,
  Separator,
  TextField,
  Toast,
} from "@heroui/react";
import { Check, Eye } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      password: user.password,
      image: user.image,
    });

    if (data) {
      toast.success(`Sign Up successful.`);
      redirect("/destinations");
    }
    if (error) {
      toast.error(error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="container mx-auto my-18 px-2 md:px-0">
      {" "}
      <Form
        onSubmit={onSubmit}
        className="flex flex-col w-full md:w-110 p-5 rounded-2xl bg-black/10 mx-auto gap-4 border border-slate-300 justify-center shadow-xl backdrop-blur-xl"
      >
        <h2 className="font-bold text-center text-2xl">
          Register your account
        </h2>
        <TextField type="text" name="name" isRequired>
          <Label>Your Name</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              // {...register("name", { required: true })}
              placeholder="Enter your name"
              className="rounded-full w-full"
            />
          </InputGroup>
          <FieldError />
        </TextField>

        <TextField type="text" name="image" isRequired>
          <Label>Photo URL</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              // {...register("photo", { required: true })}
              placeholder="Enter Your Photo URL"
              className="rounded-full w-full"
            />
          </InputGroup>
          <FieldError />
        </TextField>

        <TextField type="email" name="email" isRequired>
          <Label>Email address</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              // {...register("email", { required: true })}
              placeholder="Enter your email address"
              className="rounded-full w-full"
            />
          </InputGroup>
          <FieldError />
        </TextField>

        <TextField
          name="password"
          isRequired
          className="w-full rounded-full"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <InputGroup className="rounded-full">
            <InputGroup.Input
              // {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full rounded-full"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          <FieldError />
        </TextField>

        <div className="flex flex-col gap-2 w-full ">
          <button
            type="submit"
            className="w-full btn btn-primary rounded-full transition-all duration-500 ease-in-out  cursor-pointer hover:-translate-y-0.5"
          >
            <Check />
            Register
          </button>
        </div>

        <div className="flex items-center">
          <div className="grow h-px bg-gray-200"></div>
          {/* <Separator /> */}
          <div className="px-3 text-xs text-gray-500 font-medium whitespace-nowrap">
            OR CONTINUE WITH
          </div>{" "}
          {/* <Separator /> */}
          <div className="grow h-px bg-gray-200"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center gap-2 btn btn-primary btn-dash rounded-full h-9 transition-all duration-500 ease-in-out  cursor-pointer hover:-translate-y-0.5"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>
        <span className="font-medium mx-auto mt-2">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-red-600">login</span>
          </Link>
        </span>
      </Form>
    </div>
  );
};

export default RegisterPage;
