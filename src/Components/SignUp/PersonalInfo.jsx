import React, { useState } from "react";
import styles from "./regestration.module.css";

function PersonalInfo() {
  const [userinfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    password: "",
    email: "",
    contactno: "",
    city: "",
    pincode: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userinfo); // Log the userinfo state
  };

  return (
    <div className={styles.regestration}>
      <div className={styles.container}>
        <h2>Registration</h2>
        <div className="form-container">
          <form id="regestration_form" onSubmit={handleSubmit}>
            <label className={styles.rlabel}>FirstName</label>
            <input
              className={styles.registrationInput}
              type="text"
              name="firstname"
              value={userinfo.firstname}
              onChange={(event) =>
                setUserInfo({
                  ...userinfo,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <label className={styles.rlabel}>LastName</label>
            <input
              className={styles.registrationInput}
              type="text"
              name="lastname"
              value={userinfo.lastname}
              onChange={(event) =>
                setUserInfo({
                  ...userinfo,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <label className={styles.rlabel}>Gender:</label>
            <input
              id="gender"
              type="radio"
              name="gender"
              value="male"
              checked={userinfo.gender === "male"}
              onChange={() => setUserInfo({ ...userinfo, gender: "male" })}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={userinfo.gender === "female"}
              onChange={() => setUserInfo({ ...userinfo, gender: "female" })}
            />{" "}
            Female
            <label className={styles.rlabel}>Password</label>
            <input
              className={styles.registrationInput}
              type="password"
              name="password"
              value={userinfo.password}
              onChange={(event) =>
                setUserInfo({
                  ...userinfo,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <button className={styles.button} type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
