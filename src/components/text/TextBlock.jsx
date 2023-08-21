import { forwardRef } from 'react';
import { strReplaceNewline } from '@utils';

const TextBlock = forwardRef((props, ref) => {
  let { className, children, heading, text, isHTML } = props;

  return (
    <section className={`text-block__c f-col ${className}`} ref={ref}>
      <div className='text-block__inner'>
        {!!heading && (
          <h2 className={`text-block__subheading newline-text ${className}`}>
            {strReplaceNewline(heading)}
          </h2>
        )}
        {!isHTML && <p className='newline-text'>{strReplaceNewline(text)}</p>}
        {!!isHTML && <div dangerouslySetInnerHTML={{ __html: text }} />}
        {children}
      </div>
    </section>
  );
});

export default TextBlock;
