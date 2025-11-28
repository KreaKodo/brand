import type { Meta, StoryObj } from '@storybook/react';
import { KreaKodoBrand } from './index';

const DarkContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: '#0e0e0e',
    padding: '4rem',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {children}
  </div>
);

const meta: Meta<typeof KreaKodoBrand> = {
  title: 'KreaKodoBrand',
  component: KreaKodoBrand,
  decorators: [(Story) => <DarkContainer><Story /></DarkContainer>],
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
type Story = StoryObj<typeof KreaKodoBrand>;

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const CustomColor: Story = {
  args: {
    size: 'md',
    color: '#00ff88',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <KreaKodoBrand size="sm" />
      <KreaKodoBrand size="md" />
      <KreaKodoBrand size="lg" />
    </div>
  ),
};
