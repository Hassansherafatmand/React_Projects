import Photographer from "../../assets/images/Photographer.jpg";
function Image() {
  return (
    <div className="img-container">
      <img src={Photographer} alt="Photographer" className="card-image" />
    </div>
  );
}

export default Image;
