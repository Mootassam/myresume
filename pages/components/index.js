import dynamic from "next/dynamic";
const Header = dynamic(() => import("./layout/Header"));
const Home = dynamic(() => import("./Home/Home"));
const About = dynamic(() => import("./About/About"));
export { Header, Home, About };
