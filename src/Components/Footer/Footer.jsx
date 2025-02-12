import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
	return (
		<div className="footer-outer-container">
			<div className="footer-inner-container">
				<div className="footer-first">
					<div className="footer-icons">
						<FacebookOutlinedIcon />
						<InstagramIcon />
						<YouTubeIcon />
					</div>
					<div className="footer-data">
						<div>
							<div>
								<ul>
									<li>Audio Description</li>
									<li>Investor Relations</li>
									<li>legal Notice</li>
								</ul>
							</div>
							<div className="service-code">
								<span>Service Code</span>
							</div>
							<div className="copyright">
								<span>&copy; 1997-2024 Netflix, Inc.</span>
							</div>
						</div>
						<div>
							<ul>
								<li>Help Center</li>
								<li>Jobs</li>
								<li>Cookie Preferences</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>Gift Cards</li>
								<li>Terms of Uses</li>
								<li>Corporate Informations</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>Media center</li>
								<li>Privacy</li>
								<li>Contact Us</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
