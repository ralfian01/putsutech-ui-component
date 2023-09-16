import Button from "./Basic/Buttons/Button";
import Radio from "./Basic/Radios/Radio";
function Component() {
    return(<div></div>);
}

function button() {
    return <Button />
}

function radio() {
    return <Radio />
}

Component.button = button;
Component.radio = radio;

export default Component