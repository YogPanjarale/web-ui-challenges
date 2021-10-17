import Head from 'next/head'
import { MetaTags } from '../components/metatags'

const LoginForm = () => {
	return (
		<div className="inline-flex flex-col space-y-8 items-center justify-center px-16 py-8 bg-white shadow rounded-3xl">
			<div className="inline-flex space-x-6 items-center justify-center">
				<img src="/book-logo.svg" alt="logo" className="h-12 w-12" />
				<div className=" w-0.5 h-14 bg-darkgreen bg-opacity-30" />
				<p className="w-1/2 h-full text-xl font-semibold leading-9 text-darkgreen font-poppins">
					Readers
					<br />
					Club
				</p>
			</div>
			<div className="flex flex-col space-y-2 items-center justify-center w-full">
				<div className="w-full">
					<input
						className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 focus:outline-none focus:bg-white focus:border-darkgreen
                         leading-10 text-gray-300 font-poppins text-lg font-normal"
						id="inline-full-name"
						type="text"
						placeholder="Your Name"
					/>
				</div>
				<div className="w-full">
					<input
						className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 focus:outline-none focus:bg-white focus:border-darkgreen
                        leading-10 text-gray-300 font-poppins text-lg font-normal"
						id="inline-email"
						type="text"
						placeholder="Email"
					/>
				</div>
				<div className="w-full">
					<input
						className="appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 focus:outline-none focus:bg-white focus:border-darkgreen
                         leading-10 text-gray-300 font-poppins text-lg font-normal"
						id="inline-password"
						type="password"
						placeholder="Password"
					/>
				</div>
			</div>
			<div className="inline-flex flex-col space-y-7 items-center justify-center">
				<div className="flex flex-col items-center justify-center p-1 bg-darkgreen shadow border rounded-3xl w-full">
					<div className="inline-flex items-start justify-start p-2">
						<p className="flex-1 h-full text-xl leading-10 text-white font-poppins">
							Create Account
						</p>
					</div>
				</div>
				<div className="mx-10">
					<p className="text-lg leading-10 font-poppins">
						Already have an account?{" "}
						<span className="underline text-darkgreen">Login</span>
					</p>
				</div>
			</div>
		</div>
	);
};

const LoginPage = () => {
	return (
        <>
        <Head>
            <title>Login Page UI Challenge</title>
            <MetaTags title="Login Page | Yog Panjarale" description="Day 1 promt of daily ui Login Page designed by Manav and made by Yog" image_url="https://web-ui-challenges-eight.vercel.app/owl.svg" url="https://ui.yogpanjarale.com"/>
        </Head>
		<div className="bg-yellow-300 bg-opacity-20  flex flex-col items-center justify-center min-h-screen py-2 ">
			<LoginForm />
		</div>
        </>
	);
};
export default LoginPage;
