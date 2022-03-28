
import {useEffect, useState} from "react"
import ProfileCard from "./components/ProfileCard";
import ProfileForm from "./components/ProfileForm";


function App() {
  const [allProfile, setAllProfile] = useState([
    {
      firstName: "Hannah",
      lastName: "Montana",
      email: "hannahmontana@email.com",
      phone: "+233 024 455 6745",
    }
  ])

  const submit = (profile) => { 
    const arr= allProfile;
    arr.push(profile);
    setAllProfile(arr);
    console.log(allProfile);
  }



    return (
      <div>
      <h1>Writer Profiles </h1>
      <div className="container">
        <ProfileForm submit={submit} />
        {allProfile.map((writer) =>(
          <ProfileCard key={writer.id} writer={writer} />
        ))}
      </div>
    </div>
    );
}


export default App;
