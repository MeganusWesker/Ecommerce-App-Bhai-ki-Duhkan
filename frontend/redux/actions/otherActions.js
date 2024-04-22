import { server } from "../store";
import axios from "axios";



export const getAllCategory = () => async (dipatch) => {

    try {

        dipatch({
            type: "getAllCategoryRequest",
        });


        const { data } = await axios.get(`${server}/product/categories`);

        dipatch({
            type: "getAllCategorySuccess",
            payload: data.categories,
        });



    } catch (error) {
        dipatch({
            type: "getAllCategoryFail",
            payload: error.response.data.message,
        });
    }
}

export const deleteCategory = (id) => async (dipatch) => {

    try {

        dipatch({
            type:"deleteCategoryRequest",
        });


        const { data } = await axios.delete(`${server}/product/category/${id}`);

        dipatch({
            type:"deleteCategorySuccess",
            payload: data.message,
        });

    } catch (error) {
        dipatch({
            type:"deleteCategoryFail",
            payload: error.response.data.message,
        });
    }
}


export const addCategory = (category) => async (dipatch) => {

    try {

        dipatch({
            type:"addCategoryRequest",
        });


        const { data } = await axios.post(`${server}/product/category`,{category},{
           
            headers: {
                "Content-Type": "application/json",
            },
        });

        dipatch({
            type:"addCategorySuccess",
            payload: data.message,
        });

    } catch (error) {
        dipatch({
            type:"addCategoryFail",
            payload: error.response.data.message,
        });
    }
}

export const updateProfilePicture = (myForm) => async (dipatch) => {

    try {

        dipatch({
            type: "updateProfilePictureRequest",
        });

     

      
        const { data } = await axios.put(`${server}/user/update/profile/picture`, myForm,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
          withCredentials: true,
        });

    
        dipatch({
            type: "updateProfilePictureSuccess",
            payload: data.message,
        });

    
    } catch (error) {
        dipatch({
            type: "updateProfilePictureFail",
            payload: error.response.data.message,
        });
    }
}