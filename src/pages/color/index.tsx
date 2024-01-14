import React from "react";
import ColorProvider from "../../components/providers/COPProvider";
import App from "../../components/App";


const ColorApp = () => {

    return (
        <ColorProvider>
            <App/>
        </ColorProvider>
    );
}

export default ColorApp;
