import ReactImageUploading from "react-images-uploading";
import {Button} from "@material-tailwind/react";
import {AiFillEdit} from "react-icons/ai";
import {BiTrash} from "react-icons/bi";

export default function ImageUpload({onChange, images}) {


    return <ReactImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={3}
        dataURLKey="data_url"
    >
        {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper w-full">
                <button

                    className={`border-dashed border-2 w-full border-gray-300 p-3 rounded-md ${isDragging ? 'border-blue-600' : ''}`}
                    style={isDragging ? {color: 'red'} : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                >
                    Click or Drop here
                </button>
                &nbsp;
                <Button onClick={onImageRemoveAll} color={'red'} className={`mt-2`}>Hapus semua gambar</Button>
                <div className={`grid grid-cols-3 mt-3 mb-3 h-32 pb-20`}>
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item h-full w-28">
                            <img src={image['data_url']} alt="" className="h-full w-full"/>
                            <div className="image-item__btn-wrapper">
                                <button onClick={() => onImageUpdate(index)}><AiFillEdit/></button>
                                <button onClick={() => onImageRemove(index)}><BiTrash/></button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        )}
    </ReactImageUploading>
}
