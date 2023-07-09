import { Collapse } from "@material-tailwind/react";
import { FC, useState } from "react";
import DropdownCard from "../DropdownCard/DropdownCard";
import ContactCard from "../ContactCard/ContactCard";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const contacts = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/alejandro-vecchio/",
    outward: true,
  },
  {
    name: "Github",
    icon: GitHubIcon,
    link: "https://github.com/alv-314",
    outward: true,
  },
  {
    name: "Email",
    icon: EmailIcon,
    link: "alejandrovecchio01@gmail.com",
    outward: false,
  },
];

const Contact: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="w-full max-w-[480px]">
      <DropdownCard
        title={"Contact"}
        toggleOpen={() => {
          toggleOpen();
        }}
        open={open}
      />
      <Collapse open={open}>
        <ul className="w-full flex flex-col items-end pl-[2rem]">
          {contacts &&
            contacts.map((contact, index) => {
              return (
                <ContactCard
                  name={contact.name}
                  link={contact.link}
                  icon={contact.icon}
                  outward = {contact.outward}
                />
              );
            })}
        </ul>
      </Collapse>
    </div>
  );
};

export default Contact;
