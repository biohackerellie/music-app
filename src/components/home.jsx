import MusicCard from "./music-card";
import { older } from "../assets/index";

const Home = () => {
	return(
		<main className="grid place-items-center min-h-screen " >
		<section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
		<MusicCard
			image={older}
			title="Older"
			releaseDate="2022"
			type="Single"			
		/>
		</section>
	</main>
	)
}

export default Home;