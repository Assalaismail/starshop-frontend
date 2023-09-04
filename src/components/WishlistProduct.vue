<template>
    <div wishlist-div>
        <h1 class="wishlist">Wishlist</h1>
    

    <div class="table-div">
        <table class="table-wish">
      
            <tr class="table-tr">
                <th cass="table-th" >Image</th>
                <th class="">Product</th>
                <th class="">Price</th>
            </tr>
        </table>
    </div>
    
</div>
</template>

<script>


</script>

<style>

div[wishlist-div] {
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