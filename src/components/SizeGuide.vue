<template>
    <GDialog v-model="dialogState" max-width="750">
        <div class="wrapper">
            <div class="content">
                <div class="title-x">
                    <p class="title">Size Chart</p>
                    <button class="x-btn" @click="dialogState = false">x</button>
                </div>

                <div class="buttons-cent-inch">
                    <button @click="showCentimeterTable" class="cent">Centimeters</button>
                    <button @click="showInchTable" class="inch">Inches</button>
                </div>

                <div>
                    <div v-if="showCentimeter">
                        <table id="centiTable" class="table-cent">
                            <thead>
                                <tr class="fs-4">
                                    <th colspan="2" style="background-color: white; border: none;">

                                    </th>
                                    <th colspan="1"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);"> XXS </th>

                                    <th colspan="1"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        XS
                                    </th>
                                    <th colspan="2"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">S</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">M</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">L</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">XL</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">XXL</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">XXXL</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">4XL</div>
                                    </th>
                                </tr>
                                <tr class="fs-4">
                                    <th colspan="2"
                                        style="border-bottom-color: rgb(19, 19, 19); background-color: rgb(255, 255, 255); text-align: start;">
                                        <b>EU Size (FR)</b></th>
                                    <td class="odd-row"><b>32</b></td>
                                    <td class="odd-row"><b>34</b></td>
                                    <td class="odd-row"><b>36</b></td>
                                    <td class="odd-row"><b>38</b></td>
                                    <td class="odd-row"><b>40</b></td>
                                    <td class="odd-row"><b>42</b></td>
                                    <td class="odd-row"><b>44</b></td>
                                    <td class="odd-row"><b>46</b></td>
                                    <td class="odd-row"><b>48</b></td>
                                    <td class="odd-row"><b>50</b></td>
                                    <td class="odd-row"><b>52</b></td>
                                    <td class="odd-row"><b>54</b></td>
                                    <td class="odd-row"><b>56</b></td>
                                    <td class="odd-row"><b>58</b></td>
                                    <td class="odd-row"><b>60</b></td>
                                </tr>
                                <tr class="fs-4">
                                    <th colspan="2"
                                        style="border-bottom-color: rgb(19, 19, 19); background-color: rgb(255, 255, 255); text-align: start;">
                                        <b>US Size</b></th>
                                    <td><b>0</b></td>
                                    <td><b>2</b></td>
                                    <td><b>4</b></td>
                                    <td><b>6</b></td>
                                    <td><b>8</b></td>
                                    <td><b>10</b></td>
                                    <td><b>12</b></td>
                                    <td><b>14</b></td>
                                    <td><b>16</b></td>
                                    <td><b>18</b></td>
                                    <td><b>20</b></td>
                                    <td><b>22</b></td>
                                    <td><b>24</b></td>
                                    <td><b>26</b></td>
                                    <td><b>28</b></td>
                                </tr>
                                <tr class="fs-4">
                                    <th colspan="2"
                                        style="border-bottom-color: rgb(19, 19, 19); background-color: rgb(255, 255, 255); text-align: start;">
                                        <b>UK Size</b></th>
                                    <td class="odd-row"><b>4</b></td>
                                    <td class="odd-row"><b>6</b></td>
                                    <td class="odd-row"><b>8</b></td>
                                    <td class="odd-row"><b>10</b></td>
                                    <td class="odd-row"><b>12</b></td>
                                    <td class="odd-row"><b>14</b></td>
                                    <td class="odd-row"><b>16</b></td>
                                    <td class="odd-row"><b>18</b></td>
                                    <td class="odd-row"><b>20</b></td>
                                    <td class="odd-row"><b>22</b></td>
                                    <td class="odd-row"><b>24</b></td>
                                    <td class="odd-row"><b>26</b></td>
                                    <td class="odd-row"><b>28</b></td>
                                    <td class="odd-row"><b>30</b></td>
                                    <td class="odd-row"><b>32</b></td>
                                </tr>
                                <tr class="fs-4">
                                    <td colspan="2" style="background-color: rgb(255, 255, 255);">
                                        Bust
                                        (cm)
                                    </td>
                                    <td>72</td>
                                    <td class="even-row">76</td>
                                    <td class="even-row">80</td>
                                    <td class="even-row">84</td>
                                    <td class="even-row">88</td>
                                    <td class="even-row">92</td>
                                    <td class="even-row">96</td>
                                    <td class="even-row">100</td>
                                    <td class="even-row">104</td>
                                    <td class="even-row">110</td>
                                    <td class="even-row">116</td>
                                    <td class="even-row">122</td>
                                    <td class="even-row">128</td>
                                    <td class="even-row">134</td>
                                    <td class="even-row">140</td>
                                </tr>
                                <tr class="fs-4">
                                    <td colspan="2" style="background-color: rgb(255, 255, 255);">
                                        Waist
                                        (cm)
                                    </td>
                                    <td>56</td>
                                    <td class="odd-row">60</td>
                                    <td class="odd-row">64</td>
                                    <td class="odd-row">68</td>
                                    <td class="odd-row">72</td>
                                    <td class="odd-row">76</td>
                                    <td class="odd-row">80</td>
                                    <td class="odd-row">84</td>
                                    <td class="odd-row">88</td>
                                    <td class="odd-row">94</td>
                                    <td class="odd-row">100</td>
                                    <td class="odd-row">106</td>
                                    <td class="odd-row">112</td>
                                    <td class="odd-row">118</td>
                                    <td class="odd-row">124</td>
                                </tr>
                                <tr class="fs-4">
                                    <td colspan="2" style="background-color: rgb(255, 255, 255);">
                                        Hips
                                        (cm)
                                    </td>
                                    <td>80</td>
                                    <td class="even-row">84</td>
                                    <td class="even-row">88</td>
                                    <td class="even-row">92</td>
                                    <td class="even-row">96</td>
                                    <td class="even-row">100</td>
                                    <td class="even-row">104</td>
                                    <td class="even-row">108</td>
                                    <td class="even-row">112</td>
                                    <td class="even-row">117</td>
                                    <td class="even-row">122</td>
                                    <td class="even-row">127</td>
                                    <td class="even-row">132</td>
                                    <td class="even-row">137</td>
                                    <td class="even-row">142</td>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div v-if="showInch">
                        <table id="inchTable" class="table-inch">
                            <thead>
                                <tr>
                                    <th colspan="2" style="background-color: white; border: none;">
                                    </th>
                                    <th colspan="1"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        XXS
                                    </th>
                                    <th colspan="1"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        XS
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">S</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">M</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">L</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">XL</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">XXL</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">XXXL</div>
                                    </th>
                                    <th colspan="2" class="three wide"
                                        style="background-color: rgb(19, 19, 19); color: rgb(255, 255, 255);">
                                        <div style="text-align: center;">4XL</div>
                                    </th>
                                </tr>
                                <tr class="fs-4">
                                    <th colspan="2"
                                        style="border-bottom-color: rgb(19, 19, 19); background-color: rgb(255, 255, 255);">
                                        <b>EU Size (FR)</b></th>
                                    <td class="odd-row"><b>32</b></td>
                                    <td class="odd-row"><b>34</b></td>
                                    <td class="odd-row"><b>36</b></td>
                                    <td class="odd-row"><b>38</b></td>
                                    <td class="odd-row"><b>40</b></td>
                                    <td class="odd-row"><b>42</b></td>
                                    <td class="odd-row"><b>44</b></td>
                                    <td class="odd-row"><b>46</b></td>
                                    <td class="odd-row"><b>48</b></td>
                                    <td class="odd-row"><b>50</b></td>
                                    <td class="odd-row"><b>52</b></td>
                                    <td class="odd-row"><b>54</b></td>
                                    <td class="odd-row"><b>56</b></td>
                                    <td class="odd-row"><b>58</b></td>
                                    <td class="odd-row"><b>60</b></td>
                                </tr>
                                <tr class="fs-4">
                                    <th colspan="2"
                                        style="border-bottom-color: rgb(19, 19, 19); background-color: rgb(255, 255, 255); text-align: start;">
                                        <b>US Size</b></th>
                                    <td><b>0</b></td>
                                    <td><b>2</b></td>
                                    <td><b>4</b></td>
                                    <td><b>6</b></td>
                                    <td><b>8</b></td>
                                    <td><b>10</b></td>
                                    <td><b>12</b></td>
                                    <td><b>14</b></td>
                                    <td><b>16</b></td>
                                    <td><b>18</b></td>
                                    <td><b>20</b></td>
                                    <td><b>22</b></td>
                                    <td><b>24</b></td>
                                    <td><b>26</b></td>
                                    <td><b>28</b></td>
                                </tr>
                                <tr class="fs-4">
                                    <th colspan="2"
                                        style="border-bottom-color: rgb(19, 19, 19); background-color: rgb(255, 255, 255); text-align: start;">
                                        <b>UK Size</b></th>
                                    <td class="odd-row"><b>4</b></td>
                                    <td class="odd-row"><b>6</b></td>
                                    <td class="odd-row"><b>8</b></td>
                                    <td class="odd-row"><b>10</b></td>
                                    <td class="odd-row"><b>12</b></td>
                                    <td class="odd-row"><b>14</b></td>
                                    <td class="odd-row"><b>16</b></td>
                                    <td class="odd-row"><b>18</b></td>
                                    <td class="odd-row"><b>20</b></td>
                                    <td class="odd-row"><b>22</b></td>
                                    <td class="odd-row"><b>24</b></td>
                                    <td class="odd-row"><b>26</b></td>
                                    <td class="odd-row"><b>28</b></td>
                                    <td class="odd-row"><b>30</b></td>
                                    <td class="odd-row"><b>32</b></td>
                                </tr>
                                <tr class="fs-4">
                                    <td colspan="2" style="background-color: rgb(255, 255, 255);">
                                        Bust
                                        (in)
                                    </td>
                                    <td class="even-row">28.35</td>
                                    <td class="even-row">29.92</td>
                                    <td class="even-row">31.5</td>
                                    <td class="even-row">33.07</td>
                                    <td class="even-row">34.65</td>
                                    <td class="even-row">36.22</td>
                                    <td class="even-row">37.8</td>
                                    <td class="even-row">39.37</td>
                                    <td class="even-row">40.94</td>
                                    <td class="even-row">43.31</td>
                                    <td class="even-row">45.67</td>
                                    <td class="even-row">48.03</td>
                                    <td class="even-row">50.39</td>
                                    <td class="even-row">52.76</td>
                                    <td class="even-row">55.12</td>
                                </tr>
                                <tr class="fs-4">
                                    <td colspan="2" style="background-color: rgb(255, 255, 255);">
                                        Waist
                                        (in)
                                    </td>
                                    <td class="odd-row">22.05</td>
                                    <td class="odd-row">23.62</td>
                                    <td class="odd-row">25.2</td>
                                    <td class="odd-row">26.77</td>
                                    <td class="odd-row">28.35</td>
                                    <td class="odd-row">29.92</td>
                                    <td class="odd-row">31.5</td>
                                    <td class="odd-row">33.07</td>
                                    <td class="odd-row">34.65</td>
                                    <td class="odd-row">37.01</td>
                                    <td class="odd-row">39.37</td>
                                    <td class="odd-row">41.73</td>
                                    <td class="odd-row">44.09</td>
                                    <td class="odd-row">46.46</td>
                                    <td class="odd-row">48.82</td>
                                </tr>
                                <tr class="fs-4">
                                    <td colspan="2" style="background-color: rgb(255, 255, 255);">
                                        Hips
                                        (in)
                                    </td>
                                    <td class="even-row">31.5</td>
                                    <td class="even-row">33.07</td>
                                    <td class="even-row">34.65</td>
                                    <td class="even-row">36.22</td>
                                    <td class="even-row">37.8</td>
                                    <td class="even-row">39.37</td>
                                    <td class="even-row">40.94</td>
                                    <td class="even-row">42.52</td>
                                    <td class="even-row">44.09</td>
                                    <td class="even-row">46.06</td>
                                    <td class="even-row">48.03</td>
                                    <td class="even-row">50</td>
                                    <td class="even-row">51.97</td>
                                    <td class="even-row">53.94</td>
                                    <td class="even-row">55.91</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

            </div>

            <div class="actions">
                <button class="close-btn" @click="dialogState = false">
                    Close
                </button>
            </div>

        </div>
    </GDialog>

    <a class="sg" @click="dialogState = true">
        Size Guide
    </a>
