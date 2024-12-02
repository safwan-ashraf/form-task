import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/Input/input";
import { Button } from "@/components/ui/Button/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/Form/form";
import { updateStep1 } from "@/redux/formSlice";
import { Card } from "@/components/ui/card";

// Define the Zod schema
const Step1Schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
});

const Step1 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formData = useSelector((state) => state.form.step1);

    const form = useForm({
        defaultValues: formData,
        resolver: zodResolver(Step1Schema),
    });

    const onSubmit = (data) => {
        dispatch(updateStep1(data));
        navigate("/step-2");
    };

    return (
        <Card className="p-6 w-[420px]">
            <div className="">
                <h1 className="text-xl font-bold mb-4">Step 1</h1>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        {/* Name Field */}
                        <FormField
                            name="name"
                            render={({ field }) => (
                                <FormItem className="flex flex-col justify-start">
                                    <FormLabel className="self-baseline text-gray-700">
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            id="name"
                                            placeholder="Enter your name"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email Field */}
                        <FormField
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex flex-col justify-start">
                                    <FormLabel className="self-baseline text-gray-700">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            id="email"
                                            type="text"
                                            placeholder="Enter your email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full">
                            Next
                        </Button>
                    </form>
                </Form>
            </div>
        </Card>
    );
};

export default Step1;
