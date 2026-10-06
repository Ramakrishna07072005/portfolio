import React, { useEffect, useState } from 'react';
import { siteConfig } from '../config/site';
import { 
  Star, 
  GitFork, 
  ExternalLink, 
  Code2, 
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { Github } from '../components/Icons';

export default function GithubFeed() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!siteConfig.githubFeed.enabled) {
      setLoading(false);
      return;
    }

    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(false);
        const username = siteConfig.githubFeed.username;
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${siteConfig.githubFeed.limit || 4}`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        );

        if (!res.ok) {
          throw new Error(`GitHub API status: ${res.status}`);
        }

        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        } else {
          // If the profile is fresh or has no public repos yet
          setError(true);
        }
      } catch (err) {
        // Graceful fallback on rate limit or offline
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (!siteConfig.githubFeed.enabled) {
    return null;
  }

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-carbon-850">
      
      {/* Sub-header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-signal-cyan">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source &amp; Code</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            Latest GitHub Activity
          </h3>
        </div>

        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-carbon-900 border border-carbon-800 hover:border-carbon-700 text-xs font-mono text-carbon-300 hover:text-white transition-colors self-start sm:self-auto"
        >
          <span>Visit @{siteConfig.githubFeed.username}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="p-4 rounded-xl bg-carbon-900/60 border border-carbon-800 animate-pulse space-y-3">
              <div className="h-4 bg-carbon-800 rounded w-2/3" />
              <div className="h-3 bg-carbon-800 rounded w-full" />
              <div className="h-3 bg-carbon-800 rounded w-1/2" />
            </div>
          ))}
        </div>
      )}

      {/* Loaded Repos */}
      {!loading && !error && repos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-carbon-900/60 border border-carbon-800 hover:border-copper-500/40 hover:bg-carbon-900 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-carbon-400">
                  <span className="flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5 text-copper-400" />
                    <span>{repo.language || 'Embedded C'}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-mono text-sm font-bold text-white group-hover:text-copper-400 transition-colors truncate">
                  {repo.name}
                </h4>
                <p className="text-xs text-carbon-400 line-clamp-2">
                  {repo.description || 'Hardware source code, schematics, and embedded firmware repository.'}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-carbon-400 pt-2 border-t border-carbon-800/60">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400" />
                  <span>{repo.stargazers_count}</span>
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  <span>{repo.forks_count}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Graceful Fallback if offline / rate-limited / username not found */}
      {!loading && error && (
        <div className="p-5 rounded-xl bg-carbon-900/60 border border-carbon-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-mono font-semibold text-white flex items-center gap-2">
              <Github className="w-4 h-4 text-copper-400" />
              Hardware Code Repositories on GitHub
            </h4>
            <p className="text-xs text-carbon-400">
              Access the complete firmware repositories, KiCad circuit designs, and documentation directly on GitHub.
            </p>
          </div>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-carbon-800 hover:bg-carbon-700 text-xs font-mono text-white border border-carbon-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Open GitHub Profile</span>
          </a>
        </div>
      )}

    </section>
  );
}
