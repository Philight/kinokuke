import NewsletterForm from '@components/NewsletterForm';

const NewsletterSection = (props) => {
  let { heading, subheading, text } = props;
  return (
    <section className='newsletter-section__c'>
      <div className='newsletter-section__inner f-col'>
        <div className='newsletter-section__section left'>
          <h2 className='newsletter-section__heading'>{heading}</h2>
          <h3 className='newsletter-section__subheading'>{subheading}</h3>
          {/* <HeadingUnderline color="white" />*/}
          <p className='newsletter-section__text'>{text}</p>
        </div>
        <div className='newsletter-section__section right'>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
