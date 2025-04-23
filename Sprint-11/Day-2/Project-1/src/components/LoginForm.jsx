import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    const success = await login(data.username, data.password);
    if (success) {
      history.push("/friends");
    }
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "Username is required!",
              })}
            />
            {errors?.username && <p>{errors.username.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required!",
              })}
            />
            {errors?.password && <p>{errors.password.message}</p>}
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
