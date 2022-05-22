import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-nextjs-toast";
import {
  Input,
  Select,
} from "../../../components/templates/consultant/register/styles";

import InputMask from "react-input-mask";
import { api } from "../../../services/api";
import router from "next/router";

interface DataRegister {
  name: string;
  email: string;
  password: string;
  cpf?: string;
  rg: string;
  address: string;
  addressNumber: string;
  cep: string;
  docFrontUrl: string;
  docBackUrl: string;
  isCnh: boolean;
}

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const handleChangeIMG = async (file: any): Promise<string> => {
    if (file) {
      let formData = new FormData();
      formData.append("img", file);
      formData.append("folder", "register/docs/consultant/");
      const res = await api.post("/upload", formData);
      return String(res.data.url);
    }
    return "";
  };

  const { register, handleSubmit } = useForm();
  

  const onSubmit = async (data) => {
    setLoading(true)

    const dataSent = {
      name: data.full_name,
      email: data.email,
      password: data.password,
      cpf: data.cpf.replaceAll(".", "").replaceAll("-", ""),
      rg: data.rg.replaceAll(".", "").replaceAll("-", ""),
      address: data.address,
      addressNumber: data.addressNumber,
      cep: data.cep,
      isCnh: data.type_document == "cnh" ? true : false,
      docFrontUrl: await handleChangeIMG(data.front_document[0]),
      docBackUrl: await handleChangeIMG(data.verse_document[0])

    } as DataRegister;
   
    const response = await api.post("/consultant/register",dataSent, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    })
    console.log(response.data)
    if(!!response.data.isSuccess){
      toast.notify(response.data?.message, {
        title: "success",
      });
      router.push('/auth/login')
    }else{
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
   

    setLoading(false)
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
                  type="text"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  {...register("full_name")}
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
                  type="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  {...register("email")}
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
                  type="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  {...register("password")}
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
                <InputMask
                  mask="999.999.999-99"
                  type="text"
                  name="cpf"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  {...register("cpf")}
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
                <InputMask
                  mask="99.999.999-9"
                  name="rg"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  {...register("rg")}
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
                  name="endereco"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  {...register("address")}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Número
                </label>
                <input
                  type="text"
                  name="endereco"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  {...register("addressNumber")}
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
                <InputMask
                  mask="99999-999"
                  name="cep"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  {...register("cep")}
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

                <Select
                  id="tipo-documento"
                  {...register("type_document")}
                  required
                >
                  <option value="identidade">Identidade</option>
                  <option value="cnh">CNH</option>
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
                    <Input
                      type="file"
                      id="frente"
                      {...register("front_document")}
                      accept="image/png, image/gif, image/jpeg"
                      required
                    />
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
                    <Input
                      type="file"
                      id="verso"
                      {...register("verse_document")}
                      accept="image/png, image/gif, image/jpeg"
                      required
                    />
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
