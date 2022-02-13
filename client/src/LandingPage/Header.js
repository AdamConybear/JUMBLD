import React, { useState } from "react";
import { IoStatsChartSharp } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import GameRules from "./GameRules";
import "./main.css";

const Header = () => {

	return (
		<div className="header-container">
			<div className="header-left-web">
				<GameRules trigger={<div className="clickable">How to play</div>} />
				{/* <div className="clickable">Stats</div> */}
			</div>
			<div className="header-left-mobile">
				<GameRules
					trigger={
						<div className="clickable">
							<BsQuestionCircle size={25} />
						</div>
					}
				/>
			</div>


			<div className="header-title">JUMBLD</div>

			<div className="header-right-web">
				<div className="clickable">Stats</div>
			</div>
			<div className="header-right-mobile">
				<GameRules
					trigger={
						<div className="clickable">
							<IoStatsChartSharp size={25} />
						</div>
					}
				/>
			</div>
			
		</div>
	);
};

export default Header;
