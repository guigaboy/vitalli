//rfc
import React, { useEffect, useState } from "react";
import {
	faCalendar,
	faBook,
	faUser,
	faWallet,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "./style.scss";
import Item from "./NavItem";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions";
import Avatar from "@material-ui/core/Avatar";

export default function Navbar(props) {
	const [Name, setName] = useState("Guilherme Carvalho Silva");
	const [Email, setEmail] = useState("guilherme@creatus.net.br");
	const pathName = useLocation().pathname;
	const [Active, setActive] = useState("");
	useEffect(() => {
		setActive(window.location.pathname);
	}, [pathName]);
	const dispatch = useDispatch();

	return (
		<nav className="sidebar-nav">
			<div className="logo-picture-container">
				<div className="logo-container">
					<h1 className="logo">VP</h1>
				</div>
				<div className="person-container">
					<h3 className="person-name">{Name}</h3>
					<p className="person-username">{Email}</p>
					<div className="avatar-container">
						<Avatar className="person-picture" alt={Name}>
							{Name.at(0)}
						</Avatar>
					</div>
				</div>
			</div>
			<ul className="itens-list">
				<Item
					title="Calendário"
					link="/calendario"
					icon={faCalendar}
					linkref={Active}
				/>
				<Item
					title="Pacientes"
					link="/pacientes"
					icon={faBook}
					linkref={Active}
				/>
				<Item
					title="Locatários"
					link="/locatarios"
					icon={faUser}
					linkref={Active}
				/>
				<Item
					title="Financeiro"
					link="/financeiro"
					icon={faWallet}
					linkref={Active}
				/>
				<div className="options">
					<Item
						title="Sair"
						link="/"
						icon={faSignOutAlt}
						onClick={() => {
							localStorage.setItem("isLogged", false);
							dispatch(logOut());
						}}
					/>
				</div>
			</ul>
		</nav>
	);
}
