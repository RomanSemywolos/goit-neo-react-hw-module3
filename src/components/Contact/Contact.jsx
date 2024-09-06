import style from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ id, name, number, handleRemoveContact }) => {
  return (
    <div className={style.contactRow}>
      <div className={style.contactBlock}>
        <div className={style.contactContent}>
          <p>
            <span className={style.text}>
              <FaUser /> {name}
            </span>
          </p>
        </div>
        <div className={style.contactContent}>
          <p>
            <span className={style.text}>
              <FaPhone /> {number}
            </span>
          </p>
        </div>
      </div>
      <button
        className={style.deleteButton}
        onClick={() => handleRemoveContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
