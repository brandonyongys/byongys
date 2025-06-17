import React from 'react';
import yaml from 'js-yaml';

// 👇 This works with Vite (and possibly with CRA + config overrides)
import cvFile from '../config/cv.yml?raw';

const cvData = yaml.load(cvFile);

export default function CV() {
    // Split sections into work exp and others
    const workExperience = cvData.sections.find(section => section.title.toLowerCase().includes('work'));
    const contactDetails = cvData.sections.filter(section => section.title.toLowerCase().includes('contact'));
    const otherSections = cvData.sections.filter(section => 
        section.title.toLowerCase().includes('certifications') ||
        section.title.toLowerCase().includes('education')
    );

    return (
        <article className="max-w-4xl mx-auto p-8 my-8 bg-gray-50 rounded shadow">
            <h1 className="text-4xl font-bold mb-4 text-orange-800 text-center">{cvData.name}</h1>

            <div className="text-justify mb-8">
                <h3 className="text-2xl font-semibold text-orange-700 border-b-2 border-orange-300 pb-1 mb-1">Summary</h3>
                <p className="text-gray-600">{cvData.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Left side: Work experience */}
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-semibold text-orange-700 border-b-2 border-orange-300 pb-1 mb-1">{workExperience.title}</h3>
                    <div className="space-y-3">
                        {workExperience.contents.map((item, idx) => (
                            <div key={idx} className="border-b pb-3">
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                        <p className="text-gray-600">{item.institution}</p>
                                    </div>
                                    <span className="text-sm text-gray-500 whitespace-nowrap">{item.year}</span>
                                </div>
                                {item.description && (
                                    <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
                                        {item.description.map((desc, didx) => (
                                            <li key={didx} className="mb-1">{desc}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right side: Others */}
                <div className="space-y-2">
                    {contactDetails.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-2xl font-semibold text-orange-700 border-b-2 border-orange-300 pb-1 mb-1">{section.title}</h3>
                            <div className="space-y-1">
                                {section.contents.map((item, idx) => (
                                    <div key={idx} className="flex items-center">
                                        <span className="font-semibold text-gray-800">{item.label}:</span>
                                        <span className="ml-2 text-gray-600">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                
                    {otherSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-2xl font-semibold text-orange-700 border-b-2 border-orange-300 pb-1 mb-1">{section.title}</h3>
                            <div className="space-y-3">
                                {section.contents.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-start mb-1">
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                                <p className="text-gray-600">{item.institution}</p>
                                            </div>
                                            <span className="text-sm text-gray-500 whitespace-nowrap">{item.year}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}
