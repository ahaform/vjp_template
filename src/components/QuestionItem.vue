<script setup lang="ts">
import { ref, computed } from 'vue';

const questions = ref([
    {
        id: "q1",
        title: "Q1.  长时间站立行走后，你的脚部是否经常感到疼痛，酸胀？",
        description: "",
        type: "choice",
        options: [{
            text: "是",
            value: "是"
        }, {
            text: "否",
            value: "否"
        }],


        hooks: {
            afterSelect: ''
        }



    },
    {
        id: "q2",
        title: "Q2. 长时间行走站立后，以下脚部问题中哪里最令你不适？",
        type: "choice",
        options: [{
            text: "脚趾挤压红肿",
            value: "脚趾挤压红肿"
        }, {
            text: "脚底酸痛疲劳",
            value: "脚底酸痛疲劳"
        }, {
            text: "拇指外翻部分红肿",
            value: "拇指外翻部分红肿"
        }, {
            text: "脚后跟磨破，酸疼",
            value: "脚后跟磨破，酸疼"
        }],
    },
    {
        id: "q3",
        title: "Q3. 你现在是如何减轻久站久走时的疲劳感的？",
        type: "choice",
        options: [{
            text: "选择运动鞋",
            value: "选择运动鞋"
        }, {
            text: "携带一双鞋或多双替换",
            value: "携带一双鞋或多双替换"
        }, {
            text: "单独购买鞋垫",
            value: "单独购买鞋垫"
        }, {
            text: "我慢します",
            value: "我慢します"
        }],
    },
    {
        id: "q4",
        title: "Q4. VIVAIA Aria5最吸引你的一点是？",
        type: "choice",
        options: [{
            text: "功能性强，适合久走久站",
            value: "功能性强，适合久走久站"
        }, {
            text: "运动鞋构造、舒适脚感",
            value: "运动鞋构造、舒适脚感"
        }, {
            text: "鞋垫柔软、回弹性高",
            value: "鞋垫柔软、回弹性高"
        }, {
            text: "搭载足弓支撑",
            value: "搭载足弓支撑"
        }, {
            text: "面料柔软、包裹性强",
            value: "面料柔软、包裹性强"
        }, {
            text: "适合拇指外翻",
            value: "适合拇指外翻"
        }, {
            text: "适合宽脚",
            value: "适合宽脚"
        }, {
            text: "百搭、使用场景多",
            value: "百搭、使用场景多"
        }, {
            text: "美观时尚",
            value: "美观时尚"
        }],
    }
]);

const questionCount = computed(() => questions.value.length)


</script>
<template>
    <div class="wrapper" v-for="(q, idx) in questions" :key="idx">

        <div class="flex flex-col text-center bg-jp-yellow pt-12 pb-12 pl-5 pr-5">
            <div class="title">
                <div class="main text-2xl font-bold">たっだ{{ questionCount }}問！</div>
                <div class="sub text-base mt-1.5">カンタン{{ questionCount * 10 }} 秒で完了！</div>
            </div>

            <div class="steps mt-7 mb-7 flex items-center justify-center">

                <template v-for="l in questionCount" :key="l">
                    <div class="w-9 h-9  rounded-full flex items-center justify-center" :class="[{
                        'bg-jp-step-active': l === idx + 1,
                        'text-jp-text-yellow': l !== idx + 1,
                        'bg-white': l !== idx + 1,
                        'text-white': l === idx + 1
                    }]">
                        {{
                            l < 10 ? `0${l}` : l }}</div>
                            <div class="flex justify-center items-center text-jp-text-yellow font-bold ml-2 mr-2"
                                v-if="l !== questionCount">---></div>
                </template>



            </div>

            <div class="questions bg-white flex flex-col p-7">
                <div class="question text-xl font-bold">
                    {{ q.title }}
                </div>
                <div class="answers mt-5">
                    <div class="answer h-10 bg-jp-yellow flex justify-left items-center pl-8 text-xs mt-2.5"
                        v-for="(opt, index) in q.options" :key="index">
                        <input type="checkbox" :id="`id_opt${idx}_${index}`" class="h-full mr-2.5" />
                        <label :for="`id_opt${idx}_${index}`">
                            {{ opt.text }}
                        </label>
                    </div>
                </div>

            </div>
        </div>


        <div class="bg-white pt-12 pb-12 pl-5 pr-5"></div>

    </div>
</template>
<style scoped>
.wrapper {}
</style>