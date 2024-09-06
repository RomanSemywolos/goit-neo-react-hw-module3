import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contactData, handleRemoveContact }) => {
  return (
    <ul className={style.list}>
      {contactData.map((contact) => (
        <li key={contact.id} className={style.line}>
          <Contact {...contact} handleRemoveContact={handleRemoveContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;