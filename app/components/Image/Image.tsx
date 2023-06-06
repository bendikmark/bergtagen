import { LinksFunction } from "@remix-run/node";
import imageStyles from "./Image.css";
import { animated, useSpring, useInView } from "@react-spring/web";

export const imageLinks: LinksFunction = () => {
  return [{ rel: "stylesheet", href: imageStyles }];
};

type ImageProps = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: ImageProps) => {
  const [ref, inView] = useInView();

  const [styles] = useSpring(
    () => ({
      config: { duration: 500 },
      opacity: inView ? 1 : 0,
    }),
    [inView]
  );

  return (
    <animated.div ref={ref} style={styles} className="card">
      <img src={src} alt={alt} />
    </animated.div>
  );
};

export default Image;
