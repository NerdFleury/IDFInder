import Header from './components/Header';
import InputInfo from './components/InputInfo';
import { useState } from 'react'

function App() {
  const [ID, setID] = useState([])
  const [envoked, setEnvoked] = useState(false)

  const occupation = 
    ["CEO", "Redditor", "Twitter User", "KPop Stan", "Anti-vaxxer", 
      "simp", "Reddit Mod", "Discord Mod", "Professional idiot", "Dissapointment"]

  const LCC = [
    "Sex Offender", "Extortion", "Leaving the toilet seat up", 
    "Asking who Joe is", "possession of illegal drugs", 
    "Playing a game from EA/Activision", "Having a TikTok Account", 
    "Participating in Russian Roulette" 
  ]
  
  const createID = (make) => {
    const occVar = Math.floor(Math.random() * 10)
    const lccVar = Math.floor(Math.random() * 8)
    const occ = occupation[occVar]
    const nLCC =  LCC[lccVar]
    setID([...make, occ, nLCC])
    setEnvoked(true)
    console.log(ID)
  }  

  return (


    <div className='new-line' >
      <Header />
      <InputInfo onCreate={createID} />
      {envoked && <h2 className='imageCreationHeader'>Here what we found out about you:</h2>}
      {envoked && <p className='idInfo'>Name & Surname:&nbsp;&nbsp;&nbsp;&nbsp;{ ID[0] }</p>}
      {envoked && <p className='no-margin idInfo'>Birthday:&nbsp;&nbsp;&nbsp;&nbsp;{ ID[1] }</p>}
      {envoked && <p className='no-margin idInfo'>Occupation:&nbsp;&nbsp;&nbsp;&nbsp;{ ID[2] }</p>}
      {envoked && <p className='no-margin idInfo'>Latest Criminal Charge:&nbsp;&nbsp;&nbsp;&nbsp;{ ID[3] }</p>}
    </div>
  );
}

export default App;
