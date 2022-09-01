import Footer from '../Footer/component'

function Coaching() {
  return (
    <>      
      <div id="content">
            <div id="aboutus-image">
                <img src="images/development-collab.jpg" alt="Developer collaborating with client" text="Developer collaborating with client" width="480" height="320" />
            </div>
            <div id="aboutus-text">
                <p>
                    At Revida, we're passionate about agile development practices, in particular test-driven development and pair programming.
                </p>
                <p>
                    We believe these techniques build quality into software products from the outset:
                </p>
                <ul>
                    <li>enabling testers and developers to define acceptance criteria</li>
                    <li>ensuring that software is continually tested whenever a change is made</li>
                    <li>providing a continual peer review process</li>
                </ul>
                <p>
                    To find out how Revida can help your team work more effectively, please <a href="mailto:daveread@revida.co.uk">contact us</a>
                </p>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Coaching;