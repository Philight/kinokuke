import Functions from '@components/util/Functions';

const SectionSubheading = (props) => {
  let { subheading, className } = props;

  return (
    <h2 className={`section-subheading newline-text ${className}`}>
      {Functions.strReplaceNewline(subheading)}
    </h2>
  );
};

export default SectionSubheading;
