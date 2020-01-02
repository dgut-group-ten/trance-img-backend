<template>
    <div class="container">
        <!-- End Row -->
        <div class="row">
            <div class="col-12 m-b-30">
                <h4 class="d-inline">Cards With Images</h4>
                <p class="text-muted">This is 3 column contents</p>
                <div class="row">
                    <div class="col-md-6 col-lg-3" v-for="entity in entities" :key="entity._id">
                        <div class="card">
                            <img class="img-fluid" :src="entity.img_path" alt="">
                            <div class="card-body">
                                <h5 class="card-title">{{ entity.name }}</h5>
                                <p class="card-text">This is a wider card with supporting text and below as a
                                    natural lead-in to the additional content. This content is a little bit
                                    longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        data() {
            return {
                entities: [
                    {name:"5656", img_path:"https://music-01.niracler.com:8002/media/cimg/default.jpg"},
                    {name:"5656", img_path:"https://music-01.niracler.com:8002/media/cimg/default.jpg"},
                    {name:"5656", img_path:"https://music-01.niracler.com:8002/media/cimg/default.jpg"},
                    {name:"5656", img_path:"https://music-01.niracler.com:8002/media/cimg/default.jpg"},
                    {name:"5656", img_path:"https://music-01.niracler.com:8002/media/cimg/default.jpg"},
                    {name:"5656", img_path:"https://music-01.niracler.com:8002/media/cimg/default.jpg"},
                    {name:"5656", img_path:"https://music-01.niracler.com:8002/media/cimg/default.jpg"},
                    {name:"5656", img_path:"https://music-01.niracler.com:8002/media/cimg/default.jpg"},
                ],
                totalPage: 1,
                page: 1,
            }
        },
    }
</script>

<style scoped>

</style>