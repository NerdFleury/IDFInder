import { useState } from "react";

const InputInfo = ({ onCreate }) => {
    const [name, setName] = useState('')
    const [bday, setBDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name || !bday) {
            alert("Please fill in all the information")
            return
        }

        onCreate([ name, bday ])

        setName('')
        setBDay('')
    }
    


    return (
        
        <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label className='labellook'>
            Name & Surname
            </label>
            <input className='formlook'
             type='text' placeholder="Enter Name & Surname" 
            value={name}
             onChange={(e) => setName(e.target.value)}
             />
        </div>
        <div className='form-control'>
            <label className='labellook'>
            Birth Date
            </label>
            <input className='formlook'
             type='text' placeholder="Enter Birth Date"
             value={bday}
             onChange={(e) => setBDay(e.target.value)}/>
        </div>
        <div>
            <input type="submit" 
            className='create' value="Create" 
             /> 
        </div>
        </form>
        
    )
}

export default InputInfo
