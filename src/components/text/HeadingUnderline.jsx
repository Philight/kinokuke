const HeadingUnderline = (props) => {
  let { color } = props;
  return <canvas className='underline__container' style={{ backgroundColor: color }} />;
};

export default HeadingUnderline;
