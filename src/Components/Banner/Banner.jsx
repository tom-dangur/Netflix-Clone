import React, {useEffect, useState} from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";

const Banner = () => {
	const [movie, setMovie] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(requests.fetchNetflixOriginals);
				setMovie(
					response.data.results[
						Math.floor(Math.random() * response.data.results.length)
					]
				);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	console.log(movie);
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "...." : str;
	}
	return (
		<>
			<div
				className="banner"
				style={{
					width: "100%",
					height: "720px",
					backgroundSize: "cover",
					backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="banner-contents">
					<h1 className="banner-title">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className="banner-buttons">
						<button className="banner-play-button">Play</button>
						<button className="banner-lists-button">My Lists</button>
					</div>
					<p className="banner-description">{truncate(movie?.overview, 150)}</p>
				</div>
				<div className="banner-fadebottom"></div>
			</div>
		</>
	);
};

export default Banner;
