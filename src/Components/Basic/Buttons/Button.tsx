import Button1, {Enum as Btn1Enum} from "./_1/Elem";

export default function Button() {

    return (
        <>
            <Button1
                type={Btn1Enum.ButtonType.Regular}
                size={Btn1Enum.ButtonSize.Normal}
                style={{margin: 'auto', marginTop: '15px'}}
            >
                Testing
            </Button1>

            <Button1
                type={Btn1Enum.ButtonType.Regular}
                size={Btn1Enum.ButtonSize.Normal}
                style={{margin: 'auto', marginTop: '15px'}}
            >
                <img src="https://dapurfirdaus.myumkm.com/myu_cdn/logo/original/origin_full_v1.svg" style={{height: '20px'}} />
                Button text
            </Button1>
        </>
    );
}