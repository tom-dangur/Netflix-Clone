import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Rowlists from "../../Components/Rows/RowLists/Rowlists";

const Home = () => {
	return (
		<div>
			<Header />
			<Banner />
			<Rowlists />
			<Footer />
		</div>
	);
};

export default Home;
