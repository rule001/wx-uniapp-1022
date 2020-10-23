<template>
	<view>
		<!-- flex 盒 -->
		<view class="list-content">
			<!-- 左边/第一列 -->
			<view class="video-list">
				<view class="video-item" v-for="(item, index) in showList.colList1"></view>
			</view>
			<!-- 右边/第二列 -->
			<view class="video-list">
				<view class="video-item" v-for="(item, index) in showList.colList2"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang='scss'>
.list-content{
 	display: flex;
	flex-direction: row; // 水平方向排版
}
.video-list{
 	display: flex;
	flex-direction: column; // 垂直方向排版
}
</style>
