
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

const AsideLateral = ()=> {
    const toast = useRef(null);
    //const router = useRouter();
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command: () => {
                        //router.push('/fileupload');
                    }
                }
            ]
        }
    ];

    return (
        <div className="flex justify-content-center">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}
export default AsideLateral;