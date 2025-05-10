import Link from "next/link";

export default function LoginPage() {
  return(
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl">Log in to you account</legend>
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <button className="btn btn-primary mt-4">Login</button>
            <div>Don't have an account?<Link href="/" className="link link-hover"><span className="font-bold text-blue-700 ml-2">Sign up now</span></Link></div>
          </fieldset>
        </div>
      </div>
    </div>
    
  );
}