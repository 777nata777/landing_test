// Пример данных для слайдера
import nftImage1 from "../assets/block_two/image-card_2.jpeg";
import nftImage2 from "../assets/block_two/image-card_2.jpeg";
import nftImage3 from "../assets/block_two/image-card_3.jpeg";
import nftImage4 from "../assets/block_two/image-card_4.jpeg";
import nftImage5 from "../assets/block_two/image-card_5.jpeg";

type NftData = {
  id: number;
  image: string;
  title: string;
  rating: number;
  dateRemaining: Date;
};

export const genNftDataStab = (count: number): NftData[] => {
  const imageGallery = [nftImage1, nftImage2, nftImage3, nftImage4, nftImage5];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    image: imageGallery[i % imageGallery.length],
    title: "Sun-Glass",
    rating: Math.random() * 20,
    dateRemaining: new Date(Date.now() + Math.floor(Math.random() * 1e9)),
  }));
};