</template>


<script>
    export default {
        data() {
            return {
                dialogState: false,
                showCentimeter: true, // Initially show the Centimeter Table
                showInch: false,
            };
        },
        methods: {
            showCentimeterTable() {
                this.showCentimeter = true;
                this.showInch = false;
            },
            showInchTable() {
                this.showCentimeter = false;
                this.showInch = true;
            },
        },
    };
</script>


<style scoped>
    .sg {
        font-size: 18px;
        color: black;
        cursor: pointer;
        border-bottom: 1px solid black;
    }

    .wrapper {
        color: #000;
    }

    .content {
        padding: 20px;
    }

    .title-x {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        margin-bottom: 20px;

    }

    .title {
        font-size: 30px;
        font-weight: 700;
    }

    .x-btn {
        border: none;
        background-color: white;
        cursor: pointer;
        font-size: 16px;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        padding: 10px 20px;
        border-top: 1px solid rgba(0, 0, 0, 0.12);
    }

    .close-btn {
        background-color: #737373;
        border: none;
        color: white;
        height: 25px;
        border-radius: 4px;
        cursor: pointer;
    }

    .buttons-cent-inch {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        gap: 30px;
    }

    .cent,
    .inch {
        cursor: pointer;
        background-color: white;
        color: black;
        border: none;
        border-radius: 5px;
        padding: 5px;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid black;
    }

    .cent:focus,
    .inch:focus {
        background-color: #737373;
    }

    .table-cent,
    .table-inch {
        width: 700px;
        height: 250px;
    }

    .table-cent tr {
        border-bottom: 1px solid #737373;
    }
</style>
