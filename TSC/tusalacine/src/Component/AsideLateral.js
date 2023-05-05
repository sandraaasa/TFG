import React, { useRef } from "react";
import { useFormik } from 'formik';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


const AsideLateral = () =>{
    const toast = useRef(null);
    const cities = [
        { name: 'Acción', code: 'AC' },
        { name: 'Aventura', code: 'AV' },
        { name: 'Animación', code: 'ANIM' },
        { name: 'Comedia', code: 'COM' },
        { name: 'Crimen', code: 'CRM' },
        { name: 'Documental', code: 'DOC' },
        { name: 'Drama', code: 'DRM' },
        { name: 'Familia', code: 'FM' },
        { name: 'Fantasía', code: 'FNT' },
        { name: 'Historia', code: 'HIS' },
        { name: 'Terror', code: 'TRR' },
        { name: 'Música', code: 'MUS' },
        { name: 'Misterio', code: 'MIST' },
        { name: 'Romance', code: 'ROM' },
        { name: 'Ciencia ficción', code: 'SC' },
        { name: 'Pelicula de TV', code: 'PTV' },
        { name: 'Suspense', code: 'SUSP' },
        { name: 'Bélica', code: 'BLG' },
        { name: 'Western', code: 'WSTR' }
    ];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item.name });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'City is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data.item && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };
    
    return (
        <aside>
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <ListBox
                    filter
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    style={{ width: '15rem' }}
                />
                {getFormErrorMessage('item')}
                <Button type="submit" label="Submit" className="mt-2" />
            </form>
            </aside>
    )
}
export default AsideLateral;
