import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio et voluptatum ipsum ducimus nostrum temporibus doloribus error vero dicta. Autem?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio et voluptatum ipsum ducimus nostrum temporibus doloribus error vero dicta. Autem?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio et voluptatum ipsum ducimus nostrum temporibus doloribus error vero dicta. Autem?",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto mb-20 min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto
            obcaecati harum ipsam voluptate. Doloribus neque beatae at facilis
            magni eum quis numquam eos! Beatae aspernatur at consequuntur facere
            dolores, iste eius, velit optio nihil facilis ab ex aperiam ratione.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto"
          />
          {/* Description */}
          <div>
            {/* title */}
            <div className="relative">
              <motion.div
                className="before:absolute before:-top-20 before:-left-20 before:z-[1]  before:content-abstractwaves"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500"></span>
                </HText>
              </motion.div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                maxime temporibus architecto minima in? Soluta, dignissimos.
                Magnam, adipisci perferendis libero necessitatibus quae nam
                ratione inventore consectetur impedit! Dicta, cum dolore?
                Ratione modi consequatur blanditiis quisquam molestias officia
                sint magnam nesciunt.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis vero suscipit a veritatis, consequuntur praesentium
                reiciendis temporibus nihil rem facilis? A vero provident
                corrupti fugit voluptas cum explicabo accusantium facere?
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before-bottom-20 before:absolute before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
