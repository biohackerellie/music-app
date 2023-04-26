import MusicCard from "./music-card";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "../redux/store";

import { useEffect } from "react";

const Home = () => {
	const dispatch = useDispatch();
	const songs = useSelector((state) => state.songs.list);
	const status = useSelector((state) => state.songs.status);
	const error = useSelector((state) => state.songs.error);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchSongs());
		}
	}, [status, dispatch]);
	
	if (status === "loading") {
		return <div>Loading...</div>;
	}
	if (status === "failed") {
		return <div>{error}</div>;
	}

	return(
		<main className="grid place-items-center min-h-screen " >
		<section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
			{songs.map((song) => (
				<MusicCard key={song.id} song={song} />
			))}
		</section>
	</main>
	)
}

export default Home;