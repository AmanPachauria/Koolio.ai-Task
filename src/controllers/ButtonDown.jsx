import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ButtonDown() {
  return (
      <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 h-20 w-12">
        <FontAwesomeIcon icon={faArrowDown} className="text-xl" />
      </button>
  )
}