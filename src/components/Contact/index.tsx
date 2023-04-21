import { FC } from "react";
import "./index.css";
interface indexProps {
  firstname: string;
  lastname: string;
  email?: string;
  phone: string;
}

const Contact: FC<indexProps> = ({ firstname, lastname, phone }) => {
  return (
    <div className="contact-container">
      <div>
        <span>{firstname}</span>
        <span>{lastname}</span>
      </div>
      <p>{phone}</p>
    </div>
  );
};

export default Contact;
