import { FC } from "react";

interface ContactCardProps {
  name: string;
  icon: any;
  link: string;
}
const ContactCard: FC<ContactCardProps> = (props) => {
  const { name, icon, link } = props;
  const ContactIcon = icon;
  return (
    <li
      className={`group relative w-[100%] bg-navy-blue flex items-center rounded-3xl h-[5rem] py-2 pl-10 mb-2`}
    >
      <div className="absolute left-[-7%] h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center bg-lime p-2">
        <ContactIcon sx={{ color:'black', fontSize: 40 }} />
      </div>
      <div className="w-[95%] flex flex-col">
        <h4 className="text-base"> {name} </h4>
        <p className="text-xs overflow-hidden whitespace-nowrap text-ellipsis">
          {link}
        </p>
      </div>
    </li>
  );
};

export default ContactCard;
