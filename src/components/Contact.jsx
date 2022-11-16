import {ParallaxLayer} from '@react-spring/parallax';
function Contact() {
  return (
    <ParallaxLayer offset={3} 
        speed={1}
        style={{
            backgroundImage: `url("https://res.cloudinary.com/dm7yqyoql/image/upload/v1668642296/opxtno5tndjgvmyfjxv3.jpg")`,
            backgroundSize:"cover"
        }}
        >
        <h2>Parte del Contact</h2>
    </ParallaxLayer>
  )
}
export default Contact