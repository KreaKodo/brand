import { FC } from 'react';
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}
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
export declare const KreaKodoBrand: FC<KreaKodoBrandProps>;
export default KreaKodoBrand;
//# sourceMappingURL=index.d.ts.map