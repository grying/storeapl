import iphone from "../../img/iPhone-13-Pro-Max-silver-1000x1000.png";

function Banner() {
  return (
    <section className="banner">
      <h2 className="banner__title">Аксессуары для Iphone 13 Pro Max</h2>

        <img src={iphone} alt="phone" className="banner__img" />
    
    </section>
  );
}

export default Banner;
