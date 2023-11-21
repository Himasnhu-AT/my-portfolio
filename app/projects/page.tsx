"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";
import { useState } from "react";

const Projects = [
	{
		title: 'Portfolio',
		description: 'My portfolio website built using Next.js and Tailwind CSS.',
		deploymentLink: "https://example.com/project1",
		githubLink: "https://github.com/project1",
		image: '/img/portfolio.png',
		category: 'web',
		techStack: ["React", "Node.js", "Express"],
	},
	{
		title: 'OneAi',
		description: 'An All in One Ai website, capable of generating chat, code, audio video, image. Used stripe to hanlde payments. Closed source Right Now',
		deploymentLink: "https://example.com/project1",
		githubLink: "https://github.com/project1",
		image: '/img/one-ai.png',
		category: 'web',
		techStack: ["React", "Node.js", "Express"],
	},
	{
		title: 'FinTracker',
		description: 'Mobile Application to track your expenses and income. Built using Flutter, SQLLite for Database.',
		deploymentLink: "https://example.com/project1",
		githubLink: "https://github.com/project1",
		image: '/img/one-ai.png',
		category: 'mobile',
		techStack: ["React", "Node.js", "Express"],
	},
	{
		title: 'COX_3_ML-Model',
		description: 'An ML Model to detect patients with COVID-19 using chests Scans. Built using Tensorflow, Keras, Python.',
		deploymentLink: "https://example.com/project1",
		githubLink: "https://github.com/project1",
		image: '/img/one-ai.png',
		category: 'mobile',
		techStack: ["React", "Node.js", "Express"],
	},
	{
		title: 'RustyExplorer',
		description: 'An Explorer for Windows built using Rust. It is much faster approx 80% in search for files locally.',
		deploymentLink: "https://example.com/project1",
		githubLink: "https://github.com/project1",
		image: '/img/one-ai.png',
		category: 'mobile',
		techStack: ["React", "Node.js", "Express"],
	},
	{
		title: 'Senior Connect',
		description: 'An mobile appplication like instagram for senior to connect with juniors, share project. Built using Flutter, Firebase.',
		deploymentLink: "https://example.com/project1",
		githubLink: "https://github.com/project1",
		image: '/img/one-ai.png',
		category: 'mobile',
		techStack: ["React", "Node.js", "Express"],
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
					className="px-4 py-2 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
					onClick={() => handleSortByCategory("")}
				>
					All
				</button>
				<button
					className="px-4 py-2 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
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
				<button
					className="px-4 py-2 ml-4 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
					onClick={() => handleSortByCategory("mobile")}
				>
					IoS
				</button>
				<button
					className="px-4 py-2 ml-4 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
					onClick={() => handleSortByCategory("mobile")}
				>
					AI/ML
				</button>
			</div>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto mt-14">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{sortedProjects.map((p, index) => (
						<Card key={index}>
							<div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8">
								{p.image && (
									<Image src={p.image} alt={p.title} width={500} height={500} />
								)}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{p.title}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{p.description}
									</span>
									<div className="mt-4 flex gap-2">
										{p.techStack.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="text-xs bg-zinc-500 text-zinc-900 px-2 py-1 rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex gap-4 mt-4">
										<a
											href={p.deploymentLink}
											target="_blank"
											className="px-4 py-2 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
										>
											View
										</a>
										<a
											href={p.githubLink}
											target="_blank"
											className="px-4 py-2 text-sm bg-zinc-900 text-zinc-200 rounded-full transition duration-300 hover:bg-zinc-500 hover:text-white"
										>
											Github
										</a>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}