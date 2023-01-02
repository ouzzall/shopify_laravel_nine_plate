import React from "react";
import { createRoot } from "react-dom/client";

export default function ReactApp() {
    return <p>Hello from Shopify React Laravel</p>;
}

if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<ReactApp />);
}
