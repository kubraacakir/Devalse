import axios from "axios";

export class IsletmeService {
  getAllProduct() {
    return axios.get("http://localhost:8081/products");
  }
  getAllMessages() {
    return axios.get("http://localhost:8081/messages");
  }
  getAllCategory() {
    return axios.get("http://localhost:8081/categories");
  }
  saveProduct(productName, price, categoryId, productImage) {
    return axios.post("http://localhost:8081/products", {
      name: productName,
      price: price,
      imagePath: productImage,
      category: {
        id: categoryId,
      },
    });
  }
}
