// App.jsx

// import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import style from "./App.module.css";

export default function App() {
  return (
    <div className={style.container}>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox
      // value={filter}
      // onFilter={setFilter}
      />
      <ContactList />
    </div>
  );
}
