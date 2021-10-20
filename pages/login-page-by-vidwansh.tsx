import Head from "next/head";
import { MetaTags } from "../components/metatags";

//make a login form

function Input({ type, id, placeholder }) {
	return (
		<input
			type={type}
			id={id}
			className=" border-[0.75px] border-black rounded-[8.5px] py-2 px-4 block w-full font-public-sans"
			placeholder={placeholder}
		/>
	);
}

const LoginForm = () => {
	return (
		<form action="" className="min-w-max">
			<div className="bg-white rounded-lg shadow-lg p-4 ">
				<div className="flex flex-col space-y-10 items-center">
					<h1 className="text-3xl font-semibold font-clash-grotesk">
						{" "}
						Sign Up
					</h1>
					<div className="flex flex-col space-y-2">
						<Input type="name" id="name" placeholder="Full Name" />
						<Input type="email" id="email" placeholder="Email" />
						<Input
							type="password"
							id="password"
							placeholder="********"
						/>
                        
					</div>
				</div>
			</div>
		</form>
	);
};
const Vid = () => {
	return (
		<>
			<Head>
				<title>Login Page UI Challenge</title>
				<link rel="icon" href="/owl.svg" />

				<MetaTags
					title="Login Page | Yog Panjarale"
					description="Day 1 promt of daily ui Login Page designed by Vidwansh and made by Yog"
					image_url="https://web-ui-challenges-eight.vercel.app/owl.svg"
					url="https://ui.yogpanjarale.com"
				/>
			</Head>
			<div className="bg-yellow-300 bg-opacity-20  flex flex-col items-center justify-center min-h-screen py-2 ">
				<LoginForm />
			</div>
		</>
	);
};
export default Vid;
