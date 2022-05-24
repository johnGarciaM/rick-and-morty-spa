import Header from "../templates/Header";
import Home from "../views/Home";
import Character from "../views/Character";
import Error404 from "../views/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
	"/": Home,
	"/:id": Character,
	"/Contact": "Contact",
};

const router = async () => {
	const header = null || document.querySelector("#header");
	const content = null || document.querySelector("#content");
	header.innerHTML = await Header();
	let hash = getHash();
	let route = await resolveRoutes(hash);
	let render = routes[route] ? routes[route] : Error404;
	content.innerHTML = await render();
};

export default router;
