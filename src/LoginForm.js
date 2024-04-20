import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, Setemail] = useState("");
  const [password, SetPassword] = useState("");
  const powerdetails = {
    email,
    password,
  };
  async function PowerLogin() {
    const loginres = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers":
          "Authorization, Cache-Control,Content-Type",
        AllowCredentials: "true",
        ExposedHeaders: "Authorization",
        //"Content-Type, Authorization",
      },
      body: JSON.stringify(powerdetails),
    });

    if (loginres.ok) {
      const responsetoken = await loginres.json();
      console.log(responsetoken);

      localStorage.setItem("token", responsetoken.token);
      navigate("/pp", { replace: true });
    }
  }

  return (
    <div className="login-from">
      <div>
        <form>
          <div>
            <input
              type="text"
              placeholder="email address"
              value={email}
              onChange={(e) => {
                Setemail(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
            ></input>
          </div>
        </form>
        <div>
          <button onClick={() => PowerLogin()}>submit</button>
        </div>
        <div>
          <div>{email}</div>
          <div>{password}</div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
