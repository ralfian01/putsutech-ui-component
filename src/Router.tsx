import { BrowserRouter, Routes, Route } from "react-router-dom";
import Component from "./Components/Component";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/buttons" element={<Component.button />} />
                <Route path="/radios" element={<Component.radio />} />
            </Routes>
        </BrowserRouter>
    );
}