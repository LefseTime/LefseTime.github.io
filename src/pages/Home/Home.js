import React, { Component } from "react";
import Button from "../../components/Button";

class Home extends Component {

    render() {
        return (
            <div className="home" id="home">
                <div className="scroll">
                    <div className="homeTitle">
                        <h1 className="homeSonia">S.C. Funkenbusch</h1>
                        <h2>Full Stack Developer</h2>
                        <p>Websites built. Databases managed. <a href="https://www.youtube.com/watch?v=TnZhi5gaX8g" target="_blank" rel="noopener noreferrer" id="catMassage">Cats massaged.</a></p>
                    </div>
                    <div className="buttons">
                        <Button link="/portfolio-page" title="Portfolio" text="Portfolio" />
                        <Button link="/resume" title="Resume" text="Resume" />
                        <Button link="/about" title="About" text="About" />
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;