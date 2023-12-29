import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from "next/image";
import shirt1 from "../assets/1.png"
import shirt2 from "../assets/2.png"
import shirt3 from "../assets/3.png"

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide" >
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>

      </Product>
      <Product className="keen-slider__slide" >
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 59,90</span>
        </footer>

      </Product>
      <Product className="keen-slider__slide" >
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 159,90</span>
        </footer>

      </Product>
      <Product className="keen-slider__slide" >
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta 4</strong>
          <span>R$ 19,90</span>
        </footer>

      </Product>
    </HomeContainer>
  )
}