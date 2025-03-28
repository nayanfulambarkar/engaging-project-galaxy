
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

interface SocialLinksProps {
  vertical?: boolean;
  iconSize?: number;
}

const SocialLinks = ({ vertical = false, iconSize = 20 }: SocialLinksProps) => {
  const socials = [
    {
      name: "LeetCode",
      icon: <ExternalLink size={iconSize} />,
      link: "https://leetcode.com/u/nayaan__1/",
      label: "leetcode.com/u/nayaan__1/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={iconSize} />,
      link: "https://www.linkedin.com/in/nayan-fulambarkar-413675259",
      label: "linkedin.com/in/nayan-fulambarkar",
    },
    {
      name: "GitHub",
      icon: <Github size={iconSize} />,
      link: "https://github.com/nayanfulambarkar",
      label: "github.com/nayanfulambarkar",
    },
    {
      name: "Email",
      icon: <Mail size={iconSize} />,
      link: "mailto:nayanjain660@gmail.com",
      label: "nayanjain660@gmail.com",
    },
    {
      name: "Phone",
      icon: <Phone size={iconSize} />,
      link: "tel:+917709088392",
      label: "+91-7709088392",
    },
  ];

  return (
    <div
      className={`flex ${
        vertical ? "flex-col space-y-3" : "flex-wrap gap-4"
      } items-center`}
    >
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-link group flex ${
            vertical ? "justify-start" : "justify-center"
          } items-center gap-2`}
          aria-label={social.name}
        >
          {social.icon}
          {vertical && (
            <span className="text-sm group-hover:text-foreground transition-colors">
              {social.label}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
