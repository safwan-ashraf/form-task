import React from "react";
import { Input } from "./input"; // Adjust the import path as needed

export default {
    title: "ShadCN/Components/Input",
    component: Input,
    argTypes: {
        placeholder: {
            control: "text",
            defaultValue: "Enter text...",
        },
        type: {
            control: "select",
            options: ["text", "password", "email", "number", "search"],
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg"],
        },
        disabled: {
            control: "boolean",
        },
    },
    tags: ["autodocs"],
};

// Default Input Story
export const Default = (args) => (
    <Input {...args} type="text" placeholder="Default Input" />
);

// Password Input Story
export const Password = (args) => (
    <Input {...args} type="password" placeholder="Enter your password" />
);

// Email Input Story
export const Email = (args) => (
    <Input {...args} type="email" placeholder="Enter your email" />
);

// Small Input Story
export const Small = (args) => (
    <Input {...args} size="sm" placeholder="Small Input" />
);

// Large Input Story
export const Large = (args) => (
    <Input {...args} size="lg" placeholder="Large Input" />
);

// Disabled Input Story
export const Disabled = (args) => (
    <Input {...args} disabled={true} placeholder="Disabled Input" />
);
