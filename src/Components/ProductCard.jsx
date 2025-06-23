export default function ProductCard({ images, title }) {
  return (
    <div className="cards">
      <img src={images} alt="Images" />
      <span>{title}</span>
    </div>
  );
}
