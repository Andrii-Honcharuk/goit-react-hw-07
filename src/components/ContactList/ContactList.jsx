//ContactList.jsx

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";

import style from "./ContactList.module.css";

function getVisibleContacts(contacts, filter) {
  console.log("contacts", contacts);
  console.log("filter", filter);
  return contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
    // ||       contact.number.replace(/[^\d]/g, "").includes(filter)
  );
}

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div>
      <ul className={style.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
