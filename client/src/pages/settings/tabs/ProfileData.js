import React, { createRef, useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useMutation } from "react-query";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { mutateUser, uploadPhoto } from "../../../api/user";
import style from "./ProfileData.module.css";

export default function ProfileData() {
  const alert = useAlert();
  const { auth, setAuth } = useContext(AuthContext);
  const { setToken } = useContext(AuthContext);
  const mutation = useMutation((data) =>
    mutateUser(auth.user.id, auth.token, data)
  );
  const history = useHistory();
  const [img, setImg] = useState([]);
  const imgNode = createRef();

  const [form, setForm] = useState({
    name: auth.user.name,
    email: auth.user.email,
  });

  function handleSubmit(e) {
    e.preventDefault();

    mutation.mutate(
      {
        ...form,
        email: auth.user.email === form.email ? undefined : form.email,
      },
      {
        onSuccess: ({ data }) => {
          alert.success("Your data was changed successfully");
          setAuth((p) => ({
            ...p,
            user: { ...p.user, name: form.name, email: form.email },
          }));
        },
        onError: (data) => {
          alert.error(
            data.response.data.message ||
              data.response.data.error ||
              "Something went wrong"
          );
        },
      }
    );
  }

  function logout() {
    mutation.mutate(
      {},
      {
        onSuccess: () => {
          setToken(null);
          alert.success("You were logged out");
          return history.push("/");
        },
        onError: () => {
          setToken(null);
          alert.error("Something went wrong");
        },
      }
    );
  }

  function uploadImage() {
    const fd = new FormData();
    fd.append("photo", img[0]);
    uploadPhoto(auth.token, fd)
      .then(({ data }) => {
        console.log(data);
        if (data?.data?.id) {
          alert.success("Image was updated!");
          setAuth((p) => ({
            ...p,
            user: {
              ...p.user,
              image: data?.data?.image,
            },
          }));
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <img
        src={
          process.env.REACT_APP_SERVER_URI.replace("/api", "") + auth.user.image
        }
        ref={imgNode}
        className={"rounded-circle mb-3 " + style["circle"]}
        alt="userPhoto"
      />
      <div className="mb-3">
        <label htmlFor="user-picture" className="form-label text-white">
          Choose your picture
        </label>
        <div className="d-inline ">
        <input
          onChange={(e) => {
            setImg(e.target.files);
            imgNode.current.src = URL.createObjectURL(e.target.files[0]);
          }}
          className="form-control"
          type="file"
          id="user-picture"
        />
        <button
          type="button"
          className={style["buttonUpload"]}
          onClick={() => uploadImage()}
        >
          Upload image
        </button>
      </div>
      </div>
      <br />
      <label htmlFor="name" className={"form-label " + style["text"]}>
        Name
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id="name"
        placeholder="name"
        value={form.name}
        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
      />
      <label htmlFor="name" className={"form-label " + style["text"]}>
        Email
      </label>
      <input
        type="text"
        className="form-control mb-4"
        id="email"
        value={form.email}
        placeholder="name@example.com"
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
      />
      <button className={style["button"]}>Update</button>
      <p className={style["logOut"]} onClick={logout}>
        Log Out
      </p>
    </form>
  );
}
