export default function Login() {
  
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <div className="border-2 rounded p-10 border-black bg-zinc-200">
        <div className="flex flex-col">
        <div>
          <label className="font-semibold">Username</label> <br />
          <input
            type="text"
            className="mb-2 rounded border-2 border-black"
          />
          <br />
          <label className="font-semibold">Password</label> <br />
          <input
            type="text"
            className="mb-3 rounded border-2 border-black"
          />
        </div>
        <div className="flex flex-col items-center">
        <button className="border-black border-2 rounded w-20 bg-purple-400 ">submit</button>
        </div>
        </div>
      </div>
    </div>
  );
}
