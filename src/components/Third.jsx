import React from "react";
import b from "../assets/b.avif";
import Button from "./Button";

function Second() {
  return (
    <div className="main third">
      <img src={b} alt="" className="responsive-image" />
      <div className="text">
        <h1 className="heading">Join the Community</h1>
        <p className="define">
          We invite passionate individuals to join our Flutter community and
          contribute to the growth of this vibrant ecosystem! Whether you're a
          UI design enthusiast or a documentation wizard, your skills are
          valuable. Help us shape the future of Flutter by lending your
          expertise to enhance the user interface and improve documentation.
          Together, let's make Flutter even more accessible and user-friendly
          for developers worldwide. Join us on this exciting journey of
          collaboration!
        </p>
        <Button
          label="Contribute"
          to="https://github.com/rixitgithub/FlutterDoc"
        />
      </div>
    </div>
  );
}

export default Second;
