const URL_regexp = new RegExp("https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$");

const productValidate = (product) => {
    const { name, description, price, stock, image } = product;
    if(!name || !price) {
        return "Name and price required";
    }
    if(typeof name !== "string") {
        return "Name must be an string";
    }
    if(image && !URL_regexp.test(image)) {
        return "Image must be an URL";
    }
    return;
}

console.log(productValidate(
    { name: "Nombre", price: 5, image: "http://www.algunlugar.com" }
));