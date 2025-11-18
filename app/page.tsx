"use client";

import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0066FF]">
      {/* Header */}
      <div className="w-[300px] h-[270px] flex flex-col items-center py-0 invert brightness-0">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={1000}
          height={1000}
        />
      </div>

      {/* Mensagem */}
      <div className="bg-white w-full h-[1000px] flex flex-col items-center pt-10 pb-20 rounded-t-3xl">
        <h2 className="text-center text-[#0262E3] font-semibold text-lg max-w-[400px]">
          Faça login, e comece a descomplicar os estudos do seu filho!
        </h2>

        {/* Input */}
        <div className="flex flex-col gap-3 mt-6 w-[300px]">
          <input
            type="email"
            placeholder="E-mail"
            className="text-gray-800 border-2 border-black rounded-md h-10 px-3 outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            className="text-gray-800 border-2 border-black rounded-md h-10 px-3 outline-none"
          />
        </div>

        {/* Entrar */}
        <button className="mt-6 bg-[#0066FF] text-white  px-6 py-2 rounded-full w-[150px] text-sm font-semibold">
          ENTRAR
        </button>

        {/* Google */}
        <button className="mt-6 border-2 border-black w-[300px] py-2 rounded-md flex items-center justify-center gap-2 text-black font-semibold">
          <Image src="/google-icon.png" alt="Google" width={20} height={20} />
          <span>Faça login com o Google</span>
        </button>

        {/* Facebook */}
        <button className="mt-3 border-2 border-black bg-[#1877F2] text-white w-[300px] py-2 rounded-md flex items-center justify-center  gap-2 font-semibold">
        <Image src="/facebook-icon.png" alt="Facebook" width={25} height={25} />
          <span>Faça login com o Facebook</span>
        </button>

        {/* Apple */}
        <button className="mt-3 border-2 border-black w-[300px] py-2 rounded-md flex items-center justify-center gap-2 text-black font-semibold">
          <Image src="/apple-icon.png" alt="Apple" width={20} height={20} />
          <span>Faça login com a Apple</span>
        </button>
      </div>
    </div>
  );
}
