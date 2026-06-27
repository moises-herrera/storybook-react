import type { Meta, StoryObj } from '@storybook/react-vite';
import { MyLabel, type MyLabelProps } from '../components/MyLabel';

const meta: Meta<MyLabelProps> = {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
    },
    color: {
      control: 'select',
    },
    fontColor: { control: 'color' },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic Label',
    size: 'h1',
  },
};

export const AllCaps: Story = {
  args: {
    label: 'All Caps Label',
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    color: 'secondary',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color Label',
    fontColor: '#FF5733',
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: 'Custom Color Label',
    size: 'h1',
    fontColor: 'white',
    backgroundColor: 'black',
  },
};
