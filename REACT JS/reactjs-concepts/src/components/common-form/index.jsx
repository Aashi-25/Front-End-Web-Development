import CommonInput from "../common-input";

const formTypes = {
    INPUT : 'input' ,
    SELECT : 'select',
    TEXTAREA : 'textarea'
}

function CommonForm({formControls = [] , formData , setFormData , buttonText , onhandleSubmit}){
    function renderFormElement(getCurrentElement){
        let content = null;
        switch(getCurrentElement?.componentType){
            case formTypes.INPUT:

                content = <CommonInput 
                label = {getCurrentElement.label} name = {getCurrentElement.name} 
                id = {getCurrentElement.id} 
                type = {getCurrentElement.type} placeholder = {getCurrentElement.placeholder} 
                value = {formData[getCurrentElement.name]} 
                onChange = {(event) => setFormData({
                    ...formData,
                    [event.target.name] : event.target.value
                })}/>
                break;
            default:
                content = <CommonInput 
                label = {getCurrentElement.label} name = {getCurrentElement.name} 
                id = {getCurrentElement.id} 
                type = {getCurrentElement.type} placeholder = {getCurrentElement.placeholder} 
                value = {formData[getCurrentElement.name]} 
                onChange = {(event) => setFormData({
                    ...formData,
                    [event.target.name] : event.target.value
                })}/>
        }

        return content;
    }

    return <form onSubmit = {onhandleSubmit}>
        {
            formControls?.length ? formControls.map((singleFormElementItem , index) => ( <div key = {index}> {renderFormElement(singleFormElementItem)} </div>)): null
        }

        <div style={{marginTop : '12px'}}>
            <button type = 'submit'>
                {buttonText|| 'Submit'}
            </button>
        </div>
    </form>
}

export default  CommonForm;