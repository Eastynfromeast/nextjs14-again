import { Metadata } from "next";
import Naviagation from "../components/navigation";

export const metadata: Metadata = {
	title: {
		template: "%s | Next Movies",
		default: "Next Movies",
	},
	description: "The best movies on the best framework",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Naviagation />
				{children}
			</body>
		</html>
	);
}

/* 
    layout gets nested
    
    route group by () parenthesis

    metadata
        should be exported
        it can be merged
        should be only in server component
        we can make a template of metadata


	dynamic routes
		has a variable on url 

*/
