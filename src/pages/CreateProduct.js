import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";

const CreateProduct = () => {

    const {
        handleSubmit, 
        register, 
        formState: { errors },
    } = useForm();

    const submitHandler = async ({ title, description, price, imgUrl }) => {
        try {
            const res = await axios.post('http://localhost:4000/products', {
                title,
                description,
                price,
                imgUrl,
            });

            if (res.status === 201) {
                alert('Product creation successful!')
            }
        } catch (e) {
            alert("Something went wrong!")
        }
    };

  return (

    <div>

        <form onSubmit={handleSubmit(submitHandler)}>
            <h1 className="mb-4 text-xl">Create New Product</h1>
            <div className="mb-4">
                <label className="mr-2">Title</label>
                <input type="text" className="border" id="title" {...register ('title', {required: 'Please enter product title'})} />
                {errors.title && (<div className="text-red-500">{errors.title.message} </div>)}
            </div>

            <div className="mb-4">
                <label className="mr-2">Description</label>
                <input type="text" className="border" id="description" {...register ('description', {required: 'Please enter product description'})} />
                {errors.description && (<div className="text-red-500">{errors.description.message} </div>)}
            </div>

            <div className="mb-4">
                <label className="mr-2">Price</label>
                <input type="Number" className="border" id="price" {...register ('price', {required: 'Please enter product price'})} />
                {errors.price && (<div className="text-red-500">{errors.price.message} </div>)}
            </div>

            <div>
                <label className="mr-2">Image Url</label>
                <input type="text" className="border" id="imgUrl" {...register ('imgUrl', {required: 'Please enter product image url'})} />
                {errors.imgUrl && (<div className="text-red-500">{errors.imgUrl.message} </div>)}
            </div>

            <div>
                <button type="submit" className="bg-amber-300 p-2 rounded mt-10">Create Product</button>
            </div>
        </form>

    </div>

  );
  
};

export default CreateProduct