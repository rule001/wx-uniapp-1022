<template>
	<view>
		<!-- indicator-dots   是否显示面板的指示点 -->
		<!-- autoplay 是否自动切换 -->
		<!-- indicator-active-color 当前选中的指示点的颜色 -->
		<!-- indicator-color 指示点的颜色 -->
		<!-- duration  滑动动画时长 -->
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" indicator-active-color="#EF6552"
	     indicator-color='rgba(255,255,255, .5)' duration="500" :circular="true">
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<image src="../../static/image/banner/banner2.png" mode="" class="img"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-red">
					<image src="../../static/image/banner/banner3.png" mode="" class="img"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 相关服务-->
		<view class="service">
			<text class="title">相关服务</text>
			<view class="list" v-for="(item,index) in serviceList" :key='index'>
				<image src="../../static/logo.png" class="left"></image>
				<view class="right">
					<view class="top">
						<text class="t1">{{item.title}}</text>
						<view class="t2">
							<text>了解详情</text>
							<text class="iconfont">&#xe6ba;</text>
						</view>
					</view>
					<view class="bottom">
						<text class="p c1">{{item.p1}}</text>
						<text class="p c2">{{item.p2}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				serviceList:[
					{
						title:'医疗服务',
						p1:'健康咨询',
						p2:'自助挂号'
					},
					{
						title:'金融服务',
						p1:'著名律所',
						p2:'著名律师'
					},
					{
						title:'法律咨询',
						p1:'知名律师',
						p2:'法律维权'
					},
					{
						title:'政策咨询',
						p1:'政策法规',
						p2:'产业政策'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	// 轮播图
	.swiper{
		padding: 20rpx;
		.img{
			width: 100%;
			height:300rpx;
		}
	}
	// 相关服务
	.service{
		padding: 20rpx;
		.title{
			font-size: 36rpx;
			font-weight: bold;
		}
		.list{
			padding: 20rpx 0;
			.left{
				float:left;
				height:160rpx;
				width:160rpx;
				margin: 0 20rpx 0 0;
				display: inline-block;
			}
			.right{
				padding: 20rpx;
				.top{
					display: flex;
					justify-content: space-between;
					margin: 0 0 20rpx 0;
					.t1{
						font-size: 32rpx;
						font-weight: bold;
					}
					.t2{
						color: #909090;
						font-size: 24rpx;
					}
				}
				.bottom{
					.p{
						border-radius:8rpx;
						font-size: 24rpx;
						padding: 6rpx;
						margin: 0 20rpx 0 0;
					}
					.c1{
						border: 2rpx solid #27C5FA;
						color: #27C5FA;
					}
					.c2{
						border: 2rpx solid #EF6552;
						color: #EF6552;
					}
				}
			}
		}
	}
</style>
