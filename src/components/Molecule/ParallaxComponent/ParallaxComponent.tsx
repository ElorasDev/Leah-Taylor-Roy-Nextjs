import { Parallax } from "@/components/Atom/Parallax/Parallax"
import ParallaxContent from "@/components/Atom/Parallax/ParallaxContent"


const ParallaxComponent = () => {
  return (
    <div className="h-full">
      <Parallax
        url="/images/parallax/jason-hafso-C2keINMOhIE-unsplash.jpg"
      >
        <ParallaxContent />
      </Parallax>
    </div>
  )
}

export default ParallaxComponent