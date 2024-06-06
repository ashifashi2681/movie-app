import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import ContactUs from "./Screens/ContactUs";
import Movies from "./Screens/Movies";
import SingleMovie from "./Screens/SingleMovie";
import WatchPage from "./Screens/WatchPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import AOS from "aos";
import "aos/dist/aos.css";
import Password from "./Screens/Dashboard/Password";
import FavoritesMovies from "./Screens/Dashboard/FavoritesMovies";
import MoviesList from "./Screens/Dashboard/admin/MoviesList";
import DashBoard from "./Screens/Dashboard/admin/DashBoard";

function App() {
	AOS.init();
	return (
		<div>
			<Router>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/movie/:id" element={<SingleMovie />} />
				<Route path="/watch/:id" element={<WatchPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/password" element={<Password />} />
				<Route path="/favorites" element={<FavoritesMovies />} />
				<Route path="/movieslist" element={<MoviesList />} />
				<Route path="/dashboard" element={<DashBoard />} />
			</Router>
		</div>
	);
}

export default App;
