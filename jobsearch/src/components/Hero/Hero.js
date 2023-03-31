import React from 'react'
import logo from "./search.png"
export default function Hero() {
  return (
    <div className="flex justify-center">
        <img src={logo} alt="magnifying glass" className="h-20"/>
        <h1 className="font-bold text-3xl uppercase">Find your candidate!</h1></div>
  )
}
