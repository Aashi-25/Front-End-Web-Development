import React from 'react'
import CommonInput from '../common-input';
import CommonSelect from '../common-select';
import CommonTextArea from '../common-textArea';

const formElementTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea'
}

function CommonForm({ formControls = [], buttonText, formData, setFormData, onSubmit }) {

    function renderFormElement(getCurrentFormControl, getFormData) {
        let element = null;

        switch (getCurrentFormControl.componentType) {
            case formElementTypes.INPUT:
                element =
                    <CommonInput
                        type={getCurrentFormControl.type} placeholder={getCurrentFormControl.placeholder}
                        value={getFormData[getCurrentFormControl.name]}
                        name={getCurrentFormControl.name}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getCurrentFormControl.name]: event.target.value
                            })
                        }
                    />

                break;

            case formElementTypes.SELECT:
                element = (
                    <CommonSelect
                        value={getFormData[getCurrentFormControl.name]}
                        options={getCurrentFormControl.options}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getCurrentFormControl.name]: event.target.value
                            })
                        }
                        placeholder={getCurrentFormControl.placeholder}
                    />
                )
                break;

            case formElementTypes.TEXTAREA:
                element = (
                    <CommonTextArea
                        value={getFormData[getCurrentFormControl.name]}
                        placeholder={getCurrentFormControl.placeholder}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [getCurrentFormControl.name]: event.target.value
                            })
                        }
                        rows={getCurrentFormControl.rows || 4}
                    />
                )
                break;


            default:
                break;
        }
        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            {
                formControls.map(singleFormControl => renderFormElement(singleFormControl, formData))
            }
            <button type='submit'> {buttonText || 'Submit'} </button>
        </form>
    )
}

export default CommonForm;