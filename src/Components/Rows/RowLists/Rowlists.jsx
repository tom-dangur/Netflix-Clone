import React from "react";
import requests from "../../../utils/requests";
import "./Rowlists.css";
import Row from "../Row/Row";

const Rowlists = () => {
	return (
		<div>
			<Row
				title="Netflix Originals"
				fetchURL={requests.fetchNetflixOriginals}
				isLargeRow={true}
			/>
			<Row title="Trending Now" fetchURL={requests.fetchTrending} />
			<Row title="Top Rated" fetchURL={requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
			<Row title="Tv Shows" fetchURL={requests.fetchTvShow} />
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
		</div>
	);
};

export default Rowlists;
