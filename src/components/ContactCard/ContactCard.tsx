import { FC } from "react";
import LinkIcon from "@mui/icons-material/Link";
interface ContactCardProps {
  name: string;
  icon: any;
  link: string;
  outward: boolean;
}
const ContactCard: FC<ContactCardProps> = (props) => {
  const { name, icon, link, outward } = props;
  const ContactIcon = icon;
  return (
    <li
      className={`group relative w-[100%] bg-navy-blue flex items-center rounded-3xl h-[5rem] py-2 pl-10 mb-2`}
    >
      <div className="absolute left-[-7%] h-[3.5rem] w-[3.5rem] rounded-full flex items-center justify-center bg-lime p-2">
        <ContactIcon sx={{ color: "black", fontSize: 35 }} />
      </div>
      <div className="w-[95%] flex flex-col">
        <h4 className="text-base"> {name} </h4>
        <div className="flex items-center">
          <p className="text-xs overflow-hidden whitespace-nowrap text-ellipsis">
            {link}
          </p>
          {outward && (
            <a href={link} target="_blank" rel="noreferrer" className="ml-auto rotate-[135deg] ">
              <LinkIcon />
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ContactCard;
