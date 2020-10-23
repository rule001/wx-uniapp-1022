<template>
	<view>
		<!-- 轮播图 -->
	    <swiper class="swiper" :autoplay="true" :indicator-dots="true" indicator-active-color="#ff372b"
	     indicator-color='rgba(255,255,255, .5)' duration="500" :circular="true">
	        <swiper-item v-for="(item,index) in swiper" :key="index">
	            <view class="item">
	                <image :src="item.imageUrl" class="img"></image>
	                <view class="tag">{{item.typeTitle}}</view>
	            </view>
	        </swiper-item>
	    </swiper>
		<!-- 业务入口 -->
		<view class="main-bar flex-box">
			<view class="flex-item" v-for="(item,index) in contentBar" :key='index'>
				<image :src="'../../static/image/tab/tab'+(index+1)+'.png'" class="img"></image>
				<view>{{item.name}}</view>
				<view v-if='index==0' class="date">{{curDate}}</view>
			</view>
		</view>
		<!-- 推荐歌单数据 -->
		<songList title="推荐歌单" link="test?id=123" :list="recommendSongs"/>
		<!-- 歌单分类 -->
		<view class="song-list">
			<view class="switch-line">
				<view class="flex-box">
					<view class="switch-item" :class="{on:newType==1}" @click="switchTab(1)">新碟</view>|
					<view class="switch-item" :class="{on:newType==2}" @click="switchTab(2)">新歌</view>
				</view>
				<template v-if='newType==1'>
					<view class="more">更多新碟</view>
				</template>
				<template v-if='newType==2'>
					<view class="more">更多新歌</view>
				</template>
			</view>
			<scroll-view class="scroll-view" scroll-x>
				<view class="item" v-for="(item,index) in latestAlbum" :key='index'>
					<image class="img" :src='item.picUrl+$imgSuffix'></image>
					<view class="des ellipsis">{{item.name}}</view>
					<view class="desc ellipsis c9">{{item.artist.name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import songList from '@/components/songList'
	export default {
		components:{
			songList
		},
		data() {
			return {
				swiper:[
					{
						imageUrl:'../../static/image/banner/banner1.png',
						typeTitle:'123'
					},
					{
						imageUrl:'../../static/image/banner/banner1.png',
						typeTitle:'123'
					}
				],
				contentBar:[
					{ name: "管工1" },
					{ name: "管工2" },
					{ name: "管工3" },
					{ name: "管工4" },
					{ name: "管工5" }
				],
				newType:'1'
			}
		},
		onLoad() {
		},
		methods: {
			// 切换新碟新歌
			switchTab(type){
				this.newType=type;
				// 根据类型加载不同数据
				if(type==1){
					//新碟数据
				}
				if(type==2){
					//新歌数据
				}
			}
		}
	}
</script>

<style lang="scss">
	// 轮播图
	.swiper{
		padding:20rpx;
		.item{
			.img{
				width: 100%;
				height: 300rpx;
			}
		}
	}
	// 业务入口
	.main-bar{
		padding-bottom: 22rpx;
		text-align: center;
		line-height: 70rpx;
		color: #666;
		border-bottom: 1rpx solid #e6e6e6;
		.img{
			display: block;
			width: 92rpx;
			height: 92rpx;
			margin:0 auto;
		}
	}
	.song-list{
		font-size: 34rpx;
		font-weight: 600;
		line-height: 110rpx;
		.switch-line{
			padding: 0 32rpx;
			display: flex;
			justify-content: space-between;
			.more{
				font-size: 28rpx;
				color: #333;
			}
		}
	}
</style>
