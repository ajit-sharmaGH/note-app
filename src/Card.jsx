const Card = ({ title, task, bgColor}) => {
  return (
    <div className="card"  style={{ backgroundColor: bgColor }}>
      <h3> {title} </h3> <span> {task} </span>{" "}
    </div>
  );
};
export default Card;
