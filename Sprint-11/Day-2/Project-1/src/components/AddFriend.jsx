import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function AddFriend() {
  const { token } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const history = useHistory();
  const addFriendSubmit = (data) => {
    const postData = { ...data, age: Number(data.age) };
    const config = {
      method: "post",
      url: "https://nextgen-project.onrender.com/api/s11d2/friends",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      data: JSON.stringify(postData),
    };
    axios(config)
      .then(() => {
        history.push("/friends");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginFormMainDiv">
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit(addFriendSubmit)}>
        <div>
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: "Ama adın ne?" })}
          />
          {errors?.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            {...register("email", {
              required: "Epostanı ver  ki spamlayalım.",
            })}
          />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="number"
            placeholder="age"
            {...register("age", {
              required: "yaş kaç",
            })}
          />
          {errors?.age && <p>{errors.age.message}</p>}
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default AddFriend;
