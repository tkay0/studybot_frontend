import Link from "next/link";

export default function NewLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-2xl">Create your account</legend>

            <label className="label">First Name</label>
            <input name="fname" type="text" className="input" placeholder="Your First Name" />

            <label className="label">Last Name</label>
            <input name="lname" type="text" className="input" placeholder="Your Last Name" />

            <label className="label">Educational Level</label>
            <select defaultValue="Educational Level" className="select">
              <option disabled={true}>Select Educational Level</option>
              <option>SHS 1</option>
              <option>SHS 2</option>
              <option>SHS 3</option>
            </select>

            <label className="label">Program/Course</label>
            <input name="program" type="text" className="input" placeholder="Program/Course" />

            <label className="label">School Name</label>
            <input name = "school" type="text" className="input" placeholder="Your School Name" />

            <label className="label">Phone Number</label>
            <input name = "phone" type="tel" className="input" placeholder="Your Phone Number" />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <button className="btn btn-warning mt-4">Sign up</button>
            
            <div>Already have an account?<Link href="/login" className="link link-hover"><span className="font-bold text-warning ml-2">Log in</span></Link></div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}