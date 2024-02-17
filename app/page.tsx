

import { useState } from "react";
import InterestedInPopups from "@/components/InterestedInPopups";
import Profile from "@/components/Profile";

export default function Home() {

  const [visible, setVisible] = useState(false);

  const handleButtonClick = () => {
    setVisible(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Profile
        name="John Doe"
        job="Software Engineer"
        profileImage="https://via.placeholder.com/150" 
        visible={visible} // Pass visible state as a prop
        handleButtonClick={handleButtonClick} // Pass function as a prop
      />
      {visible && <InterestedInPopups />}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={handleButtonClick}>
        Interested in
      </button>
    </main>
  );
}
