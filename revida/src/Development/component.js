import Footer from '../Footer/component'

function Development() {
  return (
    <>      
      <div id="content">
            <div id="aboutus-image">
                <img src="images/designing-website.jpg" alt="Designing a web site" text="Designing a web site" width="480" height="320" />
            </div>
            <div id="aboutus-text">
                <p>
                    At Revida, we're involved in the whole development life cycle.
                </p>
                <ul>
                    <li>Running the inception phase to define the vision for the project</li>
                    <li>Collaborating to define and estimate user stories</li>
                    <li>Defining the solution architecture</li>
                    <li>Working in iterations to develop the product in a phased manner</li>
                </ul>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Development;
