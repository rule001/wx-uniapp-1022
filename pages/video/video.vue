<template>
	<view>
		<scroll-view class="scroll-view" scroll-x="true" scroll-left="120">
		    <view class="item uni-bg-red">A1</view>
		    <view class="item uni-bg-green">B1</view>
		    <view class="item uni-bg-blue">C1</view>
			<view class="item uni-bg-red">A2</view>
			<view class="item uni-bg-green">B2</view>
			<view class="item uni-bg-blue">C2</view>
			<view class="item uni-bg-red">A3</view>
			<view class="item uni-bg-green">B3</view>
			<view class="item uni-bg-blue">C3</view>
			<view class="item uni-bg-red">A4</view>
			<view class="item uni-bg-green">B4</view>
			<view class="item uni-bg-blue">C4</view>
		</scroll-view>
		<scroll-view class="scroll-view" scroll-x>
		    <view class="item" v-for="(item, index) in navList" :class="{active: curNav == item.id}" :key="item.id" @click="switchNav(item.id, index)">
		        <view class="desc">{{item.name}}</view>
		    </view>
		    <view class="slide" :style="'width: '+ sliderWidth +'rpx;transform: translateX('+ sliderOffset +'rpx)'"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList:[
					{
						name:'A1'
					},
					{
						name:'A2'
					},
					{
						name:'A3'
					},
					{
						name:'A4'
					}
				]
			}
		},
		methods: {
			// 导航切换
			switchNav(id, index) {
			    this.curNav = id
			    this.sliderWidth = index == 1 ? 140 : 60;
			
			    this.sliderOffset = 126 * index + (index > 1 ? 80 : 16) + (index == 0 && 16);
			    // 加载数据
			    this.getRelatedVideo(id)
			}
		}
	}
</script>

<style lang='scss' scoped>
/* .scroll-view {
    width: 100%;
    white-space: nowrap;
    .item {
        position: relative;
        display: inline-block;
        width: 218rpx;
        padding-bottom:16rpx;
        margin-right: 16rpx;
        line-height: 34rpx;
    }
} */
.scroll-view {  
    position: fixed;
    top: 0;
    width: 100%;
    white-space: nowrap;
    text-align: center;
    line-height: 86rpx;
    color: #333;
    .item {
        position: relative;
        display: inline-block;
        min-width: 126rpx;
        padding: 0 20rpx;
        line-height: 34rpx;
        padding-bottom: 16rpx;
        /* <!-- 触发项样式 --> */
        &.active{
            color:#f32628;
        }
    }
}
/* <!-- 滑块样式 --> */
.slide {
    position: absolute;
    width: 60rpx;
    height: 4rpx;
    left: 0;
    bottom: 0rpx;
    background: #f32628;
    transition: transform 0.3s;
}
</style>
