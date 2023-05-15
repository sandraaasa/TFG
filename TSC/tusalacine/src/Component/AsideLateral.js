import React, { useRef, useState } from "react";
import { useFormik } from 'formik';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


const AsideLateral = (props) =>{
    const toast = useRef(null);
    
    const categorias = [
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
        toast.current.show({ severity: 'success', summary: 'Has selecciondo ' + formik.values.item.name, detail: " Pulse de nuevo el boton para generar una película" });
    };

    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Selecciona una categoria.';
            }

            return errors;
        },
        
        onSubmit: (data) => {
            data.item && show(data);
            props.getCategoria(data.item.name);
            formik.resetForm();
        }

    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };
    

    return (
        <aside>
            <form onSubmit={formik.handleSubmit} className=" flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <ListBox
                    filter
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={categorias}
                    optionLabel="name"
                    placeholder="Selecciona película"
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                />
                {getFormErrorMessage('item')}
                <Button type="submit" label="Por categoría" className=" mb-4 backBlack" />
            </form>
            </aside>
    )
}
export default AsideLateral;
