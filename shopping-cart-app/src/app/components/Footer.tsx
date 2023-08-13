import React from 'react';
import {
  GithubIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from 'lucide-react';
import { LinkedinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <div>
      <div>Copyright © 2023 Prasses Khadka</div>
      <div className=" bottom-0  w-full flex justify-center items-center bg-black text-white h-[80px] ">
        <a href="https://github.com/PrassesKhadka">
          <GithubIcon className="animate-bounce hover:animate-spin mr-3" />
        </a>
        <a href="www.linkedin.com/in/prasses-khadka">
          <LinkedinIcon className="animate-bounce hover:animate-spin mr-3" />
        </a>
        <a href="https://www.youtube.com/watch?v=iD2rhdFRehU">
          <InstagramIcon className="animate-bounce hover:animate-spin mr-3" />
        </a>
        <a href="https://www.youtube.com/watch?v=iD2rhdFRehU">
          <FacebookIcon className="animate-bounce hover:animate-spin mr-3" />
        </a>
        <a href="https://www.youtube.com/watch?v=iD2rhdFRehU">
          <TwitterIcon className="animate-bounce hover:animate-spin mr-3" />
        </a>
      </div>
    </div>
  );
};

export default Footer;