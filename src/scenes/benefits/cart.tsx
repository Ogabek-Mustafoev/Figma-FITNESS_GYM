import { BenefitType, SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  benefit: BenefitType;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Cart({
  benefit: { icon, description, title },
  setSelectedPage,
}: Props) {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        href={`#${SelectedPage.ContactUs}`}
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
}
