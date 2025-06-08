
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({ 
  id: {
    type: String,
    required: true,
    unique: true 
  },
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sku: {
    type: String,
    unique: true 
  },
  description: String,
  technicalSpecs: String,
  geometry: String,
  images: [String],
  category: String, 
  model: String
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);