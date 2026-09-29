import { useMemo, useRef, useState } from 'react';
import { domains as allDomains, type Domain, type Project } from '../data';

function Arrow() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function ProjectDirectory({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState('');
  const [domain, setDomain] = useState<'All' | Domain>('All');
  const [everFiltered, setEverFiltered] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const domainCounts = useMemo(() => {
    const counts = new Map<Domain, number>();
    for (const p of projects) counts.set(p.domain, (counts.get(p.domain) ?? 0) + 1);
    return counts;
  }, [projects]);

  const availableDomains = allDomains.filter(d => domainCounts.has(d));
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => projects.filter(p => {
    if (domain !== 'All' && p.domain !== domain) return false;
    if (!normalizedQuery) return true;
    const haystack = [p.name, p.category, p.domain, p.blurb, ...p.tags].join(' ').toLowerCase();
    return haystack.includes(normalizedQuery);
  }), [projects, domain, normalizedQuery]);

  function selectDomain(next: 'All' | Domain) {
    setDomain(next);
    setEverFiltered(true);
  }

  function clearQuery() {
    setQuery('');
    setEverFiltered(true);
    searchInputRef.current?.focus();
  }

  function reset() {
    setQuery('');
    setDomain('All');
    setEverFiltered(true);
    searchInputRef.current?.focus();
  }

  const countText = filtered.length === projects.length
    ? `Showing all ${projects.length} projects`
    : `${filtered.length} of ${projects.length} projects match`;

  return <>
    <div className="v-directory-controls">
      <div className="v-directory-search">
        <label htmlFor="project-search">Search projects</label>
        <div className="v-directory-search-row">
          <input ref={searchInputRef} id="project-search" type="search" value={query} placeholder="Name, domain, or technology" onChange={e => { setQuery(e.target.value); setEverFiltered(true); }} />
          {query && <button type="button" className="v-directory-clear" onClick={clearQuery}>Clear</button>}
        </div>
      </div>
      <div className="v-directory-filters" role="group" aria-label="Filter by industry">
        <button type="button" aria-pressed={domain === 'All'} onClick={() => selectDomain('All')}>All <span>{projects.length}</span></button>
        {availableDomains.map(d => <button key={d} type="button" aria-pressed={domain === d} onClick={() => selectDomain(d)}>{d} <span>{domainCounts.get(d)}</span></button>)}
      </div>
    </div>
    <p className="v-directory-count" role="status" aria-live="polite">{countText}</p>
    {filtered.length === 0
      ? <div className="v-directory-empty">
          <p>No projects match {query ? `“${query}”` : 'the selected filter'}{domain !== 'All' ? ` in ${domain}` : ''}.</p>
          <button type="button" className="v-directory-reset" onClick={reset}>Show all projects</button>
        </div>
      : <div className={everFiltered ? 'v-directory-grid v-directory-grid--animate' : 'v-directory-grid'} key={everFiltered ? `${domain}|${normalizedQuery}` : 'initial'}>
          {filtered.map((p, i) => <article key={p.name} className="v-directory-card" style={{ animationDelay: `${Math.min(i * 20, 120)}ms` }}>
            <div className="v-directory-card-head"><h3>{p.name}</h3><span className="v-project-domain">{p.domain}</span></div>
            <p className="v-directory-metric">{p.metric}</p>
            <p className="v-directory-blurb">{p.blurb}</p>
            {p.tags.length > 0 && <div className="v-directory-tags" aria-label="Technologies">{p.tags.slice(0, 3).map(t => <span key={t}>{t}</span>)}</div>}
            {!!p.links?.length && <div className="v-directory-links" role="group" aria-label={`${p.name} links`}>{p.links.map(l => <a href={l.url} key={l.url} target="_blank" rel="noreferrer" aria-label={`${p.name}: ${l.label} (opens in a new tab)`}>{l.label} <Arrow /></a>)}</div>}
          </article>)}
        </div>}
  </>;
}
