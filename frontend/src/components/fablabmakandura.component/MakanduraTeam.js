import React from 'react'
import { datamaknadurateam } from './fablabMakanduraTeam'
import "./ourteamModule.css"

const MakanduraTeam = () => {
  return (
    <>
    <div className="flex justify-center">
        <div class="container">
            {datamaknadurateam.map((user) => {
            return (
            <div class="card_item" key={user.id}>
              <a className="no-underline" href="#">
                <div class="card_item:hover">
                  <img src={user.image} />
                  <div class="userName">{user.name}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default MakanduraTeam