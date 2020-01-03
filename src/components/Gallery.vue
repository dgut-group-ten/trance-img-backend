<template>
    <div class="container">
        <!-- End Row -->
        <div class="row">
            <div class="col-12 m-b-30">
                <h2 class="d-inline">文字功能体验</h2>
                <p class="text-muted">This is 3 column contents</p>

                <div class="card">
                    <div class="card-body">
                        <!-- Nav tabs -->
                        <div class="custom-tab-1">
                            <ul class="nav nav-tabs mb-3">
                                <li class="nav-item" v-for="op in ops" :key="op._id">
                                    <a :class="'nav-link ' + op.active" data-toggle="tab" :href="'#'+op.val">
                                        {{ op.name }}
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div :class="'tab-pane fade show ' + op.active" :id="op.val" role="tabpanel"
                                     v-for="op in ops"
                                     :key="op._id">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <img :src="cur_img.img_path" class="img-fluid" alt="Responsive image"
                                                 data-toggle="modal" data-target="#exampleModalScrollable">
                                            <a :href="cur_img.img_path">{{ cur_img.img_path.split('/')[5] }}</a>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="p-t-15">
                                                <h4>{{ op.name }}结果</h4>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and
                                                    Consonantia, there live the blind texts. Separated they live in
                                                    Bookmarksgrove.</p>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and
                                                    Consonantia, there live the blind texts. Separated they live in
                                                    Bookmarksgrove.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalScrollableTitle">选择图片</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-6 col-lg-6" v-for="image in images" :key="image._id">
                                        <div class="card">
                                            <img class="img-fluid" :src="image.img_path" alt="" @click="select_img(image)">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
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
                cur_img: {
                    name: "1",
                    img_path: "https://music-01.niracler.com:8002/media/cimg/20200103_093212.png",
                },
                ops: [
                    {name: "文字卡片内容识别", val: "op1", active: "active"},
                    {name: "车牌识别", val: "op2", active: ""},
                    {name: "发票识别", val: "op3", active: ""},
                    {name: "身份证识别", val: "op4", active: ""},
                ],
                images: [
                    {
                        name: "1",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "2",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "3",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "4",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "5",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "6",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "7",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "8",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "9",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "10",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "11",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "12",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "13",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "14",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                    {
                        name: "15",
                        img_path: "https://music-01.niracler.com:8002/media/cimg/7b86d2ffd3fd4cc5a7129b5ae909fa84.jpg"
                    },
                ],
                totalPage: 1,
                page: 1,
            }
        },
        methods: {
            select_img(path){
                this.cur_img = path
            }
        }
    }
</script>

<style scoped>

</style>