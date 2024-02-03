import axios from "axios";

const API_URL="http://localhost:8080";

class ProductService{
   async saveProduct(product){
        return await axios.post(API_URL+"/saveProduct",product);
    }

   async  getAllProduct(){
        return await axios.get(API_URL+"/");
    }

   async getProductById(id){
        return await axios.get(API_URL+"/"+id);
    }

    async deleteProduct(id){
        return await axios.get(API_URL+"/deleteProduct/"+id);
    }

    async editProduct(product){
        return await axios.post(API_URL+"/editProduct/"+product.id,product);
    }

}
export default new ProductService;