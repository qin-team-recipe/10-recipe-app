import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Header",
    isUserIcon: true,
  },
};

export const SearchBar: Story = {
  args: {
    isSearchBar: true,
  },
};
