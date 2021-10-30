/* stylesheets */
import "../stylesheets/access.css";

export default function Access() {
  return(
    <>
      <h1 className="title">所在地</h1>

      <div className="address">
        <p>142-0063</p>
        <p>東京都品川区荏原 3-5-4</p>
      </div>

      <iframe className="map" title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.4359156332634!2d139.70590111525703!3d35.6169786802093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188adccc7c5993%3A0xee9b845430590227!2z44CSMTQyLTAwNjMg5p2x5Lqs6YO95ZOB5bed5Yy66I2P5Y6f77yT5LiB55uu77yV4oiS77yU!5e0!3m2!1sja!2sjp!4v1635571109634!5m2!1sja!2sjp" allowFullScreen="" loading="lazy" />
    </>
  );
}