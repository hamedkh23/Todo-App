import Link from "next/link";

function SignupPage() {
  return (
    <div className="signin-form">
      <h3>Registeration Form</h3>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
      <div>
        <p>Have an account?</p>
        <Link href="/signin">Signin</Link>
      </div>
    </div>
  );
}

export default SignupPage;
