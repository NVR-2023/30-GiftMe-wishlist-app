import React, { FC } from "react";
import BackgroundImage from "./sub-components/background-image";
import TaglineHomepage from "./sub-components/tagline-homepage";
import ArticleHomepage from "./sub-components/article-homepage";

const HeroHomepage: FC = () => {
  return (
    <div className="">
      <BackgroundImage />
      <div className="absolute left-20 top-40 space-y-3">
        <TaglineHomepage />
        <ArticleHomepage />
      </div>
    </div>
  );
};

export default HeroHomepage;
