const Layer = (props) => {
  let { className, style, onClick } = props;

  return (
    <canvas
      className={`layer__c ${className} fill-parent-absolute`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default Layer;
