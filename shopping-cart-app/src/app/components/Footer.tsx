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
    <div className="bottom-0 w-full flex flex-col justify-end items-center bg-slate-100 text-black h-[120px] z-20 mt-1">
      <div className=" bottom-0  w-full flex justify-center items-center mb-2 mt-2">
        <a href="https://github.com/PrassesKhadka">
          <GithubIcon className="animate-bounce hover:animate-spin mr-3 text-black" />
        </a>
        <a href="https://linkedin.com/in/prasses-khadka">
          <LinkedinIcon className="animate-bounce hover:animate-spin mr-3 text-blue-500" />
        </a>
        <a href="https://www.youtube.com/watch?v=iD2rhdFRehU">
          <InstagramIcon className="animate-bounce hover:animate-spin mr-3 text-red-500" />
        </a>
        <a href="https://www.youtube.com/watch?v=lvG0kNWR8AE">
          <FacebookIcon className="animate-bounce hover:animate-spin mr-3 text-blue-700" />
        </a>
        <a href="https://www.youtube.com/watch?v=iD2rhdFRehU">
          <TwitterIcon
            className="animate-bounce hover:animate-spin mr-3 text-pink-500
          "
          />
        </a>
      </div>
      <div className="text-xl mb-5">
        Copyright © 2023 <span className="text-red-500">Prasses Khadka</span>
      </div>
    </div>
  );
};

export default Footer;
