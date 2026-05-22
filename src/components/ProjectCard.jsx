import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

export default function ProjectCard({ project }) {
  return (
    <div className="border border-border-subtle bg-surface-raised rounded-sm overflow-hidden hover:border-border-medium transition-colors">
      {project.image && (
        <div className="h-36 overflow-hidden bg-surface-hover">
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-full object-cover object-top opacity-80"
          />
        </div>
      )}

      <div className="p-5">
        <Link to={`/projects/${project.slug}`}>
          <h2 className="font-display text-lg font-semibold text-text-primary hover:text-accent transition-colors leading-snug mb-2">
            {project.title}
          </h2>
        </Link>

        <p className="font-body text-sm text-text-secondary leading-relaxed mb-3">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          {project.updated_date ? (
            <span className="font-mono text-xs text-text-muted">
              Updated {formatDate(project.updated_date)}
            </span>
          ) : (
            <span className="font-mono text-xs text-text-muted">
              {formatDate(project.published_date)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
