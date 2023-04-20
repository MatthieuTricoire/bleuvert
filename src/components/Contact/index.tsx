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
      <p>
        {firstname} {lastname}
      </p>
      <p>{phone}</p>
    </div>
  );
};

export default Contact;
