import { useEffect, useState } from "react";
import Adminregister from "./admin/Adminregister";
import { jwtDecode } from "jwt-decode";
function PowerPage() {
  const [token, Settoken] = useState("");
  const [adduserclick, setAdduserclick] = useState(false);
  const [decode, Setdecode] = useState("");
  const [email, setemail] = useState("");
  function GetToken() {
    console.log(localStorage.getItem("token"));
    Settoken(localStorage.getItem("token"));
    console.log(jwtDecode(localStorage.getItem("token")).sub);
    // Setdecode(jwtDecode(token));
    setemail(jwtDecode(localStorage.getItem("token")).sub);
  }
  const poweruserbody = {
    email,
  };
  useEffect(() => {
    //api call
    const powerdata = fetch("http://localhost:8080/getpowerdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers":
          "Authorization, Cache-Control,Content-Type",
        AllowCredentials: "true",
        ExposedHeaders: "Authorization",
      },
      body: JSON.stringify(poweruserbody),
    }).then(console.log(powerdata));
    console.log(powerdata);
  }, [poweruserbody.email]);

  return (
    <>
      <div>
        <div>HELLO user</div>
        <div>
          <button onClick={() => setAdduserclick(!adduserclick)}>
            ADD ADMIN
          </button>
        </div>
        <div>
          <button>ADD USER</button>
        </div>
        <div>
          {adduserclick ? <Adminregister adduserclick={adduserclick} /> : ""}
        </div>
        <div>
          <button onClick={() => GetToken()}>get token</button>
        </div>
      </div>
    </>
  );
}

export default PowerPage;
