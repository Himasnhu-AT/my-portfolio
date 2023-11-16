import { Separator } from '@/components/ui/separator';
import React from 'react';

interface TimelineItem {
    title: string;
    date: string;
    description?: string;
}

const timelineData: TimelineItem[] = [
    {
        title: 'First C++ Code',
        date: '2017',
    },
    {
        title: 'First HTMl, CSS Webpage',
        date: '2018',
    },
    {
        title: 'First Batch Script, Quiz App',
        date: '2018',
    },
    {
        title: 'First ML Model',
        date: '2020',
    },
    {
        title: 'First Android Application',
        date: '2022',
    },
    {
        title: 'College + Ongoing Developer journey :)',
        date: 'Ongoing',
        description: "Student at NIT-KKR. I am still learning new things and trying to improve my skills. Right now have an arsenal of 21 Languages, frameworks, and libraries. Exloring ML further and trying to make some cool projects."
    },
];

const AboutMe: React.FC = () => {
    return (
        <div className="min-h-screen p-8 text-white relative">
            <div className="max-w-2xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-emerald-300 mb-4 ">About Me  <Separator className="my-4" /></h1>

                </div>

                <section className="my-6 flex flex-col md:flex-row">
                    <div className="md:w-2/3">
                        <h2 className="text-3xl font-bold text-emerald-300 mb-2">Introduction</h2>
                        <p className="text-gray-300">
                            Hi, Himanshu, a passionate and results-driven Developer with expertise in Web Development, Mobile Application development, Machine Learning, and Data Science. I have a strong focus on the quality and functionality of the applications. I am a quick learner and a team player who is always ready to learn new technologies and work with new people.
                        </p>
                    </div>
                </section>
                <div className=' lg:mt-60 sm:mt '>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-emerald-300 mb-4 justify-start items-start">My Development Time Line </h1>
                    </div>
                    <ol className="relative  border-s border-gray-200 my-9">
                        {timelineData.map((item, index) => (
                            <li key={index} className={`mb-10 ms-6 ${index !== 0 ? 'before:content-[counter(line) " "] before:block' : ''}`}>
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-8 ring-white">

                                </span>
                                <div className='shadow-md shadow-gray-700 p-2'>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-emerald-400">{item.title}</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-emerald-200 text-muted-foreground">{item.date}</time>
                                    {item.description && <p className="mb-4 text-base font-normal text-emerald-200 text-muted-foreground">{item.description}</p>}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
