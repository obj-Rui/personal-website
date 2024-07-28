<template>
  <Vcode v-bind="$attrs" :imgs="imgList" />
</template>
<script lang="ts" setup>
import img1 from '/@/assets/verifyPic/verify (1).webp';
import img2 from '/@/assets/verifyPic/verify (2).webp';
import img3 from '/@/assets/verifyPic/verify (3).webp';
import img4 from '/@/assets/verifyPic/verify (4).webp';

const imgList = [img1, img2, img3, img4];

import Vcode from 'vue3-puzzle-vcode';
</script>
<style lang="less" scoped></style>
