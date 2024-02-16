import React, { FC } from "react";
import XIcon from "@/components/icons/x-icon";
import FacebookIcon from "@/components/icons/facebook-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";

const SocialMediaComponent: FC = () => {
  return (
    <div className="flex space-x-3">
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <XIcon scale={0.7} />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon scale={0.7} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon scale={0.7} />
      </a>
    </div>
  );
};

export default SocialMediaComponent;
