<template>
    <div class="single-page">

        <div class="image-carousel">
            <div class="thumbnail-container">
                <div v-for="(product, productIndex) in products" :key="product.id" @click="showImage(productIndex)">
                    <img :src="JSON.parse(product.images)[0]" alt="Product Image" class="small-image" />
                </div>
            </div>
            <div class="big-image-container">
                <img :src="selectedImage" alt="Product Image" class="big-image" />
            </div>
        </div>

        <div class="column-2">
            <div class="name-status">
                <p class="firstName">
                    {{ products . length > 0 ? products[0] . name : 'No products available' }}
                </p>

                <div v-if="selectedColor && selectedSize">
                    <p v-for="product in productsByColorAndSize(selectedColor, selectedSize)" :key="product.id"
                        :class="{
                            'text-green': product.stock_status === 'In Stock',
                            'text-red': product
                                .stock_status === 'Out of Stock'
                        }">
                        ({{ product . stock_status }})
                    </p>
                </div>
                <div v-else>
                    <p class="default-instock">(In Stock)</p>
                </div>
            </div>

            <div class="add-to-wishlist">
                <a href="#" class="wish-heart" @click="addToWishlist"><i class="fas fa-heart"></i>Add to
                    wishlist
                </a>
            </div>

            <div class="sku-price">
                <p class="sku">
                    SKU: {{ selectedSKU }}
                </p>

                <p class="single-price">
                    ${{ products . length > 0 ? products[0] . price : 'No products available' }}
                </p>
            </div>

            <p class="color">Color</p>
            <select v-model="selectedColor" class="select-color">
                <option value="" disabled>Select color</option>
                <option v-for="color in uniqueColors" :key="color" :value="color">{{ color }}
                </option>
            </select>

            <p class="size">Size</p>
            <select v-model="selectedSize" class="select-size">
                <option value="" disabled>Select size</option>
                <option v-for="size in sizesByColor(selectedColor)" :key="size">{{ size }}</option>
            </select>

            <div class="quantity-container">
                <p>Quantity</p>
                <input v-model="quantity" type="number" min="1" max="999" @input="checkQuantity" />
                <p v-if="quantityUnavailable" class="text-red">Maximum Quantity is {{ maxQuantity }} !</p>
            </div>


            <div class="size-guide">
                <size-guide></size-guide>
            </div>

            <div class="out-of-stock-message" v-if="outOfStockMessage">{{ outOfStockMessage }}</div>

            <div class="buttons-cart-quick">
                <button class="btn-add-to-cart" @click="addToCart">Add To Cart</button>
                <button class="btn-quick-by">Quick By</button>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import SizeGuide from '../components/SizeGuide.vue';
    import {
        toast
    } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    export default {
        components: {
            SizeGuide,
        },
        props: ['parentName'],

        data() {
            return {
                products: [],
                selectedColor: "", // To store the selected color
                selectedSize: "", // To store the selected size
                selectedImage: null,
                quantity: 1, // Default quantity
                wishlist: [], // Array to store wishlist items
                cart: [], // Array to store wishlist items
                outOfStockMessage: '',
            };
        },

        created() {
            // Fetch data based on the subcategory name
            this.fetchProducts(this.parentName);

        },

        watch: {
            // Watch for changes in selectedColor and products, and update selectedImage
            selectedColor: {
                handler(newColor) {
                    this.updateSelectedImage(newColor);
                },
                immediate: true,
            },
            // Watch for changes in products and set the default selected image
            products: {
                handler(newProducts) {
                    if (newProducts.length > 0) {
                        const firstProductImages = JSON.parse(newProducts[0].images);
                        this.selectedImage = firstProductImages[0];
                    } else {
                        this.selectedImage = null;
                    }
                },
                deep: true,
                immediate: true,
            },
        },

        computed: {
            // Add a computed property to get all images for the selected color
            selectedColorImages() {
                if (this.selectedColor) {
                    return this.products
                        .filter((product) => product.color === this.selectedColor)
                        .map((product) => JSON.parse(product.images));
                }
                return [];
            },

            uniqueColors() {
                const colorSet = new Set();
                this.products.forEach((product) => {
                    colorSet.add(product.color);
                });
                return Array.from(colorSet);
            },

            selectedSKU() {
                if (this.selectedColor && this.selectedSize) {
                    const product = this.products.find(
                        (p) => p.color === this.selectedColor && p.size === this.selectedSize
                    );
                    return product ? product.sku : 'No products available';
                } else {
                    return this.products.length > 0 ? this.products[0].sku : 'No products available';
                }
            },

            maxQuantity() {
                if (this.selectedColor && this.selectedSize) {
                    const product = this.products.find(
                        (p) => p.color === this.selectedColor && p.size === this.selectedSize
                    );
                    return product ? product.quantity : 1;
                } else {
                    return 1;
                }
            },
        },

        methods: {
            fetchProducts(parentName) {
                axios
                    .get(`http://127.0.0.1:8000/api/childs/${parentName}`)
                    .then((response) => {
                        console.log("API Response:", response.data);
                        this.products = response.data.data[parentName];
                    })
                    .catch((error) => {
                        console.error("Error fetching data from API:", error);
                    });
            },

            sizesByColor(color) {
                const sizes = new Set();
                this.products.forEach((product) => {
                    if (product.color === color) {
                        sizes.add(product.size);
                    }
                });
                return Array.from(sizes);
            },

            productsByColorAndSize(color, size) {
                return this.products.filter((product) => product.color === color && product.size === size);
            },

            showImage(productIndex) {
                const product = this.products[productIndex];
                const images = JSON.parse(product.images);
                this.selectedImage = images[0];
            },

            checkQuantity() {
                if (this.selectedColor && this.selectedSize) {
                    const product = this.products.find(
                        (p) => p.color === this.selectedColor && p.size === this.selectedSize
                    );

                    if (product) {
                        if (this.quantity > product.quantity) {
                            this.quantity = product.quantity;
                            this.quantityUnavailable = true;
                        } else {
                            this.quantityUnavailable = false;
                        }
                    }
                }
            },

            addToWishlist() {
                if (this.products.length > 0) {
                    const product = this.products[0];
                    const wishlistItem = {
                        image: JSON.parse(product.images)[0],
                        name: product.name,
                        price: product.price,
                    };

                    this.wishlist.push(wishlistItem);

                    // Save the updated wishlist to local storage
                    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
                    toast.success('Product added successfully to wishlist'); // Show a success toast
                    // console.log("Added to wishlist:", wishlistItem);
                    // console.log("Wishlist in Product Component:", this.wishlist);
                } else {
                    toast.error('This is an error!');
                }
            },

            addToCart() {
                if (this.products.length > 0) {
                    const selectedProduct = this.products.find(
                        (product) =>
                        product.color === this.selectedColor && product.size === this.selectedSize
                    );

                    if (selectedProduct) {
                        if (selectedProduct.stock_status === 'Out of Stock') {
                            // Set the out of stock message
                            this.outOfStockMessage = 'This product is out of stock and cannot be added to the cart!';
                        } else {
                            this.outOfStockMessage = ''; // Reset the message
                            // Rest of your addToCart logic
                            const cartItem = {
                                id: selectedProduct.id,
                                image: JSON.parse(selectedProduct.images)[0],
                                name: selectedProduct.name,
                                price: selectedProduct.price,
                                color: selectedProduct.color,
                                size: selectedProduct.size,
                                quantity: this.quantity,

                                maxQuantity: selectedProduct.quantity, // Set the maximum available quantity
                            };

                            this.cart.push(cartItem);
                            localStorage.setItem('cart', JSON.stringify(this.cart));

                            console.log("Added to cart:", cartItem);
                            console.log("Cart in Product Component:", this.cart);

                            toast.success('Product added successfully to the cart');
                        }
                    }
                } else {
                    toast.error('This is an error!');
                }
            },

            // Add a method to update the selected image based on the selected color
            updateSelectedImage(selectedColor) {
                if (selectedColor && this.products.length > 0) {
                    const images = this.selectedColorImages;
                    if (images.length > 0) {
                        this.selectedImage = images[0][0]; // Display the first image for the selected color
                    }
                } else {
                    this.selectedImage = null;
                }
            },
        },
    };
