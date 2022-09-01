import Footer from '../Footer/component'

function About() {
  return (
    <>      
      <div id="content">
        <div id="aboutus-image">
          <img src="images/software-design.jpg" alt="Software designer drawing diagrams" text="Software designer drawing diagrams" width="480" height="320" />
        </div>
        <div id="aboutus-text">
          <p>
            Revida are a software development and consultancy company based in the East Midlands, specialising in Microsoft technologies and agile software development practices.
          </p>
          <p>
            With over 25 years commercial development experience working in financial services, startup companies, retailers and the public sector we're perfectly placed to offer the benefits of our experience to solving your problems.
          </p>
          <p>
            We're passionate about delivering better quality software.
          </p>
        </div>
      </div>
      <Footer />
      </>
  );
}

export default About;
