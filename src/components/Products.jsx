import Product from "./Product";
import "./Products.css";
import Laptop from "../assets/Laptop.webp";
import Tower from "../assets/Tower.jpg";

const Products = () => {
  return (
    <div>
      <div className="products_row">
        <Product
          id="1"
          title="ASUS ROG Strix G16 (2025) Gaming Laptop, 16” FHD+ 16:10 165Hz/3ms Display, NVIDIA® GeForce RTX™ 5060"
          image={Laptop}
          rating={4}
          price={23792}
        />

        <Product
          id="2"
          title="Lenovo Legion Tower 5i – AI-Powered Gaming PC - Intel® Core Ultra 7 265F Processor – NVIDIA® GeForce RTX™ 5070"
          image={Tower}
          rating={4}
          price={40573}
        />

        <Product
          id="2"
          title="Lenovo Legion Tower 5i – AI-Powered Gaming PC - Intel® Core Ultra 7 265F Processor – NVIDIA® GeForce RTX™ 5070"
          image={Tower}
          rating={3}
          price={40573}
        />
      </div>

      <div className="products_row">
        <Product
          id="1"
          title="ASUS ROG Strix G16 (2025) Gaming Laptop, 16” FHD+ 16:10 165Hz/3ms Display, NVIDIA® GeForce RTX™ 5060"
          image={Laptop}
          rating={4}
          price="23,792"
        />

        <Product
          id="2"
          title="Lenovo Legion Tower 5i – AI-Powered Gaming PC - Intel® Core Ultra 7 265F Processor – NVIDIA® GeForce RTX™ 5070"
          image={Tower}
          rating={4}
          price="40,573"
        />

        <Product
          id="2"
          title="Lenovo Legion Tower 5i – AI-Powered Gaming PC - Intel® Core Ultra 7 265F Processor – NVIDIA® GeForce RTX™ 5070"
          image={Tower}
          rating={4}
          price="40,573"
        />
      </div>

      <div className="products_row">
        <Product
          id="1"
          title="ASUS ROG Strix G16 (2025) Gaming Laptop, 16” FHD+ 16:10 165Hz/3ms Display, NVIDIA® GeForce RTX™ 5060"
          image={Laptop}
          rating="4"
          price="23,792"
        />

        <Product
          id="2"
          title="Lenovo Legion Tower 5i – AI-Powered Gaming PC - Intel® Core Ultra 7 265F Processor – NVIDIA® GeForce RTX™ 5070"
          image={Tower}
          rating="4"
          price="40,573"
        />

        <Product
          id="2"
          title="Lenovo Legion Tower 5i – AI-Powered Gaming PC - Intel® Core Ultra 7 265F Processor – NVIDIA® GeForce RTX™ 5070"
          image={Tower}
          rating="4"
          price="40,573"
        />
      </div>
    </div>
  );
};

export default Products;
