"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectItem {
    title: string;
    description: string;
    deploymentLink?: URL;
    githubLink?: URL;
    image?: string;
    category: string;
    res: string;
}

const projectData: ProjectItem[] = [
    {
        title: 'Portfolio',
        description: 'My portfolio website built using Next.js and Tailwind CSS.',
        deploymentLink: new URL('https://himanshu-AT.vercel.app/'),
        githubLink: new URL("https://github.com/Himasnhu-AT/my-portfolio"),
        image: '/img/portfolio.png',
        category: 'web',
        res: 'Next.js, Tailwind CSS, Shadcn, Vercel',
    },
    {
        title: 'OneAi',
        description: 'An All in One Ai website, capable of generating chat, code, audio video, image. Used stripe to hanlde payments. Closed source Right Now',
        // deploymentLink: new URL('https://himanshu-AT.vercel.app/'),
        // githubLink: new URL('https://himanshu-AT.vercel.app/'),
        image: '/img/one-ai.png',
        category: 'web',
        res: 'Next.js, Tailwind CSS, Shadcn, Vercel, Stripe, Clerk',
    },
    {
        title: 'FinTracker',
        description: 'Mobile Application to track your expenses and income. Built using Flutter, SQLLite for Database.',
        // deploymentLink: new URL('https://himanshu-AT.vercel.app/'),
        // githubLink: new URL('https://himanshu-AT.vercel.app/'),
        image: '/img/one-ai.png',
        category: 'mobile',
        res: 'Flutter, SQLLite',
    },
    {
        title: 'COX_3_ML-Model',
        description: 'An ML Model to detect patients with COVID-19 using chests Scans. Built using Tensorflow, Keras, Python.',
        // deploymentLink: new URL('https://himanshu-AT.vercel.app/'),
        // githubLink: new URL('https://himanshu-AT.vercel.app/'),
        image: '/img/one-ai.png',
        category: 'mobile',
        res: "Python, Tensorflow, Keras",
    },
    {
        title: 'RustyExplorer',
        description: 'An Explorer for Windows built using Rust. It is much faster approx 80% in search for files locally.',
        // deploymentLink: new URL('https://himanshu-AT.vercel.app/'),
        // githubLink: new URL('https://himanshu-AT.vercel.app/'),
        image: '/img/one-ai.png',
        category: 'mobile',
        res: "Rust, typeScript",
    },
    {
        title: 'Senior Connect',
        description: 'An mobile appplication like instagram for senior to connect with juniors, share project. Built using Flutter, Firebase.',
        // deploymentLink: new URL('https://himanshu-AT.vercel.app/'),
        // githubLink: new URL('https://himanshu-AT.vercel.app/'),
        image: '/img/one-ai.png',
        category: 'mobile',
        res: "Flutter, Firebase",
    },
];

const Projects: React.FC = () => {
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);

    const sortedProjects = currentCategory
        ? projectData.filter((project) => project.category === currentCategory)
        : projectData;

    const handleCategoryChange = (category: string) => {
        setCurrentCategory(category === currentCategory ? null : category);
    };

    return (
        <div suppressHydrationWarning className="min-h-screen p-8 text-white bg-[#121212]">
            <div className="max-w-2xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-emerald-300 mb-4">
                        Projects <Separator className="my-4" />
                    </h1>
                    <div className="flex justify-center space-x-4 mb-6">
                        <Button
                            variant="ghost"
                            onClick={() => handleCategoryChange('')}
                            className={`${!currentCategory ? 'text-emerald-400' : 'text-gray-400'
                                } hover:text-emerald-300`}
                        >
                            All
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => handleCategoryChange('web')}
                            className={`${currentCategory === 'web' ? 'text-emerald-400' : 'text-gray-400'
                                } hover:text-emerald-300`}
                        >
                            Web
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => handleCategoryChange('mobile')}
                            className={`${currentCategory === 'mobile' ? 'text-emerald-400' : 'text-gray-400'
                                } hover:text-emerald-300`}
                        >
                            Mobile
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => handleCategoryChange('ml/ai')}
                            className={`${currentCategory === 'ml/ai' ? 'text-emerald-400' : 'text-gray-400'
                                } hover:text-emerald-300`}
                        >
                            ML/AI
                        </Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {sortedProjects.map((project, index) => (
                    <Card key={index} className="bg-gray-800">
                        {project.image && (
                            <Image src={project.image} alt={project.title} width={500} height={500} className=" pt-3 px-3 w-full object-cover mb-4" />
                        )}
                        <CardHeader className='text-2xl text-emerald-400 al'>{project.title}</CardHeader>
                        <CardContent className='text-md text-emerald-600 al'>{project.description}</CardContent>
                        <CardDescription>
                            <div className="flex items-center justify-between mb-3 mx-5">
                                <p className="text-emerald-300">{project.res}</p>
                                <div>
                                    {project.deploymentLink && (
                                        <Button variant="ghost" className="project-icon-button mr-2 mb-2 z-30 shadow-sm shadow-emerald-500 px-4 py-3">
                                            <a href={project.deploymentLink.toString()} target="_blank">
                                                <ArrowUpRight
                                                    size={24}
                                                    className='text-slate-200' />
                                            </a>
                                        </Button>
                                    )}
                                    {project.githubLink && (
                                        <Button variant="ghost" className="project-icon-button  z-30 shadow-sm shadow-emerald-500 px-4 py-3">
                                            <a href={project.githubLink.toString()} target="_blank">
                                                <Github
                                                    size={24}
                                                    className='text-slate-200' />
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </CardDescription>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
