import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { KreaKodoBrand } from './index';
const DarkContainer = ({ children }) => (_jsx("div", { style: {
        background: '#0e0e0e',
        padding: '4rem',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }, children: children }));
const meta = {
    title: 'KreaKodoBrand',
    component: KreaKodoBrand,
    decorators: [(Story) => _jsx(DarkContainer, { children: _jsx(Story, {}) })],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        color: {
            control: 'color',
        },
    },
};
export default meta;
export const Small = {
    args: {
        size: 'sm',
    },
};
export const Medium = {
    args: {
        size: 'md',
    },
};
export const Large = {
    args: {
        size: 'lg',
    },
};
export const CustomColor = {
    args: {
        size: 'md',
        color: '#00ff88',
    },
};
export const AllSizes = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }, children: [_jsx(KreaKodoBrand, { size: "sm" }), _jsx(KreaKodoBrand, { size: "md" }), _jsx(KreaKodoBrand, { size: "lg" })] })),
};
