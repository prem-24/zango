import { cn } from "../../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import Layout from "../Layout/Layout";
import img1 from "../../asset/bentoimg/img1.svg";
import img2 from "../../asset/bentoimg/img2.svg";
import img3 from "../../asset/bentoimg/img3.svg";
import img5 from "../../asset/bentoimg/img5.svg";
import img4 from "../../asset/bentoimg/img4.svg";
import img6 from "../../asset/bentoimg/img6.svg";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import GradientHeading from "../Subcomponents/GradientHeading";


export function BentoGridDemo() {
  return (
    <Layout>
      <GradientHeading name="Meet thousands of beautiful websites built with Zango" className={"md:w-2/4  m-auto py-20"}/>
<BentoGrid className=" gap-5 mx-auto">

    {items.map((item, i) => (
      <BentoGridItem
        key={i}
        title={item.title}
        description={item.description}
        header={item.header}
        icon={item.icon}
        className={i === 0 ||i==4 ? " md:col-span-1 lg:col-span-2  lg:row-span-2":i === 1 || i === 2 ? "" : ""}
    bgImage={item.img}
      />
    ))}
  </BentoGrid>
    </Layout>
    
  );
}
const Skeleton = () => (
  <div  className="flex flex-1.5 w-full h-full min-h-[6rem] rounded-custom  to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,

    img:img1
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,

    img:img2
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful design functionality.",
    header: <Skeleton />,
   
    img:img3
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication.",
    header: <Skeleton />,

    img:img4
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    img:img5
  },
  {
    
    img:img6

  },
  
];
