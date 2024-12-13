import { Geist, Geist_Mono } from "next/font/google"
import "../../public/css/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Footer from "@/components/Footer";
import Header from "@/components/Header";;

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]})
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]})

export const metadata = {
	title: "Societas Music Group",
	description: "For independently recording and written music. International entertainment and creative company based in Chicago, Illinois. Founded by Aiden O'Neal and Iven Langohr.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.className} vh-100 d-flex flex-column`}>
				<Header/>
				<div className="flex-grow-1">
					{children}
				</div>
				<Footer/>
			</body>
		</html>
	)
}
