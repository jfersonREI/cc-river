import "./IconButton.scss";

const IconButton = ({ icon, label, onClick, ...props }) => {
  return (
    <button class="icon-button" aria-label={label} onClick={onClick}>
      {props.children}
      {icon}
    </button>
  );
};

export default IconButton;
