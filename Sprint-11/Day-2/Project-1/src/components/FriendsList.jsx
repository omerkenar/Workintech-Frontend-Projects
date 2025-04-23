import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get(
          "https://nextgen-project.onrender.com/api/s11d2/friends",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setFriends(response.data);
      } catch (error) {
        console.error("Error fetching friends: ", error);
      }
    };

    fetchFriends();
  }, [token]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
