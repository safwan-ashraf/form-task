import React, { useEffect } from "react";
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
import { updateStep2 } from "@/redux/formSlice";
import { Card } from "@/components/ui/card";

const Step2Schema = z.object({
    address: z.string().min(1, "Address is required"),
    phone: z
        .string()
        .regex(/^\d{10}$/, "Phone number must be a 10-digit number"),
});

const Step2 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formData = useSelector((state) => state.form.step2);
    const step1Data = useSelector((state) => state.form.step1);

    const form = useForm({
        defaultValues: formData,
        resolver: zodResolver(Step2Schema),
    });

    const onSubmit = (data) => {
        dispatch(updateStep2(data));
        navigate("/summary");
    };

    useEffect(() => {
        if (!step1Data.name || !step1Data.email) {
            navigate("/step-1");
        }
    }, [step1Data]);

    return (
        <Card className="p-6 w-[420px]">
            <h1 className="text-xl font-bold mb-4">Step 2</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    {/* Address Field */}
                    <FormField
                        name="address"
                        render={({ field }) => (
                            <FormItem className="flex flex-col justify-start">
                                <FormLabel className="self-baseline text-gray-700">
                                    Address
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        id="address"
                                        placeholder="Enter your address"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Phone Field */}
                    <FormField
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="flex flex-col justify-start">
                                <FormLabel className="self-baseline text-gray-700">
                                    Phone
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        maxLength={10}
                                        onChange={(e) => {
                                            const value =
                                                e.target.value.replace(
                                                    /\D/g,
                                                    ""
                                                );
                                            form.setValue("phone", value, {
                                                // shouldValidate: true,
                                            });
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Buttons */}
                    <div className="flex justify-between">
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => navigate("/step-1")}
                        >
                            Back
                        </Button>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        </Card>
    );
};

export default Step2;
