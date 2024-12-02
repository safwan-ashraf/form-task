// src/stories/Button.stories.js
import React from 'react';
import { Button, buttonVariants } from './button'; // Adjust the import path as needed
// import { Children } from 'react';

export default {
  title: 'ShadCN/Components/Button', // The title of the story in the Storybook UI
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    // children:{
    //     control: {
    //       type: 'text',
    //     //   placeholder: 'Button Text',
    //     default: 'Hii'
    //     },
    //   },
    
  },
  tags: ['autodocs'],

};

// Default Button Story
export const Default = (args) => <Button {...args} variant="default">Default</Button>;

// Destructive Button Story
export const Destructive = (args) => <Button {...args} variant="destructive">Destructive Button</Button>;

// Outline Button Story
export const Outline = (args) => <Button {...args} variant="outline">Outline Button</Button>;

// Secondary Button Story
export const Secondary = (args) => <Button {...args} variant="secondary">Secondary Button</Button>;

// Ghost Button Story
export const Ghost = (args) => <Button {...args} variant="ghost">Ghost Button</Button>;

// Link Button Story
export const Link = (args) => <Button {...args} variant="link">Link Button</Button>;

// Small Button Story
export const Small = (args) => <Button {...args} size="sm">Small Button</Button>;

// Large Button Story
export const Large = (args) => <Button {...args} size="lg">Large Button</Button>;

// Icon Button Story (using icon as placeholder)
export const IconButton = (args) => (
  <Button {...args}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2L4 6H6V10H10V6H12L8 2Z" fill="currentColor" />
    </svg>
    Icon Button
  </Button>
);
