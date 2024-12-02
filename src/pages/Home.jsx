import { Button } from "@/components/ui/Button/button";
import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="text-3xl  font-bold underline">Register</h1>
            <Button onClick={() => navigate("/register")}>Click me</Button>
        </div>
    );
};

export default Home;
