import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import pic5 from "../../assets/pic5.jpg";
function Pics_Grid() {
  return (
    <div className="pics-container">
      <div className="gallery grid-span-col-2">
        <img src={pic1} alt="image" />
      </div>
      <div className="gallery">
        <img src={pic2} alt="image" />
      </div>
      <div className="gallery">
        <img src={pic3} alt="image" />
      </div>
      <div className="gallery grid-span-col-2">
        <img src={pic4} alt="image" />
      </div>
      <div className="gallery">
        <img src={pic5} alt="image" />
      </div>
    </div>
  );
}
export default Pics_Grid;
