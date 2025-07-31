export const metadata = {
  title: "Sign Up - Open PRO",
  description: "Page description",
};


export default function SignUp() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#06b6d4] px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border-2 border-cyan-400">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-cyan-300 mb-2 drop-shadow-2xl" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Sign Up</h1>
          <p className="text-gray-100">Create your account to get started.</p>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-cyan-200 font-semibold">Name</label>
            <input id="name" type="text" required className="px-4 py-3 rounded-lg bg-white/80 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your full name" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-cyan-200 font-semibold">Email</label>
            <input id="email" type="email" required className="px-4 py-3 rounded-lg bg-white/80 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-cyan-200 font-semibold">Password</label>
            <input id="password" type="password" required className="px-4 py-3 rounded-lg bg-white/80 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Create a password" />
          </div>
          <button type="submit" className="mt-4 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-extrabold rounded-xl shadow-2xl border-2 border-cyan-400 hover:scale-105 hover:drop-shadow-xl transition-transform duration-200 animate-bounce glow-effect" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>Sign Up</button>
        </form>
      </div>
    </section>
  );
}
