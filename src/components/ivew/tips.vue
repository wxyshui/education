<template>
    <div class="tips">
        <p>{{list.title}}</p>
        <ul>
            <li v-for="(v, i) of list.arr" :key="i">· {{v}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'tips',
    props: {
        list: Object
    }
}
</script>

<style>
    .tips {
        width: 100%;
        height: 100%;
        border: 1px solid #DCDFE6;
        background: #00b087;
        padding: 0.2rem 0.16rem;
    }
    .tips > p {
        font-size: 0.2rem;
        font-weight: bold;
        margin-bottom: 0.1rem;
    }
    .tips ul li {
        padding: 0.1rem 0;
    }
</style>