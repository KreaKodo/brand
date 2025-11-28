import { FC, useId } from 'react';

export interface KreaKodoBrandProps {
  /** Additional CSS classes */
  className?: string;
  /** Text size variant */
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

/**
 * KreaKodo brand component with glitch effect.
 * Self-contained - no external CSS required.
 *
 * @example
 * ```tsx
 * import { KreaKodoBrand } from '@kreakodo/brand';
 *
 * <footer>
 *   <KreaKodoBrand size="sm" />
 * </footer>
 * ```
 */
export const KreaKodoBrand: FC<KreaKodoBrandProps> = ({
  className = '',
  size = 'sm',
  color = '#ddd',
}) => {
  const id = useId().replace(/:/g, '');

  const fontSize = {
    sm: '0.875rem',
    md: '1.125rem',
    lg: '1.5rem',
  }[size];

  return (
    <>
      <style>{`
        a.link-${id} {
          display: flex;
          gap: 0.3em;
          text-decoration: none;
          transition: all .3s ease;
        }

        a.link-${id}:hover {
          opacity: 0.85;
        }

        .kb-${id} {
          position: relative;
          display: flex;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
          font-size: ${fontSize};
          font-weight: 600;
          color: ${color};
          letter-spacing: 0.05em;
          background: transparent;
        }

        .kb-${id}.d1 {
          animation: kb-main-${id} 1.7s linear infinite;
        }
        .kb-${id}.d2 {
          animation: kb-main-${id} 2.5s linear infinite;
        }

        .kb-${id}::before,
        .kb-${id}::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        .kb-${id}::before {
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        }
        .kb-${id}.d1::before {
          animation: kb-top-${id} 2s linear infinite;
        }
        .kb-${id}.d2::before {
          animation: kb-top-${id} 3.2s linear infinite;
        }
        .kb-${id}::after {
          animation: kb-btm-${id} 3.5s linear infinite;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
        }
        @keyframes kb-main-${id} {
          2%, 64% { transform: translate(0.05em, 0) skew(0deg); }
          4%, 60% { transform: translate(-0.025em, 0) skew(0deg); }
          62% { transform: translate(0, 0) skew(5deg); }
        }
        @keyframes kb-top-${id} {
          2%, 64% { transform: translate(0.05em, 0em); }
          4%, 60% { transform: translate(-0.05em, 0em); }
          62% { transform: translate(0.8em, -0.07em) skew(-13deg); }
        }
        @keyframes kb-btm-${id} {
          2%, 64% { transform: translate(-0.02em, 0); }
          4%, 60% { transform: translate(-0.02em, 0); }
          62% { transform: translate(-0.6em, 0.1em) skew(21deg); }
        }
      `}</style>
      <a
        href="https://kreakodo.com"
        target="_blank"
        rel="noreferrer"
        title="Coded by KreaKodo"
        className={`link-${id}`}
      >
        <span className={`kb-${id} d1 ${className}`} data-text="Krea">
          Krea
        </span>
        <span className={`kb-${id} d2 ${className}`} data-text="Kodo">
          Kodo
        </span>
      </a>
    </>
  );
};

export default KreaKodoBrand;
