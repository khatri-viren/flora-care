import { useEffect, useState } from "react";
import ProductHeader from "../components/ProductPage/ProductHeader.jsx";
import InfoSection2 from "../components/shared/InfoSection2.jsx";
import InfoSection3 from "../components/shared/InfoSection3.jsx";
import InfoSection4 from "../components/ProductPage/InfoSection4.jsx";
import Reviews from "../components/ProductPage/Reviews/Reviews";
import FAQs from "../components/ProductPage/FAQs/FAQs";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/productpage/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Add proper loading state or error handling
  }

  const { name, images, price, shortIntroduction, description, reviews } =
    product;

  return (
    <div className="text-udark">
      <ProductHeader
        name={name}
        images={images}
        price={price}
        shortIntro={shortIntroduction}
        reviews={reviews}
        id={id}
      />
      <InfoSection2 />
      <InfoSection3 image={images[2]} desc={description} />
      <InfoSection4 />
      <Reviews />
      <FAQs />
    </div>
  );
};

export default ProductPage;
