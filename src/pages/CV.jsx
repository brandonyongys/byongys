import { usePageMeta } from '../hooks/usePageMeta';
import yaml from 'js-yaml';

import cvFile from '../config/cv.yml?raw';

const cvData = yaml.load(cvFile);
const { name, summary, sections } = cvData;
const workExperience = sections.find(s => s.title.toLowerCase().includes('work')) || { title: 'Work Experience', contents: [] };
const contactDetails = sections.filter(s => s.title.toLowerCase().includes('contact'));
const otherSections = sections.filter(s => !s.title.toLowerCase().includes('work') && !s.title.toLowerCase().includes('contact'));

const publicationSections = otherSections.filter(s => s.title.toLowerCase().includes('publication'));
const sidebarSections = otherSections.filter(s => !s.title.toLowerCase().includes('publication'));

export default function CV() {

    usePageMeta({ title: 'CV', path: '/cv' });

    return (
        <article className="max-w-4xl mx-auto p-8 my-8 bg-surface-raised rounded-sm border border-border-subtle">
            <h1 className="font-display text-4xl font-bold mb-4 text-text-primary text-center">{name}</h1>

            <div className="text-justify mb-8">
                <h3 className="font-display text-2xl font-semibold text-accent border-b-2 border-border-subtle pb-1 mb-1">Summary</h3>
                <p className="text-text-secondary">{summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div>
                        <h3 className="font-display text-2xl font-semibold text-accent border-b-2 border-border-subtle pb-1 mb-1">{workExperience.title}</h3>
                        <div className="space-y-3">
                            {workExperience.contents.map((item, idx) => (
                                <div key={idx} className="border-b border-border-subtle pb-3">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-display text-lg font-semibold text-text-primary">{item.title}</h4>
                                        <span className="text-sm text-text-muted whitespace-nowrap ml-4">{item.year}</span>
                                    </div>
                                    <p className="text-text-secondary">{item.institution}</p>
                                    {item.description && (
                                        <ul className="list-disc list-inside text-text-secondary text-sm mt-2">
                                            {item.description.map((desc, didx) => (
                                                <li key={didx} className="mb-1">{desc}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {publicationSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-display text-2xl font-semibold text-accent border-b-2 border-border-subtle pb-1 mb-1">{section.title}</h3>
                            <div className="space-y-4">
                                {section.contents.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-start mb-0.5">
                                            <h4 className="font-display font-semibold text-text-primary leading-snug">{item.title}</h4>
                                            <span className="text-sm text-text-muted whitespace-nowrap ml-4">{item.year}</span>
                                        </div>
                                        {item.institution && (
                                            <p className="text-text-secondary italic text-sm mb-1">{item.institution}</p>
                                        )}
                                        {item.doi && (
                                            <a
                                                href={item.doi}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block text-xs font-mono text-accent border border-border-subtle rounded px-2 py-0.5 hover:bg-accent-subtle transition-colors"
                                            >
                                                DOI ↗
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    {contactDetails.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-display text-2xl font-semibold text-accent border-b-2 border-border-subtle pb-1 mb-1">{section.title}</h3>
                            <div className="space-y-1">
                                {section.contents.map((item, idx) => {
                                    const isSocial = ['github', 'linkedin'].includes(item.label.toLowerCase());

                                    return (
                                        <div key={idx} className="flex items-center">
                                            <span className="font-semibold text-text-primary">{item.label}:</span>
                                            <span className="ml-2 text-text-secondary">
                                                {isSocial ? (
                                                    <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
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

                    {sidebarSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-display text-2xl font-semibold text-accent border-b-2 border-border-subtle pb-1 mb-1">{section.title}</h3>
                            <div className="space-y-3">
                                {section.contents.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-display font-semibold text-text-primary">{item.title}</h4>
                                            <span className="text-sm text-text-muted whitespace-nowrap ml-4">{item.year}</span>
                                        </div>
                                        <p className="text-text-secondary">{item.institution}</p>
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
