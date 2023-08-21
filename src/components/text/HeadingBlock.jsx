import { HeadingUnderline } from '@components/text';
import { strReplaceNewline } from '@utils';

const HeadingBlock = (props) => {
  let { className, heading1, heading2, isHTML } = props;

  return (
    <section className={`heading-block__c f-col ${className}`}>
      {!isHTML && <h2>{strReplaceNewline(heading2)}</h2>}
      {isHTML && <h2 dangerouslySetInnerHTML={{ __html: heading2 }} />}
      {heading2 && <HeadingUnderline />}
      {heading1 && <h3>{strReplaceNewline(heading1)}</h3>}
    </section>
  );
};

export default HeadingBlock;