</script>

<style scoped>
    .single-page {
        display: flex;
        justify-content: center;
        gap: 100px;
    }

    .single-image {
        width: 200px;
        height: 200px;
        margin-right: 20px;
    }

    .column-2 {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
    }


    .firstName {
        font-size: 30px;
        text-transform: uppercase;
        text-align: start;
        width: 400px;
    }

    .name-status {
        border-bottom: 1px solid #737373;
    }

    .text-green {
        text-align: start;
        color: green;
    }

    .text-red {
        color: red;
        text-align: start;
    }

    .sku-price {
        text-align: start;
    }

    .single-price {
        font-weight: 900;
    }

    .default-instock {
        font-size: 16px;
        color: green;
        text-align: start;
    }

    .select-color,
    .select-size {
        width: 120px;
        height: 56px;
        border: 1px solid #737373;
        border-radius: 5px;
        text-align: center;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .image-carousel {
        display: flex;
        align-items: center;
    }

    .thumbnail-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 20px;
        gap: 10px;
    }

    .small-image {
        width: 80px;
        height: auto;
        cursor: pointer;
        transition: opacity 0.2s;
        opacity: 0.4;
    }

    .small-image:hover {
        opacity: 1;
    }

    .big-image-container {
        flex: 1;
        text-align: center;
    }

    .big-image {
        width: 400px;
    }

    .quantity-container {
        display: flex;
        flex-direction: column;
        text-align: start;
        align-items: start;
    }

    .body-cl2 {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .size-guide {
        margin-top: 50px;
    }

    .add-to-wishlist {
        /* align-items: end !important; */
        margin-top: 20px;
        text-align: end;
        color: black;
    }

    .wish-heart {
        color: black;
    }

    .color,
    .size,
    .size-guide {
        text-align: start;
    }

    .size-guide {
        padding-bottom: 20px;
        border-bottom: 1px solid #737373;
    }

    .buttons-cart-quick {
        display: flex;
        align-items: start;
        margin-top: 30px;
    }

    .btn-add-to-cart {
        border: none;
        background-color: white;
        border: 1px solid #888;
        color: #737373;
        text-transform: uppercase;
        padding: 10px;
        border-radius: 50px;
        width: 150px;
        height: 54px;
        font-weight: 700;
        cursor: pointer;
        font-size: 18px;
    }

    .btn-add-to-cart:hover,
    .btn-quick-by:hover {
        background-color: #737373;
        color: white;
    }

    .btn-quick-by {
        border: none;
        background-color: white;
        border: 1px solid #737373;
        color: #737373;
        text-transform: uppercase;
        padding: 10px;
        border-radius: 50px;
        width: 150px;
        height: 54px;
        font-weight: 700;
        cursor: pointer;
        font-size: 18px;
        margin-left: 20px;
    }

    .out-of-stock-message {
        color: red;
    }
</style>
