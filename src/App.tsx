import {LogIn, User, Lock} from 'lucide-react'

function App() {

  return(
  <div className="w-screen h-screen bg-[#4D0012] flex items-center justify-center">
    <div className="bg-white p-8 rounded-3xl shadow w-128 flex items-center justify-center flex-col gap-4">
      <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#450010] to-[#6a0018] rounded-2xl mb-4 shadow-lg">
              <LogIn className="w-10 h-10 text-[#FFC107]" />
            </div>
      <h1 className="text-5xl font-bold text-[#450010] mb-2">Bem-vindo!</h1>
      <h6 className="text-lg text-gray-500">Entre na sua conta Linktree</h6>
        <div className="bg-white p-8 w-120 h-74 items-allign-left flex flex-col gap-4 text-left text-size-8">
          <p><b>Usuário</b></p>
              <div className="relative w-60">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Digite seu usuário"
                className="border border-[lightgrey] w-104 h-10 rounded pl-10 pr-3 placeholder:text-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#4D0012]"
              />
              </div>
          <p><b>Senha</b></p>
      <div className="relative w-60">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
            type="password"
            placeholder="Digite sua senha"
            className="border border-[lightgrey] w-104 h-10 rounded pl-10 pr-3 placeholder:text-[lightgrey] focus:outline-none focus:ring-2 focus:ring-[#4D0012]"
          />
        </div>
        <div className="my-3 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-[#FFC107] focus:ring-[#FFC107] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Lembrar-me
                </label>
              </div>
              <button type="button" className="text-sm text-[#450010] hover:text-[#FFC107] font-semibold transition">
                Esqueceu a senha?
              </button>
            </div>
      </div>
      
    <button className="bg-[#4D0012] rounded border-[#4D0012] w-104 h-12 font-bold text-white hover:animate-bounce px-2 py-1 ">
      Entrar 
    </button>
    <div className="my-5 flex items-center">
            <div className="flex-1 border-t-2 border-gray-200"></div>
            <span className="px-7 text-sm text-gray-500">ou</span>
            <div className="flex-1 border-t-2 border-gray-200"></div>
          </div>
        <p className="text-lg text-gray-500">
          Não tem uma conta?       Que pena! Espero que você melhore.
        </p>
        <p className=" my-1 text-lg text-gray-500">
          Brincadeira, se quiser fazer uma conta clica{' '}
              <button className="text-[#450010] hover:text-[#FFC107] font-bold transition">
                aqui.
              </button>
          </p></div>
      </div>
    </div>
  )
}   
export default App
