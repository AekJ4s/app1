import React from 'react'

export default function FormSearch() {
    const textKw = React.useRef()
    const btOk = React.createRef()

    const onChangkw = () => {
        if(textKw.current.value.trim() !== ''){
            btOk.current.disabled = false
        } else {
            btOk.current.disabled = true
        }
    }

    return (
        <div style={{margin:'30px'}}>
            <form>
                <input tyle="text" name="kw" placeholder="ค้นหา"
                ref={textKw} onInput={onChangkw}/>&nbsp;
                <button ref={btOk} disabled>ตกลง</button>
            </form>
        </div>
    )
    }