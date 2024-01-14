import {useColors} from "./providers/COPProvider";
import {useEffect} from "react";

export default function App() {
    const { addLayer,layers} = useColors();


    useEffect(() => {
        // console.log(colors)
        // rateColor('0175d1f0-a8c6-41bf-8d02-df5734d829a4', 'red')
        // console.log(colors)
        addLayer(
            [{
                name: "test",
                isActive: false,
                group: "default",
                params: null,
            }]
        )
        console.log(layers)
    }, []);

    return (
        <>
            <h1>App</h1>
        </>
    );
}
