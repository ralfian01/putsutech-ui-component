import {Button1, ButtonType} from "./_1/Elem";

export default function Button() {

    return (
        <>
            <Button1 type={ButtonType.A} />
            <Button1 type={ButtonType.B} />
            <Button1 type={ButtonType.C} />
        </>
    );
}