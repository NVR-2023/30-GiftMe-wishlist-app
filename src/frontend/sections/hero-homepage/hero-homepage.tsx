import Link from "next/link";
import BackgroundImage from "./sub-components/background-image";
import HeadingHomepage from "./sub-components/heading-homepage";
import TaglineHomepage from "./sub-components/tagline-homepage";
import SummaryHomepage from "./sub-components/summary-homepage";
import CTAButton from "./sub-components/cta-button";

const HeroHomepage = () => {
  return (
    <div className="">
      <div>
        <BackgroundImage />
      </div>
      <div className="absolute left-20 top-40">
        <div>
          <HeadingHomepage />
        </div>
        <div className="space-y-4">
          <div>
            <TaglineHomepage />
          </div>
          <div>
            <SummaryHomepage />
          </div>
          <div className="pt-3">
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHomepage;
