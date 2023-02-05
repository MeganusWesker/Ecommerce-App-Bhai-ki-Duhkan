import mongoose from 'mongoose';

const categorySchema =mongoose.Schema({
    
    category: {
        type: String,
        required: [true, "Please Enter Category"],
      },
});

const Category = mongoose.model('Category',categorySchema);

export default Category;