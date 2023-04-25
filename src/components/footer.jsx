import { Footer } from "flowbite-react";

const Footers = () => {
	return(
		<Footer container={true} className="bg-slate-900">
			<Footer.Copyright
				href='#'
				by='Ellie Kerns'
				year="2023"
				/>
		</Footer>
	)
}
export default Footers