# @kreakodo/brand

KreaKodo brand component with glitch effect. Self-contained React component with no external CSS dependencies.

## Installation

```bash
# From GitHub
npm install github:kreakodo/brand

# Or with a specific tag/version
npm install github:kreakodo/brand#v1.0.0
```

## Usage

```tsx
import { KreaKodoBrand } from '@kreakodo/brand';

function Footer() {
  return (
    <footer>
      <KreaKodoBrand size="sm" />
    </footer>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'sm'` | Text size variant |
| `className` | `string` | `''` | Additional CSS classes |

## Sizes

- `sm` - 14px (footer)
- `md` - 18px (standard)
- `lg` - 24px (header)
