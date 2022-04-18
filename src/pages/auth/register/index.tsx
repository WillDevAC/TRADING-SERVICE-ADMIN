import React from "react";

import { useForm } from "react-hook-form";

import Router from "next/router";

import { Input, Select } from "../../../components/templates/register/styles";

const RegisterPage: React.FC = () => {
  
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    Router.replace("/painel/consultant");
  };

  return (
    <>
      <div className="min-h-screen bg-blue-900 flex flex-col justify-center items-center">
        <div className="max-w-xl w-full mx-auto mt-4 bg-white p-8 border border-gray-300 rounded">
          <form
            action=""
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Nome completo
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Senha
                </label>
                <input
                  type="text"
                  name="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  CPF
                </label>
                <input
                  type="text"
                  name="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  RG
                </label>
                <input
                  type="text"
                  name="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Endereço
                </label>
                <input
                  type="text"
                  name="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  CEP
                </label>
                <input
                  type="text"
                  name="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="tipo-documento"
                  className="text-sm font-bold text-gray-600 block"
                >
                  Tipo de documento
                </label>

                <Select id="tipo-documento">
                  <option>Identidade</option>
                  <option>CNH</option>
                </Select>
              </div>

              <div>
                <div className="flex justify-center">
                  <div className="mb-3 w-96">
                    <label
                      htmlFor="frente"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Frente do documento
                    </label>
                    <Input type="file" id="frente" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-center">
                  <div className="mb-3 w-96">
                    <label
                      htmlFor="verso"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Verso do documento
                    </label>
                    <Input type="file" id="verso" />
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-2 px-4 bg-blue-900 hover:bg-blue-800 rounded-md text-white text-sm">
              Registrar-se
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
