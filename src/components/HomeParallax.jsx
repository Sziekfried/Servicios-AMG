import {ParallaxLayer} from '@react-spring/parallax';
function HomeParallax() {
  return (
    <ParallaxLayer speed={0.5} 
        factor={2}
        style={{
            backgroundImage: `url("https://res.cloudinary.com/dm7yqyoql/image/upload/v1668642066/ofddlg42genblawdssgt.jpg")`,
            backgroundSize:"cover"
        }}
        >
        <h2>Parte del HeroPage</h2>
    </ParallaxLayer>
  )
}

export default HomeParallax