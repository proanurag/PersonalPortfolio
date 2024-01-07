import bgImage from "../assets/carousel.jpg";

const CarouselImage: React.FC = () => {
  return (
    <img
      src={bgImage}
      alt="Something wrong"
      style={{ height: "500px", width: "100%", objectFit: "cover" }}
    />
  );
};

export default CarouselImage;
