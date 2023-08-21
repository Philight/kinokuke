const FullwidthHeading = (props) => {
  let { heading1, heading2, className } = props;
  return (
    <h2 className={`fullwidth-heading ${className}`}>
      {heading1.replace('<br/>', '\n')} <span>{heading2.replace('<br/>', '\n')}</span>
    </h2>
  );
};

export default FullwidthHeading;
