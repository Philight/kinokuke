const LandingVideo = (props) => {
  let { className } = props;
  return (
    <section className={`landing-video__c ${className}`}>
      <video
        src='https://edge.tech/videos/home.mp4'
        autoPlay='autoplay'
        playsInline=''
        loop='loop'
        muted='muted'
      />
    </section>
  );
};

export default LandingVideo;
