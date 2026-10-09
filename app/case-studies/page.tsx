import type { Metadata } from 'next';
import { PageIntro, ProjectCard, ContactInvite } from '@/components/ui';
import { projects } from '@/content/site';
export const metadata:Metadata={title:'Case Studies',description:'Eight project stories: the problem, Iretioluwa’s personal contribution, deliverables, tools and supported outcomes.'};
export default function Cases(){return <><PageIntro eyebrow="CASE STUDIES / SELECTED & EXPLORATORY WORK" title="The problem. My contribution." emphasis="What changed." description="From live products to collaborative concepts, these stories explore the decisions, delivery and learning behind my work."/><section className="container collection"><div className="collection-top"><span>08 PROJECT STORIES</span><span>Live products · Group studies · In development</span></div><div className="project-grid">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section><ContactInvite/></>}
