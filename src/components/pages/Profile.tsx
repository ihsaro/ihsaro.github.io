import React from "react";

import NavigationBar from "../common/NavigationBar";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import CakeIcon from '@material-ui/icons/Cake';
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';
import TranslateIcon from '@material-ui/icons/Translate';

import Tooltip from '@material-ui/core/Tooltip';

const mainContainerStyle = {
  marginTop: "150px",
};

const profilePictureProperties = {
  display: "block",
  width: "250px",
  borderRadius: "50%",
  margin: "0 auto",
  marginBottom: "20px",
};

const subtitleProperties = {
  fontFamily: "'Montserrat', sans-serif",
};

const socialMediaMediaIconLinkProperties = {
  color: "inherit"
};

const socialMediaIconProperties = {
  marginLeft: "10px",
  marginRight: "10px",
  marginBottom: "25px",
};

const introductionCardStyle = {
  fontFamily: "'Montserrat', sans-serif",
  marginBottom: "25px",
  height: "235px",
};

const personalDetailIconStyle = {
  marginBottom: "10px",
};

const personalDetailLabelStyle = {
  marginLeft: "10px",
};

export default function Profile() {
  return (
    <>
      <NavigationBar />
      <div style={mainContainerStyle} className="container-fluid">
        <div className="row text-center">
          <div className="col-md-12">
            <img
              src={require("../../images/profile_picture.jpg")}
              alt=""
              style={profilePictureProperties}
            />
          </div>
          <div className="col-md-12">
            <p style={subtitleProperties}>PROGRAMMER | OPEN SOURCE ENTHUSIAST | BADMINTON PLAYER</p>
          </div>
          <div className="col-md-12">
            <a style={socialMediaMediaIconLinkProperties} href="https://www.linkedin.com/in/muhammad-idjaz-ali-hossanee-5b5913167">
              <Tooltip title="LinkedIn">
                <LinkedInIcon style={socialMediaIconProperties} />
              </Tooltip>
            </a>
            <a style={socialMediaMediaIconLinkProperties} href="https://github.com/ihsaro">
              <Tooltip title="Github">
                <GitHubIcon style={socialMediaIconProperties} />
              </Tooltip>
            </a>
            <a style={socialMediaMediaIconLinkProperties} href="https://www.facebook.com/idjaz.hossanee.90">
              <Tooltip title="Facebook">
                <FacebookIcon style={socialMediaIconProperties} />
              </Tooltip>
            </a>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6">
            <Card style={introductionCardStyle}>
              <CardContent className="text-justify">
                <h6 style={{ fontWeight: "bold" }}>ABOUT ME</h6>
                <p>
                  I am a professional software developer seeking out new challenges and opportunities to grow my career. I am an open-source enthusiast who works with linux as my daily driver and my motivation to work is to make the world a place where technology is accessible to all 4 corners of the world, hence my love for open-source technologies.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-6">
            <Card style={introductionCardStyle}>
              <CardContent className="text-justify">
                <h6 className="text-left" style={{ fontWeight: "bold" }}>PERSONAL DETAILS</h6>
                <Tooltip title="Date of Birth">
                  <CakeIcon style={personalDetailIconStyle} />
                </Tooltip>
                <label style={personalDetailLabelStyle}>21/11/1997</label>
                <br />
                <Tooltip title="Email Address">
                  <MailIcon style={personalDetailIconStyle} />
                </Tooltip>
                <label style={personalDetailLabelStyle}>idjazhossanee@gmail.com</label>
                <br />
                <Tooltip title="Country of Origin">
                  <PublicIcon style={personalDetailIconStyle} />
                </Tooltip>
                <label style={personalDetailLabelStyle}>Mauritius</label>
                <br />
                <Tooltip title="Languages Spoken">
                  <TranslateIcon style={personalDetailIconStyle} />
                </Tooltip>
                <label style={personalDetailLabelStyle}>English | French | Creole</label>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
