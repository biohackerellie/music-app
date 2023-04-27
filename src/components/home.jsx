import MusicCard from "./music-card";
import AlbumCard from "./album-card";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "../redux/store";
import { logo } from "../assets";

import { useEffect, useState } from "react";

const Home = () => {
	const dispatch = useDispatch();
	const songs = useSelector((state) => state.songs.list);
	const status = useSelector((state) => state.songs.status);
	const error = useSelector((state) => state.songs.error);
	const [albums, setAlbums] = useState(new Set());

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchSongs());
		}
	}, [status, dispatch]);

	useEffect (() => {
		if (status === "succeeded") {
			const albumSet = new Set();
			songs.forEach(song => albumSet.add(song.album));
			setAlbums(albumSet);
		}
	}, [status, songs])
	
	if (status === "loading") {
		return <div>Loading...</div>;
	}
	if (status === "failed") {
		return <div>{error}</div>;
	}

	return(
		<main className="grid place-items-center min-h-screen pb-[50px]" >
			<section className="justify-center flex gap-4  bg-transparent drop-shadow-md relative mb-10">
				<h1 className="text-8xl font-bold text-center bg-transparent drop-shadow-sm  shadow-black">Ellie Kerns Music</h1>
				<img src={logo} alt="Ellie Kerns Music Logo" className=" h-20 w-auto bg-transparent scale-150 mt-5" />
			</section>
		<section className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-[150px] overflow-auto">
			{[...albums].map(album => {
				if (album === "Single") {
					const songsFromAlbum = songs.filter(song => song.album === album);
					return songsFromAlbum.map(song => <MusicCard key={song.id} song={song} />);
				} else {
					return <AlbumCard key={album} album={album} />;
			}
		})}
			
		</section>
	</main>
	)
}

export default Home;