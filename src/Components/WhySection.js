import React from "react";
import "./WhySection.css";
import online from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";

export default function WhySection() {
	return (
		<div className="WhySection">
			<div className="container">
				<div className="info">
					<h2 className="title">Why choose Easybank?</h2>
					<p className="desc">
						We leverage Open Banking to turn your bank account into your financial
						hub. Control your finances like never before.
					</p>
				</div>
				<div className="features">
					<div className="feat">
						<div className="icon">
							<img src={online} />
						</div>
						<h4 className="feat-title">Online Banking</h4>
						<p className="feat-desc">
							Our modern web and mobile applications allow you to keep track of your
							finances wherever you are in the world.
						</p>
					</div>
					<div className="feat">
						<div className="icon">
							<img src={budgeting} />
						</div>
						<h4 className="feat-title">Simple Budgeting</h4>
						<p className="feat-desc">
							See exactly where your money goes each month. Receive notifications when
							you’re close to hitting your limits.
						</p>
					</div>
					<div className="feat">
						<div className="icon">
							<img src={onboarding} />
						</div>
						<h4 className="feat-title">Fast Onboarding</h4>
						<p className="feat-desc">
							We don’t do branches. Open your account in minutes online and start
							taking control of your finances right away.
						</p>
					</div>
					<div className="feat">
						<div className="icon">
							<img src={api} />
						</div>
						<h4 className="feat-title">Open API</h4>
						<p className="feat-desc">
							Manage your savings, investments, pension, and much more from one
							account. Tracking your money has never been easier.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}