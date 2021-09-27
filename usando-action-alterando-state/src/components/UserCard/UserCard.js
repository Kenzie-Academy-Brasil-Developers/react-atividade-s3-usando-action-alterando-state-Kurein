import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const [newName, setNewName] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
