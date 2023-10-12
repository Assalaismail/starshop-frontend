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
          <tr v-for="(item, index) in wishlist" :key="index" class="table-tr">
            <td><img :src="item.image" alt="Wishlist Item Image" class="wishlist-image" /></td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </table>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      wishlist: Array,
    },

    created() {
    // Add a console.log statement to check the wishlist prop
    console.log("Wishlist Prop:", this.wishlist);
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

</style>