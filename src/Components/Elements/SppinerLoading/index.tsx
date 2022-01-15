import "./style.css";

const SppinerLoading = () => {
  return (
    <div className="SuspenseFallbackContainer">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SppinerLoading;
