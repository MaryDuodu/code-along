import React, { useState } from 'react'

const ProfileForm = ({submit}) => {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfile(prevState => ({...prevState, [name]: value} ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(profile);
        console.log(profile);
    }
  return <form>
      <fieldset>
          <legend>Personal Information</legend>
          <input type="text" name="firstName" placeholder='Enter writer firstName' onChange={handleChange} value={profile.firstName} />
          <input type="text" name="lastName" placeholder='Enter writer lastName' onChange={handleChange} value={profile.lastName} />
          <input type="email" name="email"  placeholder='Enter writer email' onChange={handleChange} value={profile.email} />
          <input type="tel" name="phone" placeholder='Enter writer phone' onChange={handleChange} value={profile.phone} />
      </fieldset>
      <button className='form' onClick={handleSubmit}>
          Add Writer
      </button>
  </form>
}

export default ProfileForm