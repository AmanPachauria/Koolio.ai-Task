import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Container() {
  return (
    <div className="flex flex-col items-end mt-5">
      <div className="flex flex-row">
        <button>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <div className="box-border h-48 w-52 bg-slate-200 border border-black lg:mr-80 md:mr-60 mr-10 flex justify-center ">
          <spann>Level2</spann>
        </div>
      </div>
      <div className="flex flex-row">
        <button>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <button>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <div className="box-border h-48 w-52 bg-slate-200 border border-black lg:mr-80 md:mr-60 mr-10 flex justify-center ">
          <spann>Level1</spann>
        </div>
      </div>
      <div className="flex flex-row">
        <button>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <div className="box-border h-48 w-52 bg-slate-200 border border-black lg:mr-80 md:mr-60 mr-10 flex justify-center ">
          <spann>Level0/GL</spann>
        </div>
      </div>

      
    </div>
  )
}
