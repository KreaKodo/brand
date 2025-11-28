import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
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
export const KreaKodoBrand = ({ className = '', size = 'sm', color = '#ddd', }) => {
    const id = useId().replace(/:/g, '');
    const fontSize = {
        sm: '0.875rem',
        md: '1.125rem',
        lg: '1.5rem',
    }[size];
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: `
        .kb-${id} {
          position: relative;
          display: inline-block;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
          font-size: ${fontSize};
          font-weight: 600;
          color: ${color};
          letter-spacing: 0.05em;
          background: transparent;
          animation: kb-main-${id} 1s linear infinite;
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
          animation: kb-top-${id} 2s linear infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        }
        .kb-${id}::after {
          animation: kb-btm-${id} 3.5s linear infinite;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
        }
        @keyframes kb-main-${id} {
          2%, 64% { transform: translate(0.15em, 0) skew(0deg); }
          4%, 60% { transform: translate(-0.15em, 0) skew(0deg); }
          62% { transform: translate(0, 0) skew(5deg); }
        }
        @keyframes kb-top-${id} {
          2%, 64% { transform: translate(0.15em, -0.15em); }
          4%, 60% { transform: translate(-0.15em, 0.15em); }
          62% { transform: translate(0.8em, -0.07em) skew(-13deg); }
        }
        @keyframes kb-btm-${id} {
          2%, 64% { transform: translate(-0.15em, 0); }
          4%, 60% { transform: translate(-0.15em, 0); }
          62% { transform: translate(-1.4em, 0.3em) skew(21deg); }
        }
      ` }), _jsx("span", { className: `kb-${id} ${className}`, "data-text": "KreaKodo", children: "KreaKodo" })] }));
};
export default KreaKodoBrand;
