<template>
	<view>
		<view class="navbar">
			<!-- 这里是标题栏 -->
		</view>
		<scroll-view scroll-y="true" class="page-content">
			<!-- 这里是内容区 -->
			<view></view>
		</scroll-view>
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

<style lang='scss' scoped>
/* 标题栏 */
.navbar{
	position: fixed;
	top: 0;
	width: 100%;
	height: 44rpx;
}
/* 内容区 */
.page-content{
	position: fixed;
	top: 44rpx;
	left: 0;
	right: 0;
	bottom: 0;
}
.top-img{
	height: 48rpx;
	width: 48rpx;
}
</style>
