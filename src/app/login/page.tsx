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

            <button className="btn btn-warning mt-4">Login</button>
            
            <div>Do not have an account?<Link href="/login/new" className="link link-hover"><span className="font-bold text-warning ml-2">Sign up now</span></Link></div>
          </fieldset>
        </div>
      </div>
    </div>
    
  );
}