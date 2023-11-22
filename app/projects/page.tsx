"use client";

import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";
import { useState } from "react";
import { CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, MoveRightIcon } from "lucide-react";

const Projects = [
	{
		title: 'RustyExplorer',
		description: 'An Explorer for Windows built using Rust. It is much faster approx 80% in search for files locally.',
		deploymentLink: "https://rustyexplorer.vercel.app/",
		githubLink: "",
		image: '/img/RustyExplorer.png',
		category: 'web',
		techStack: ["Rust", "typescript", "NEXTJS", "tailwind CSS", "Stripe", "NESTJS", "POSTGRESQL"],
	},
	{
		title: 'DigiHippo',
		description: 'An Comprehensive full-stack online shopping application for purchasing digital assets, including images, icons, and code snippets.',
		deploymentLink: "https://rustyexplorer.vercel.app/",
		githubLink: "",
		image: '/img/DigiHippo.png',
		category: 'web',
		techStack: ["NEXTJS", "typescript", "tailwind CSS", "Stripe", "NESTJS", "POSTGRESQL"],
	},
	{
		title: 'OneAi',
		description: 'An All in One Ai website, capable of generating chat, code, audio video, image. Used stripe to hanlde payments. Closed source Right Now',
		deploymentLink: "https://one-ai/vert.vercel.app",
		githubLink: "https://github.com/Himasnhu-AT/one-ai",
		image: '/img/OneAI.png',
		category: 'web',
		techStack: ["NEXTJS", "Tailwind CSS", "Stripe", "Clerk", "OpenAI", "POSTGRESQL"],
	},
	{
		title: 'COX_3_ML-Model',
		description: 'An ML Model to detect patients with COVID-19 using chests Scans. Built using Tensorflow, Keras, Python.',
		deploymentLink: "https://github.com/Himasnhu-AT/COX3-ML-Model",
		githubLink: "https://github.com/Himasnhu-AT/COX3-ML-Model",
		image: '/img/COX3.jpeg',
		category: 'AI/ML',
		techStack: ["Tensorflow", "Keras", "Python"],
	},

	{
		title: 'FinTracker',
		description: 'Mobile Application to track your expenses and income. Built using Flutter, SQLLite for Database.',
		deploymentLink: "https://github.com/Himasnhu-AT/fintracker",
		githubLink: "https://github.com/Himasnhu-AT/fintracker",
		image: '/img/Fintracker.jpeg',
		category: 'mobile',
		techStack: ["Flutter", "SQLLite"],
	},
	{
		title: 'Senior Connect',
		description: 'An mobile appplication like instagram for senior to connect with juniors, share project. Built using Flutter, Firebase.',
		deploymentLink: "https://github.com/Himasnhu-AT/seniorconnect",
		githubLink: "https://github.com/Himasnhu-AT/seniorconnect",
		image: '/img/SeniorConnect.jpeg',
		category: 'mobile',
		techStack: ["Flutter", "Firebase"],
	},
];

export default function Example() {
	const [sortedProjects, setSortedProjects] = useState([...Projects]);

	const handleSortByCategory = (category: string | undefined) => {
		if (category === "") {
			setSortedProjects([...Projects]);
		} else {
			const sortedByCategory = Projects.filter((p) => p.category === category);
			setSortedProjects(sortedByCategory);
		}
	};

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 mt-32 mx-24">
			<Navigation />
			<div className="flex justify-center mt-8">
				<button
					className="px-4 py-2 ml-4 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
					onClick={() => handleSortByCategory("")}
				>
					All
				</button>
				<button
					className="px-4 py-2 ml-4 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
					onClick={() => handleSortByCategory("web")}
				>
					Web
				</button>
				<button
					className="px-4 py-2 ml-4 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
					onClick={() => handleSortByCategory("mobile")}
				>
					Android
				</button>
				{/* <button
					className="px-4 py-2 ml-4 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
					onClick={() => handleSortByCategory("IOS")}
				>
					IOS
				</button> */}
				<button
					className="px-4 py-2 ml-4 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
					onClick={() => handleSortByCategory("AI/ML")}
				>
					AI/ML
				</button>
			</div>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-14">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{sortedProjects.map((p, index) => (
						<Card key={index}>
							<CardHeader>
								<Image src={p.image} alt={"asset"} className="h-fill w-fill" width={500} height={500} />
							</CardHeader>
							<CardDescription className="mx-5">
								<h1 className="text-white text-3xl sm:text-5xl md:text-3xl overflow-hidden mb-5">{p.title}</h1>
								<h3 className="text-white text-md mb-5 text-muted-foreground">{p.description}</h3>
								<div className="grid grid-cols-2 gap-2">
									{p.techStack.map((tech, techIndex) => (
										<span key={techIndex} className="text-xs bg-zinc-500 text-zinc-900 px-2 py-1 rounded-full">
											{tech}
										</span>
									))}
								</div>
							</CardDescription>
							<CardFooter>
								<Link href={p.deploymentLink}>
									<Button className="text-white text-md">
										<span className="ml-2">Deployed Link &rarr;</span>
									</Button>
								</Link>
								<Link href={p.githubLink}>
									<Button className="text-white text-md">
										<span className="ml-2"> Github Link &rarr;</span>
									</Button>
								</Link>
							</CardFooter>
						</Card>


					))}
				</div>
			</div>
		</div>
	);
}