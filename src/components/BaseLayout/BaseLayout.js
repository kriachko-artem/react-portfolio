import React, {useState} from "react";
import {Welcome} from "../WelcomePage/Welcome";
import {Sections} from "./Sections";





export function BaseLayout () {

    const [isWelcome,setIsWelcome] = useState(true);

  return !isWelcome? <Welcome setIsWelcome={setIsWelcome}/>: <Sections/>
}