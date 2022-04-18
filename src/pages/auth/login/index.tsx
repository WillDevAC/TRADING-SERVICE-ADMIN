import React from "react";

import { useForm } from "react-hook-form";

import Router from "next/router";

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    Router.replace("/painel/consultant");
  };

  return (
    <>
      <div className="min-h-screen bg-blue-900 flex flex-col justify-center items-center">
        <img src="/img/logo.png" alt="logo" />
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300 rounded">
          <form
            action=""
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
              {...register("Email")}
            />

            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Senha
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
              {...register("Password")}
            />

            <button className="w-full py-2 px-4 bg-blue-900 hover:bg-blue-800 rounded-md text-white text-sm">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
