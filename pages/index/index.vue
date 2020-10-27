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
					<image src="../../static/image/banner/banner1.png" mode="" class="img"></image>
				</view>
			</swiper-item>
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
		<!-- 服务推荐 -->
		<view class="service">
			<text class="title">服务推荐</text>
			<view class="list">
				<view v-for="(item,index) in imgList" :key="index" class="list-item" :style="{backgroundImage:`url(${item.url})`,backgroundSize: 'cover'}">
					<text class="tt">{{item.text}}</text>
				</view>
			</view>
		</view>
		<!-- 隔离带 -->
		<view class="line"></view>
		<!-- 商会动态 -->
		<view class="business">
			<view class="title-box">
				<text class="left">商会动态</text>
				<view class="right">
					<text>更多</text>
					<text class="iconfont">&#xe6ba;</text>
				</view>
			</view>
			<view class="content" v-for="(item,index) in businessList" :key='index'>
				<image :src="item.imgUrl" mode="" class="img"></image>
				<view class="text-box">
					<text class="t1">{{item.title}}</text>
					<text class="t2">{{item.date}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[
					{
						url:'https://qjqgsl.91jtg.com/images/btn_flzx_normal.png',
						text:'法律咨询'
					},
					{
						url:'https://qjqgsl.91jtg.com/images/btn_ylfw_normal.png',
						text:'医疗服务'
					},
					{
						url:'https://qjqgsl.91jtg.com/images/btn_jrfw_normal.png',
						text:'金融服务'
					}
				],
				// 商会动态数据
				businessList:[
					{
						imgUrl:'../../static/logo.png',
						title:'习近平总书记关切事：食为政 首—稳住农业基本',
						date:'2020-09-21 12:09:09'
					},
					{
						imgUrl:'../../static/logo.png',
						title:'消费扶贫取得新进展 采取措施 有效对接消',
						date:'2020-09-21 12:09:09'
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
	// 服务推荐模块
	.service{
		padding: 20rpx;
		.title{
			font-size: 36rpx;
			font-weight: bold;
		}
		.list{
			display: flex;
			justify-content: space-between;
			padding: 20rpx 0;
			.list-item{
				width: 208rpx;
				height: 96rpx;
				padding: 0 0 0 16rpx;
				.tt{
					color: #fff;
					font-size: 32rpx;
					line-height: 96rpx;
					font-weight: bold;
				}
			}
		}
	}
	// 隔离线条
	.line{
		background-color: #F6F6F6;
		height: 20rpx;
	}
	// 商会动态
	.business{
		padding: 20rpx;
		.title-box{
			display:flex;
			justify-content: space-between;
			padding: 20rpx 0;
			.left{
				font-size: 36rpx;
				font-weight: bold;
			}
			.right{
				font-size:28rpx;
				color: #999999;
			}
		}
		.content{
			margin: 0 0 20rpx 0;
			.img{
				height:200rpx;
				width: 300rpx;
				float: left;
				margin: 0 20rpx 0 0;
			}
			.text-box{
				padding: 20rpx 0 20rpx 20rpx;
				.t1{
					font-size: 32rpx;
					font-weight: bold;
					display: block;
					line-height: 44rpx;
				}
				.t2{
					font-size:28rpx;
					margin:40rpx 0 0 0;
					display: block;
					color: #999999;
				}
			}
		}
		
	}
</style>
