import { Button } from "@/components/ui/Button/button";
import { Card } from "@/components/ui/card";
import { resetForm } from "@/redux/formSlice";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Summary = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form); // Access the full form state
    console.log(formData);

    const navigate = useNavigate();

    const handleEdit = (step) => {
        navigate(`/step-${step}`); // Navigate to the specified step for editing
    };

    const handleReset = () => {
        dispatch(resetForm());
    };

    useEffect(() => {
        if (
            !formData.step1.name ||
            !formData.step1.email ||
            !formData.step2.address ||
            !formData.step2.phone
        ) {
            navigate("/step-1");
        }
    }, [formData]);

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Summary</h1>
            <div className="space-y-4">
                {/* Step 1 Summary */}
                <Card className="p-6 w-[360px] flex flex-col gap-2 items-start">
                    <h2 className="text-lg font-semibold self-center">
                        Step 1
                    </h2>
                    <p>
                        <span className="font-medium">Name:</span>{" "}
                        {formData.step1.name || "N/A"}
                    </p>
                    <p>
                        <span className="font-medium">Email:</span>{" "}
                        {formData.step1.email || "N/A"}
                    </p>
                    <Button
                        onClick={() => handleEdit(1)}
                        variant="secondary"
                        className="mt-2 self-end"
                    >
                        Edit
                    </Button>
                </Card>

                {/* Step 2 Summary */}
                <Card className="p-6 w-[360px] flex flex-col gap-2 items-start">
                    <h2 className="text-lg font-semibold self-center">
                        Step 2
                    </h2>
                    <p>
                        <span className="font-medium">Address:</span>{" "}
                        {formData.step2.address || "N/A"}
                    </p>
                    <p>
                        <span className="font-medium">Phone:</span>{" "}
                        {formData.step2.phone || "N/A"}
                    </p>
                    <Button
                        onClick={() => handleEdit(2)}
                        variant="secondary"
                        className="mt-3 self-end"
                    >
                        Edit
                    </Button>
                </Card>

                <Button onClick={() => handleReset()} className="w-full">
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default Summary;
