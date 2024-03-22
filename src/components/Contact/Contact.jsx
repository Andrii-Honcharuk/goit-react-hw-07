//Contact.jsx;

import { useDispatch } from "react-redux";
import style from "./Contact.module.css";
import { HiMiniPhone, HiMiniUser } from "react-icons/hi2";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={style.container}>
      <div className={style.containerNameNumber}>
        <p className={style.text}>
          <HiMiniUser />
          {name}
        </p>
        <p className={style.text}>
          {" "}
          <HiMiniPhone /> {number}
        </p>
      </div>
      <button className={style.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
