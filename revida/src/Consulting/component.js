import Logo from '../Logo/component';
import Navigation from '../Navigation/component'
import Footer from '../Footer/component'

function Consulting() {
  return (
    <>      
      <div id="content">
            <div id="aboutus-image">
                <img src="images/consulting-brainstorming.jpg" alt="Consultant brainstorming with team" text="Consultant brainstorming with team" width="480" height="352" />
            </div>
            <div id="aboutus-text">
                <p>
                    With over 25 years commercial development experience in a variety of sectors, we're well placed to consult with teams and advise on best practices and ways to improve the way people work together.
                </p>
                <p>
                    To shamelessly para-phrase from the Agile Manifesto: 
                </p>
                <ul>
                    <li>We value people working together to deliver business value over processes and tools</li>
                    <li>We believe in continuous delivery over the traditional rigid sequences of analysis &gt; develop &gt; test &gt; release</li>
                    <li>Face-to-face conversation over emails and documents</li>
                </ul>
                <p>
                    To find out how Revida can work with your team, please <a href="mailto:daveread@revida.co.uk">contact us</a>
                </p>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Consulting;