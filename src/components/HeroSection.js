import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const programs = [
  { name: "Professional Certificate Program in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000" },
  { name: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000" },
  { name: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  { name: "Executive Program in Product Management and Project Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" }
];

const HeroSection = ({ onReferNow }) => {
  return (
    <div>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <ScrollLink to="refer-section" smooth={true} duration={500} className="nav-link active">Refer</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="benefits-section" smooth={true} duration={500} className="nav-link">Benefits</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="faq-section" smooth={true} duration={500} className="nav-link">FAQs</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="support-section" smooth={true} duration={500} className="nav-link">Support</ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hero-section">
        <Box sx={{ textAlign: 'center', p: 5, backgroundColor: '#f5f5f5' }}>
          <Container>
            <Grid container spacing={2} alignItems="center">
              <Grid  item xs={12} md={6}>
                <Typography variant="h3" gutterBottom>
                  Let’s Learn & Earn
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Get a chance to win up to <span style={{ color: '#1565C0' }}>Rs. 15,000</span>
                </Typography>
                <Button variant="contained" color="primary" onClick={onReferNow} style={{ marginTop:'10px'}}>
                  Refer Now
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src='https://tse4.mm.bing.net/th?id=OIP.j5rY2pH9H2itRqD6mxjDNQAAAA&pid=Api&P=0&h=180'
                  alt="Refer and Earn"
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>

      <Element name="refer-section" className="referral-container">
      <h2>How Do I <span className="refer-highlight">Refer?</span></h2>
      <div className="referral-steps">
        <div className="referral-step">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height='3em' viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
         </div>
          <p>Submit referrals easily via our website's referral section.</p>
        </div>
        <div className="referral-step">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height='3em' viewBox="0 0 384 512"><path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/></svg>
          </div>
          <p>Earn rewards once your referral joins an Accredian program.</p>
        </div>
        <div className="referral-step">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" height='3em' viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
          </div>
          <p>Both parties receive a bonus 30 days after program enrollment.</p>
        </div>
      </div>
      <Button variant="contained" color="primary" onClick={onReferNow} style={{ marginTop:'30px'}}>
                  Refer Now
                </Button>
      </Element>
      <Element name='benefits-section' className='benefits-container'>
      <div className="referral-benefits-container">
<h2>What Are The <span className="refer-highlight">Referral Benefits?</span></h2>
<div className="content">
  <div className="sidebar">
    <button className="sidebar-button">ALL PROGRAMS</button>
    <ul>
      <li>PRODUCT MANAGEMENT</li>
      <li>STRATEGY & LEADERSHIP</li>
      <li>BUSINESS MANAGEMENT</li>
      <li>FINTECH</li>
      <li>SENIOR MANAGEMENT</li>
      <li>DATA SCIENCE</li>
      <li>DIGITAL TRANSFORMATION</li>
      <li>BUSINESS ANALYTICS</li>
    </ul>
  </div>
  <div className="programs-table">
    <table>
      <thead>
        <tr>
          <th>Programs</th>
          <th>Referrer Bonus</th>
          <th>Referee Bonus</th>
        </tr>
      </thead>
      <tbody>
        {programs.map((program, index) => (
          <tr key={index} >
            <td  >{program.name}</td>
            <td>{program.referrerBonus}</td>
            <td>{program.refereeBonus}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Button variant="contained" color="primary" onClick={onReferNow}  style={{ marginTop:'30px'}}>
                  Refer Now
                </Button>
  </div>
</div>
</div>
</Element>


      <Element name="faq-section" className="faq-container">
      <div className="sidebar">
        <button className="sidebar-button">Eligibility</button>
        <button className="sidebar-button">How To Use?</button>
        <button className="sidebar-button">Terms & Conditions</button>
      </div>
      <div className="faq-content">
        <h2>Frequently Asked <a href='#'>Questions</a> </h2>
        <div className="faq-item">
          <h3>Do I need to have prior Product Management and Project Management experience to enroll in the program?</h3>
          <p>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
        </div>
        <div className="faq-item">
          <h3>What is the minimum system configuration required?</h3>
        </div>
      </div>
      </Element>

      <Element name="support-section" className="support-container">
      <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-logo">accredian</h3>
        <div className="footer-buttons">
          <button className="footer-button">Schedule 1-on-1 Call Now</button>
          <button className="footer-button">Speak with our Learning Advisor</button>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <h2>Programs</h2>
          <ul>
            <li>Data Science & AI <span className="plus">+</span></li>
            <li>Product Management <span className="plus">+</span></li>
            <li>Business Analytics <span className="plus">+</span></li>
            <li>Digital Transformation <span className="plus">+</span></li>
            <li>Business Management <span className="plus">+</span></li>
            <li>Project Management <span className="plus">+</span></li>
            <li>Strategy & Leadership <span className="plus">+</span></li>
            <li>Senior Management <span className="plus">+</span></li>
            <li>Fintech <span className="plus">+</span></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email us (For Data Science Queries): admissions@accredian.com</p>
          <p>Email us (For Product Management Queries): pm@accredian.com</p>
          <p>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
          <p>Product Management Admission Helpline: +91 9625811095</p>
          <p>Enrolled Student Helpline: +91 7969322507</p>
          <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
        </div>
        <div className="footer-section">
          <h2>Why Accredian</h2>
          <h2>Follow Us</h2>
          <div className="footer-social">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
        <div className="footer-section">
          <h2>Accredian</h2>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Master FAQs</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
      </div>
    </footer>
      </Element>
    </div>
  );
};

export default HeroSection;
