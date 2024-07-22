export default function Login() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <div className="flex flex-col border-2 rounded p-10 border-black bg-zinc-200">
        <div className="flex justify-start">
          <div className="text-2xl font-semibold pb-1 underline underline-offset-2">Login</div>
        </div>
        <div className="flex flex-col">
          <div>
            <label className="font-semibold">Username</label> <br />
            <input
              type="text"
              className="mb-2 rounded border-2 border-black"
              placeholder="kaushik"
            />
            <br />
            <label className="font-semibold">Password</label> <br />
            <input
              type="password"
              className="mb-3 rounded border-2 border-black"
              placeholder="********"
             
            />
          </div>
          <div className="flex flex-col items-center">
            <button className="border-black border-2 rounded w-20 bg-purple-400 ">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
