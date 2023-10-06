import Button from "./Basic/Buttons/Button";
import CheckBox from "./Basic/Checkboxs/Checkbox";
import MultiOption from "./Basic/MultiOptions/MultiOption";
import Radio from "./Basic/Radios/Radio";
import Toggle from "./Basic/Toggles/Toggle";
function Component() {
    return(<div></div>);
}

function button() {
    return <Button />
}

function radio() {
    return <Radio />
}

function check(){
    return <CheckBox />
}

function toggle(){
    return <Toggle />
}

function multioption(){
    return <MultiOption />
}



Component.button = button;
Component.radio = radio;
Component.check = check;
Component.toggle = toggle;
Component.multioption = multioption;

export default Component