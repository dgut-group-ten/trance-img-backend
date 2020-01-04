<template>
    <div class="container">
        <!-- End Row -->
        <div class="row">
            <div class="col-12 m-b-30">
                <h2 class="d-inline">文字识别功能体验</h2>
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
                                            <img :src="cur_img.url" class="img-fluid" alt="Responsive image"
                                                 data-toggle="modal" data-target="#exampleModalScrollable">
                                            <div class="my-4">
                                                <a :href="cur_img.url">{{ cur_img.url.split('/')[4] }}</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="p-t-15 container">
                                                <h2>{{ op.name }}结果</h2>
                                                <div class="p-3 text-left">
                                                    <div v-if="op.name === '车牌识别' && res">
                                                        <h4>车牌号: {{res.number}}</h4>
                                                        <h4>颜色: {{res.color}}</h4>
                                                        <h4>四个角的位置</h4>
                                                        <h5 v-for="point in res.vertexes_location" :key="point._id">
                                                            {{point}}
                                                        </h5>
                                                    </div>
                                                    <div v-if="op.name === '发票识别' && res">
                                                        <h5 v-for="i in res" :key="i._id">
                                                            {{i.words}}
                                                        </h5>
                                                    </div>
                                                    <div v-if="op.name === '身份证识别' && res">
                                                        <h4 v-for="(v, k) in res" :key="k._id">
                                                            {{k}}: {{v.words}}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="my-4">
                                                <input class="btn login-form__btn submit w-75"
                                                       @click="getResult(cur_img, op)" value="开始识别">
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
                                            <img class="img-fluid" :src="image.url" alt="" @click="select_img(image)">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">确定
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import {allImages, plateLicense, idCardRecognize, receipt} from "../api";

    export default {
        name: "Gallery",
        data() {
            return {
                cur_img: {
                    id: 0,
                    url: "https://music-01.niracler.com:8002/media/cimg/20200103_093212.png"
                },
                ops: [
                    {name: "车牌识别", val: "op2", active: "active", fun:plateLicense},
                    {name: "发票识别", val: "op3", active: "", fun:receipt},
                    {name: "身份证识别", val: "op4", active: "", fun:idCardRecognize},
                ],
                images: null,
                res: null,
            }
        },
        methods: {
            select_img(path) {
                this.cur_img = path
            },
            getImages() {
                allImages({}).then(response => {
                    if (response.status === 200) {
                        this.images = response.data.data;
                    } else {
                        alert('获取数据失败！！！')
                    }
                }).catch(function (error) { // 请求失败处理
                    self.console.log(error);
                });
            },
            getResult(img, op) {
                op.fun({
                    params: {
                        id: img.id
                    }
                }).then(response => {
                    if (response.status === 200) {
                        self.console.log(response.data)
                        this.res = response.data.words_result;
                    } else {
                        alert('获取数据失败！！！')
                    }
                }).catch(function (error) { // 请求失败处理
                    self.console.log(error.response);
                });
            }
        },
        created() {
            this.getImages();
        },
    }
</script>

<style scoped>

</style>