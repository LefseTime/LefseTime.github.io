import React, { Component } from "react";

class About extends Component {
  state = {

  };

  componentDidMount() {

  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
      <div className="main" id="about">
        <div className="scroll">
          <h1 className="title">About</h1>
          <hr></hr>
          <p className="text"><img src="https://imgur.com/PHKTFi7.png" id="profesh" alt="Sonia standing in front of a brick wall smiling."></img>Hello! I'm Sonia Funkenbusch, a full-stack developer in the Twin Cities, Minnesota with experience in JavaScript,
                    Express, Node.js, MySQL, Sequelize, Mongo, Mongoose, HTML, and CSS. I have broad interests and experiences ranging from conducting
                    scientific research to performing orchestral music to studying religion and gender to teaching English
                    to middle schoolers in Japan. If it's possible to find a given thing interesting, I probably will! I'm
                    excited to work in a relaxed environment with a small team of people I can learn with.
          </p>
          <p className="text">In my free time, I enjoy making music, knitting, cross-country skiing, and everything cats. I recently tried to foster
             two kitties, a beefy dilute tortie named Dr. Terwilliker and a tiny tabby named Zabladowski, but ended up adopting them.
          </p>
          <div className="ravelry">
            <a href="https://www.ravelry.com/projects/LutefiskFunk" target="_blank" rel="noopener noreferrer" id="ravelry" className="whitelink" title="Check out my knitting on Ravelry! (requires a free account)"><i className="fab fa-ravelry fa-2x"></i></a>
          </div>
          <div className="hobbyPictures">
            <img src="https://imgur.com/gN8UpSy.png" id="zabs" alt="Picture of Zabladowski sitting in front of a mirror." title="Zabladowski"></img>
            <img src="https://imgur.com/JUeneIv.png" id="ski" alt="Picture of Sonia holding her cross-country skis in front of a frozen waterfall at Willow River State Park, WI." title="XC skiing at Willow River State Park, WI."></img>
            <img src="https://imgur.com/BafDmIz.png" id="otaru" alt="Picture of Sonia giving a thumbs up in front of a sign reading 'Sonia' in Otaru, Hokkaido, Japan." title="Outside Hotel Sonia in Otaru, Hokkaido, Japan."></img>
            <img src="https://imgur.com/IkF1gRQ.png" id="drT" alt="Picture of Dr. T on her back with only her back legs sticking out from a box on the cat tree." title="Dr. Terwilliker"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
