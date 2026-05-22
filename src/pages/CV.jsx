import { usePageMeta } from '../hooks/usePageMeta';
import yaml from 'js-yaml';

import cvFile from '../config/cv.yml?raw';

const cvData = yaml.load(cvFile);
const { name, summary, sections } = cvData;
const workExperience = sections.find(s => s.title.toLowerCase().includes('work')) || { title: 'Work Experience', contents: [] };
const contactDetails = sections.filter(s => s.title.toLowerCase().includes('contact'));
const otherSections = sections.filter(s => !s.title.toLowerCase().includes('work') && !s.title.toLowerCase().includes('contact'));

export default function CV() {

    usePageMeta({ title: 'CV', path: '/cv' });

    return (
        <article className="max-w-4xl mx-auto p-8 my-8 bg-gray-custom-bg rounded shadow">
            <h1 className="text-4xl font-bold mb-4 text-brand-text-main text-center">{name}</h1>

            <div className="text-justify mb-8">
                <h3 className="text-2xl font-semibold text-brand-text-accent border-b-2 border-brand-primary-border pb-1 mb-1">Summary</h3>
                <p className="text-gray-custom-muted">{summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Left side: Work experience */}
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-2xl font-semibold text-brand-text-accent border-b-2 border-brand-primary-border pb-1 mb-1">{workExperience.title}</h3>
                    <div className="space-y-3">
                        {workExperience.contents.map((item, idx) => (
                            <div key={idx} className="border-b pb-3">
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-custom-text">{item.title}</h4>
                                        <p className="text-gray-custom-muted">{item.institution}</p>
                                    </div>
                                    <span className="text-sm text-gray-custom-dim whitespace-nowrap">{item.year}</span>
                                </div>
                                {item.description && (
                                    <ul className="list-disc list-inside text-gray-custom-muted text-sm mt-2">
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
                            <h3 className="text-2xl font-semibold text-brand-text-accent border-b-2 border-brand-primary-border pb-1 mb-1">{section.title}</h3>
                            <div className="space-y-1">
                                {section.contents.map((item, idx) => {
                                    const isSocial = ['github', 'linkedin'].includes(item.label.toLowerCase());

                                    return (
                                        <div key={idx} className="flex items-center">
                                            <span className="font-semibold text-gray-custom-text">{item.label}:</span>
                                            <span className="ml-2 text-gray-custom-muted">
                                                {isSocial ? (
                                                    <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-brand-text-accent hover:underline">
                                                        {item.value.replace(/^https?:\/\//, '')}
                                                    </a>
                                                ) : item.value}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {otherSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-2xl font-semibold text-brand-text-accent border-b-2 border-brand-primary-border pb-1 mb-1">{section.title}</h3>
                            <div className="space-y-3">
                                {section.contents.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-start mb-1">
                                            <div>
                                                <h4 className="font-semibold text-gray-custom-text">{item.title}</h4>
                                                <p className="text-gray-custom-muted">{item.institution}</p>
                                            </div>
                                            <span className="text-sm text-gray-custom-dim whitespace-nowrap">{item.year}</span>
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
