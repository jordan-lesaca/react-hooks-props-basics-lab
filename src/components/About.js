import React from "react";
import Links from "./Links"

function About({bio, links}) {

  const userBio = () => bio ? <p>{bio}</p> : null
  return (
    <div id="about">
      <h2>About Me</h2>
      {userBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin}/>
    </div>
  );
}

export default About;
