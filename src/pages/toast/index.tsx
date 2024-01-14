import {ToastProvider} from "../../components/providers/ToastProvider";

export const index = (): JSX.Element => {
    return (
        <ToastProvider>
            <div>
                <h1>Hello</h1>
            </div>
        </ToastProvider>
    )
}

export default index

