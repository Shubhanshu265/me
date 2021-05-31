import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am an experienced Front End Developer based in Noida. A builder of products.... I love exploring new technologies and often amazed by the progress we are making towards UI.</p>
                    <p>I am passionate about building excellent UI that improves the lives of people. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
                    <p>When I'm not pushing pixels, you'll find me cooking, playing instruments or spending time in park.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and desktop applications using various web technologies!!</p>
                    <p> React JS, HTML5, CSS3, JavaScript, Advanced JavaScript, JQuery, Angular JS, Angular 6, JSON, Highcharts & HighStocks.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Programming Languages</h3>
                    <p>As coming from the ECE background and been trained at Cognizant, I have good grasp over fundamental concepts of C, C++, Java</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>DataBases</h3>
                    <p>I have tried some hands on and pushed my skills to have the basic understanding of MySQL</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>UI Automation tools</h3>
                    <p>I love testing my component and pages before it hits the enviroment by using Jest, Karma, Jasmine, NPM </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Software Tools</h3>
                    <p>I have my hands rubbed on few of the best tools required for UI Developent like IntelliJ IDEA, WebStorm, Microsoft Visual Studio, Adobe Photoshop, Eclipse, Adobe Target</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Responsive Development</h3>
                    <p>My collegues and Projects explains it well :) </p>
                </div>
                </div>
            </div>
           
            </div>
        </div>
        </section>
      </div>
    )
  }
}
