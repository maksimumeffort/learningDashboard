import { useState, useEffect } from "react";

export const Alexander = () => {
  const myUserId = "maksimumeffort";

  const [codeWars, setCodeWars] = useState([]);

  const getCodeWars = async () => {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${myUserId}`
    );

    console.log("debug", response);
    return await response.json();
  };

  useEffect(() => {
    const wrapper = async () => {
      const allCodeWars = await getCodeWars().catch((e) => console.log(e));
      setCodeWars(allCodeWars);
    };
    wrapper();
  }, []);

  console.log();

  return (
    <div>
      <p>Username: {codeWars.username}</p>
      <p>Clan: {codeWars.clan}</p>
      <p>Honor: {codeWars.honor}</p>
      <p>Challenges completed: {codeWars.codeChallenges.totalCompleted}</p>
    </div>
  );
};
