import "../../scss/abstracts/_variables.scss";
import "./Divider.scss";

function Divider({ color, height }) {
  return (
    <hr
      className="divider"
      style={{
        backgroundColor: color,
        height: height,
      }}
    />
  );
}

export default Divider;
