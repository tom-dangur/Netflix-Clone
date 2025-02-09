import React from "react";
import "./Header.css";
import NetflixLogo from "../../assets/netflix-3.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
	return (
		<>
			<div className="header-outer-container">
				<div className="header-wrapper">
					<div className="header-left">
						<ul>
							<li>
								<img src={NetflixLogo} alt="Netflix Logo" width={"120px"} />
							</li>
							<li>Home</li>
							<li>TvShows</li>
							<li>Movies</li>
							<li>Latest</li>
							<li>MyLists</li>
							<li>Browse by language</li>
						</ul>
					</div>
					<div className="header-right">
						<ul>
							<li>
								<SearchIcon />
							</li>
							<li>
								<NotificationsNoneIcon />
							</li>
							<li>
								<AccountBoxIcon />
							</li>
							<li>
								<ArrowDropDownIcon />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
