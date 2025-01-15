import { AnimatedPinDemo } from "@/components/3d-Pin";
import { BentoGridThirdDemo } from "@/components/Bento-Grid";
import { AppleCardsCarouselDemo } from "@/components/Card-Crusol";
import { GlobeDemo } from "@/components/Globe";
import { SparklesPreview } from "@/components/Sparkles";
import { TextRevealCardPreview } from "@/components/Text-Reveal";


function page() {
  return (
    <div>
     <SparklesPreview/>
      <TextRevealCardPreview/>
      <AppleCardsCarouselDemo/>
      <BentoGridThirdDemo/>
      <AnimatedPinDemo/>
      <GlobeDemo/>
    </div>
  )
}

export default page