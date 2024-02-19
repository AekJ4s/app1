import React from "react"

export default function FormText(){
    const textPswd = React.useRef()
    const textPswd2 = React.createRef()

    const  onBlurPassword1 = () =>{
        let pswd = textPswd.current.value
        if(pswd !== '' && !pswd.math(/^[0-9a-zA-Z]+$/)){
            textPswd.current.value = ''
            alert('ต้องเป็น 0-9 a-z หรือ A-Z เท่านั้น')
        }
    }
    
    const onBlurPassword2 = () => {
        if(textPswd.current.value !== textPswd2.current.value){
            textPswd2.current.value = ''
            alert('รหัสผ่านไม่ตรงกัน')
        }
    }

    return (
        <div className="mt-4 mx-auto p-3 rounded"
            style={{width: '400px', backgroundColor:'#cee'}}>
        <form>
            <div className="form.group mb-2">
                <label htmlFor="login">ชื่อผู้ใช้(login)</label>
                <input type="text" id="login" name ="login" maxLength="20" className="form-control formcontrol-sm"/>
            </div>
            <div className="form-group mb-2">
            <label htmlFor="pswd">รหัสผ่าน</label>
            <input type="password" id="pswd" name="pswd" maxLength="10" className="form-control formcontrol-sm"
            ref={textPswd} onBlur={onBlurPassword1} />
            </div>
            <div className="form-group mb-2">
            <label htmlFor="pswd">รหัสผ่านซ้ำ</label>
            <input type="password" id="pswd" name="pswd" maxLength="10" className="form-control formcontrol-sm"
            ref={textPswd} onBlur={onBlurPassword2} />
            </div>
            <div className="form-group mb-4">
                <label htmlFor="memo">บันทึกช่วยจำ</label>
                <textarea id="memo" name="memo" rows="2" maxLength="200" className="form-control formcontrol-sm"></textarea>
            </div>
            <div className="text-center">
                <button className="btn btn-sm px-4 btn-primary">OK</button>
            </div>
        </form>
        </div>
    )
}