import { server } from "../store";
import axios from "axios";

<<<<<<< HEAD
export const createProduct = (myForm) => async (dipatch) => {
  try {
    dipatch({
      type: "createProductRequest",
    });

    const { data } = await axios.post(`${server}/product/new`, myForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dipatch({
      type: "createProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dipatch({
      type: "createProductFail",
      payload: error.response.data.message,
    });
  }
};

export const getAdminProducts = () => async (dipatch) => {
  try {
    dipatch({
      type: "adminProductRequest",
    });

    const { data } = await axios.get(`${server}/product/admin`);

    dipatch({
      type: "adminProductSuccess",
      products: data.products,
      outOfStock: data.outOfStock,
      inStock: data.inStock,
    });
  } catch (error) {
    dipatch({
      type: "adminProductFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllProducts = (searchQuerry) => async (dipatch) => {
  const keyword = searchQuerry || "";

  try {
    dipatch({
      type: "getAllProductRequest",
    });

    const { data } = await axios.get(
      `${server}/product/all?keyword=${keyword}`
    );

    console.log(`logging here data ,${data}`);

    dipatch({
      type: "getAllProductSuccess",
      payload: data.products,
    });
  } catch (error) {
    dipatch({
      type: "getAllProductFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllProductsByCategory = (category) => async (dipatch) => {
  try {
    dipatch({
      type: "getAllProductsByCategoryRequest",
    });

    const { data } = await axios.get(
      `${server}/product/all/product?category=${category}`
    );

    dipatch({
      type: "getAllProductsByCategorySuccess",
      payload: data.products,
    });
  } catch (error) {
    dipatch({
      type: "getAllProductsByCategoryFail",
      payload: error.response.data.message,
    });
  }
};

export const getSingleProduct = (id) => async (dipatch) => {
  try {
    dipatch({
      type: "getSingleProductRequest",
    });

    const { data } = await axios.get(`${server}/product/single/${id}`);

    dipatch({
      type: "getSingleProductSuccess",
      payload: data.product,
    });
  } catch (error) {
    dipatch({
      type: "getSingleProductFail",
      payload: error.response.data.message,
    });
  }
};

export const updateProductImage = (id, myForm) => async (dipatch) => {
  try {
    dipatch({
      type: "updateproductImageRequest",
    });

    const { data } = await axios.post(
      `${server}/product/images/${id}`,
      myForm,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dipatch({
      type: "updateproductImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dipatch({
      type: "updateproductImageFail",
      payload: error.response.data.message,
    });
  }
};

export const deleteProductImage = (id, imageId) => async (dipatch) => {
  try {
    dipatch({
      type: "deleteproductImageRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/images/${id}?id=${imageId}`
    );

    dipatch({
      type: "deleteproductImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dipatch({
      type: "deleteproductImageFail",
      payload: error.response.data.message,
    });
  }
};

export const updateProduct =
  (id, name, description, category, price, stock) => async (dipatch) => {
    try {
      dipatch({
        type: "updateProductRequest",
      });

      const { data } = await axios.put(
        `${server}/product/single/${id}`,
        { name, description, category, price, stock },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dipatch({
        type: "updateProductSuccess",
        payload: data.message,
      });
    } catch (error) {
      dipatch({
        type: "updateProductFail",
        payload: error.response.data.message,
      });
    }
  };

export const deleteProduct = (id) => async (dipatch) => {
  try {
    dipatch({
      type: "deleteProductRequest",
    });

    const { data } = await axios.delete(`${server}/product/single/${id}`);

    dipatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dipatch({
      type: "deleteProductFail",
      payload: error.response.data.message,
    });
  }
};
=======

export const createProduct = (myForm) => async (dipatch) => {

    try {

        dipatch({
            type:"createProductRequest",
        });

    


        const { data } = await axios.post(`${server}/product/new`,myForm,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

      

        dipatch({
            type:"createProductSuccess",
            payload: data.message,
        });

    } catch (error) {

        console.log(error.response.data.message);
        dipatch({
            type:"createProductFail",
            payload: error.response.data.message,
        });
    }
}

export const getAdminProducts = () => async (dipatch) => {

    try {

        dipatch({
            type:"adminProductRequest",
        });

        

       
        const { data } = await axios.get(`${server}/product/admin`);

    

        dipatch({
            type:"adminProductSuccess",
            products: data.products,
            outOfStock:data.outOfStock,
            inStock:data.inStock,
        });

    } catch (error) {

        dipatch({
            type:"adminProductFail",
            payload: error.response.data.message,
        });
    }
}

export const getAllProducts = (searchQuerry) => async (dipatch) => {

    const keyword = searchQuerry|| "";

  

    try {

        dipatch({
            type:"getAllProductRequest",
        });


        

        const { data } = await axios.get(`${server}/product/all?keyword=${keyword}`);

        dipatch({
            type:"getAllProductSuccess",
            payload: data.products,
        });

    } catch (error) {

        dipatch({
            type:"getAllProductFail",
            payload: error.response.data.message,
        });
    }
}

export const getAllProductsByCategory = (category) => async (dipatch) => {

    try {

        dipatch({
            type:"getAllProductsByCategoryRequest",
        });

        const { data } = await axios.get(`${server}/product/all/product?category=${category}`);

    

        dipatch({
            type:"getAllProductsByCategorySuccess",
            payload: data.products,
        });

    } catch (error) {

        dipatch({
            type:"getAllProductsByCategoryFail",
            payload: error.response.data.message,
        });
    }
}

export const getSingleProduct = (id) => async (dipatch) => {

    try {

        dipatch({
            type:"getSingleProductRequest",
        });

        const { data } = await axios.get(`${server}/product/single/${id}`);

    

        dipatch({
            type:"getSingleProductSuccess",
            payload: data.product,
        });

    } catch (error) {

        dipatch({
            type:"getSingleProductFail",
            payload: error.response.data.message,
        });
    }
}

export const updateProductImage = (id,myForm) => async (dipatch) => {

    try {

        dipatch({
            type:"updateproductImageRequest",
        });

        const { data } = await axios.post(`${server}/product/images/${id}`,myForm,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

    

        dipatch({
            type:"updateproductImageSuccess",
            payload: data.message,
        });

    } catch (error) {

        dipatch({
            type:"updateproductImageFail",
            payload: error.response.data.message,
        });
    }
}


export const deleteProductImage = (id,imageId) => async (dipatch) => {

    try {

        dipatch({
            type:"deleteproductImageRequest",
        });

        const { data } = await axios.delete(`${server}/product/images/${id}?id=${imageId}`);

    

        dipatch({
            type:"deleteproductImageSuccess",
            payload: data.message,
        });

    } catch (error) {

        dipatch({
            type:"deleteproductImageFail",
            payload: error.response.data.message,
        });
    }
}

export const updateProduct = (id,name, description, category, price, stock) => async (dipatch) => {

    try {

        dipatch({
            type:"updateProductRequest",
        });

        const { data } = await axios.put(`${server}/product/single/${id}`,{name, description, category, price, stock},{
           
            headers: {
                "Content-Type": "application/json",
            },
        });

    

        dipatch({
            type:"updateProductSuccess",
            payload: data.message,
        });

    } catch (error) {

        dipatch({
            type:"updateProductFail",
            payload: error.response.data.message,
        });
    }
}

export const deleteProduct = (id) => async (dipatch) => {

    try {

        dipatch({
            type:"deleteProductRequest",
        });

        const { data } = await axios.delete(`${server}/product/single/${id}`);

    
        dipatch({
            type:"deleteProductSuccess",
            payload: data.message,
        });

    } catch (error) {

        dipatch({
            type:"deleteProductFail",
            payload: error.response.data.message,
        });
    }
}
>>>>>>> 7280f28c25c555d4d031e270792ea01402585209
