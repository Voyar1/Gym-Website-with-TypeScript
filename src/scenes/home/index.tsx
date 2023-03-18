import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div>
        {/* MAIN HEADER */}
        <div>
          {/* HEADINGS */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="text" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              qui ea eaque fuga ullam minus sint magnam quae architecto a. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates
              officia impedit animi aliquid cumque eos magnam fuga similique
              tempore!
            </p>
          </div>
          {/* ACTIONS */}
        </div>

        {/* IMAGE */}
        <div>
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>
    </section>
  );
};

export default Home;
