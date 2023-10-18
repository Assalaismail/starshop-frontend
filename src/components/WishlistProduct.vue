<template>
    <div class="wishlist-div">
        <h1 class="wishlist">Wishlist</h1>

        <div class="table-div">
            <table class="table-wish">
                <tr class="table-tr">
                    <th class="table-th">Image</th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>

                <tr v-if="wishlist.length === 0">
                    <td colspan="3" class="no-products-message">No product in wishlist!</td>
                </tr>


                <tr v-for="(item, index) in wishlist" :key="index" class="table-tr">
                    <td><img :src="item.image" alt="Wishlist Item Image" class="wishlist-image" /></td>
                    <td class="wishlist-name">{{ item . name }}</td>
                    <td class="wishlist-price">${{ item . price }}</td>
                    <td class="buttons-wishlist">
                        <button class="btn-add-wish">Add to cart</button>
                        <button class="btn-remove-wish" @click="removeFromWishlist(index)">Remove</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import {
        toast
    } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css';

    export default {
        data() {
            return {
                wishlist: [],
            };
        },

        created() {
            // Retrieve the wishlist data from local storage
            const storedWishlist = localStorage.getItem('wishlist');
            if (storedWishlist) {
                this.wishlist = JSON.parse(storedWishlist);
            }
        },

        methods: {
            removeFromWishlist(index) {
                this.wishlist.splice(index, 1); // Remove the item from the wishlist array
                localStorage.setItem('wishlist', JSON.stringify(this.wishlist)); // Update local storage
                toast.success('Item removed from wishlist'); // Show a success toast
            },
        },


    };
</script>


<style scoped>
    .wishlist-div {
        width: 60%;
        margin: 0 auto;
        padding: 20px;
    }

    h1.wishlist {
        font-size: 35px;
        margin-top: 50px;
        margin-bottom: 60px;
        padding-bottom: 20px;
    }

    .table-wish {
        width: 100%;
        border-collapse: collapse;
    }

    .table-tr {
        color: black;
    }

    .table-th {
        padding: 10px;
        text-align: left;
    }

    .table-wish tr {
        border-bottom: 1px solid lightgray;
    }

    .table-wish th {
        padding: 10px;
        margin-bottom: 10px;
        text-align: start;
        font-size: 20px;
        font-weight: 500;
    }

    .table-wish td {
        text-align: start;
        padding: 10px;
    }

    .wishlist-image {
        width: 125px;
        height: 187px;
    }

    .buttons-wishlist {
        text-align: center !important;
    }

    .wishlist-price,
    .wishlist-name {
        font-weight: bold;
    }

    .btn-add-wish {
        border: none;
        background-color: white;
        border: 1px solid #888;
        color: #737373;
        text-transform: uppercase;
        padding: 10px;
        border-radius: 50px;
        width: 115px;
        cursor: pointer;
    }

    .btn-add-wish:hover,
    .btn-remove-wish:hover {
        background-color: #737373;
        color: white;
    }


    .btn-remove-wish {
        border: none;
        background-color: white;
        border: 1px solid #888;
        color: #737373;
        text-transform: uppercase;
        padding: 10px;
        border-radius: 50px;
        width: 115px;
        cursor: pointer;
        margin-left: 15px;
    }

    .no-products-message {
        text-align: center !important;
        font-size: 18px;
        padding: 40px;
    }
</style>
