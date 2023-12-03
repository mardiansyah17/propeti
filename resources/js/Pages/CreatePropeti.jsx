import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Button, Input, Textarea} from "@material-tailwind/react";
import {useForm} from "@inertiajs/react";
import ImageUpload from "@/Components/ImageUpload.jsx";
import {useState} from "react";

export default function CreatePropeti({auth}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        title: '',
        address: '',
        price: 0,
        description: '',
    });
    const [images, setImages] = useState([]);

    const uploadImageHandler = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const postHandler = () => {
        data.images = images;
        post(route('propeties.store'), {
            data: data,
        })
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <div className={`p-3 lg:w-2/4 mx-auto mt-4 bg-white min-h-full space-y-3`}>
                <Input onChange={e => setData('title', e.target.value)} value={data.title} label={'Judul'}
                       color={'blue'} variant={'outlined'}/>
                <Input onChange={e => setData('address', e.target.value)} label={'Alamat'} value={data.address}
                       color={'blue'} variant={'outlined'}/>
                <Input onChange={e => setData('price', e.target.value)} type={`number`} label={'Harga'} color={'blue'}
                       value={data.price} variant={'outlined'}/>
                <Textarea onChange={e => setData('description', e.target.value)} label={'Deskripsi'} color={'blue'}
                          value={data.description}></Textarea>
                <ImageUpload onChange={uploadImageHandler} images={images}/>

                <div className={`flex space-x-2 mt-4`}>
                    <Button onClick={() => post(route('propeties.store'))} fullWidth>Tambah gambar</Button>
                    <Button onClick={postHandler} fullWidth>Posting</Button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
