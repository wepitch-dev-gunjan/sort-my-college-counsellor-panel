import "./style.scss";

const CoverImage = ({ src }) => {
  return <div className="CoverImage-container">
    <img src={src} alt="Cover Image" />
  </div>;
};

export default CoverImage;
