import { Hero } from "@/components/sections/Hero";
import { Roots } from "@/components/sections/Roots";
import { UBCJAGallery } from "@/components/sections/UBCJAGallery";
import { DesignToData } from "@/components/sections/DesignToData";
import { PresentFuture } from "@/components/sections/PresentFuture";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Roots />
      <UBCJAGallery />
      <DesignToData />
      <PresentFuture />
      <Contact />
    </>
  );
}
