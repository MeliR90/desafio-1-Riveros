class ProductManager {

    static lastId = 0;

    constructor(){
        this.products = [];
    }


addProduct(title, description, price, image, code, stock) {

    if(!title || !description || !price || !image || !code || !stock){
        console.log("Todos los campos son obligatorios");
        return;
    }

    if(this.products.some(item => item.code === code )){
        console.log("El código debe ser único");
        return;
    }

    const newProduct = {

        id: ++ProductManager.lastId,
        title,
        description,
        price,
        image,
        code,
        stock
    }

    this.products.push(newProduct);
}

    getProducts(){
        console.log(this.products);
    }

    getProductsById (id){
        const product = this.products.find(item => item.id === id);

        if(!product){
            console.log("Producto no encontrado");
        } else {
            console.log("Producto encontrado: ", product);
        }
        return product;
    }
}

//TESTING

const manager = new ProductManager();


manager.getProducts();

manager.addProduct("Zapatillas", "Zapatillas Nike Low", 120000, "Sin imagen", "abc123", 25 )


manager.addProduct("Remera", "Remera Nike Logo", 10000, "Sin imagen", "abc125", 26 )

manager.getProducts();

manager.addProduct("Remera", "Remera Nike Logo", 10000, "Sin imagen", "abc125", 26 )


manager.getProductsById(1);
manager.getProductsById(20);