import React, { FC } from "react";
import BackgroundImage from "./sub-components/background-image";
import TagHomepage from "./sub-components/tag-homepage";
import TaglineHomepage from "./sub-components/tagline-homepage";
import SummaryHomepage from "./sub-components/summary-homepage";

const HeroHomepage: FC = () => {
  return (
    <div className="">
      <div>
        <BackgroundImage />
      </div>
      <div className="absolute left-20 top-40 space-y-0.5">
        <div>
          <TagHomepage />
        </div>
        <div className="space-y-3">
          <TaglineHomepage />
          <SummaryHomepage />
        </div>
      </div>
    </div>
  );
};

export default HeroHomepage;
