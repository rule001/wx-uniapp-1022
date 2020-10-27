<template>
	<view>
		<!-- 介绍内容 -->
		<view class="introduce">
			<text class="title">介绍</text>
			<view class="text">
				衢州市衢江区工商业联合会(简称工商联，又称商会)是衢州工商界组织的人民团体和民间商会， 其前身是衢州商会，成立于1906年。新中国成立 后，于1953年9月成立衢县工商联，“文革”期 间，停止活动，1982年11月恢复，1985年7月撤 地建市后，仍沿用原名。当时主要是经济性组织。1991年7月中共中央下达中发（1991）15号文件，明确工商联在新的历史时期是中国共产党领导下的以统战性为主，兼有经济性、民间性的人民团 体和民间商会。
			</view>
			<view class="text">
				衢州市工商联是党联系非公有制经济的桥梁和纽带，是政府管理非公有制经济的助手，是中国人民政治协商会议的组成单位，在党和政府领 导下，参与政治协商，民主监督，是我国爱国统 一战线的一支重要力量。
			</view>
			<view class="text">
				新中国成立后，市工商联在党和政府的领导下，团结广大民族工商业者，组织和引导他们积极参加恢复和发展国民经济的建设，教育他们遵 守政府的法令和政策，维护他们的合法权益，对 实现资本主义工商业的改造，发挥了积极作用。
			</view>
		</view>
		<!-- 联系我们 -->
		<view class="link">
			<text class="title">联系我们</text>
			<view class="box1">
				<text class="iconfont a1">&#xe615;</text>
				<text class="text">0519-968595896</text>
				<text class="text1">点击拨打</text>
			</view>
			<view class="box1">
				<text class="iconfont a2">&#xe65e;</text>
				<text class="text">1286951236@qq.com</text>
			</view>
			<view class="box1">
				<text class="iconfont a3">&#xe63e;</text>
				<text class="text">浙江省衢州市衢江区市XXXX路XXXX号</text>
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
		onLoad() {
	
		},
		methods: {
	
		}
	}
</script>

<style scoped lang='scss'>
	/* 介绍内容 */
	.introduce{
		padding: 20rpx;
		margin: 20rpx;
		background: #F5F6FB;
		border-radius: 10rpx;
		.title{
			font-size: 32rpx;
			font-weight: bold;
			display: block;
			margin: 0 0 20rpx 0;
			text-align:center;
		}
		.text{
			font-size: 28rpx;
			line-height:44rpx;
			text-indent: 60rpx;
			color: #484653;
			margin: 0 0 40rpx 0;
		}
	}
	.link{
		padding: 20rpx;
		margin: 20rpx;
		background: #F5F6FB;
		border-radius: 10rpx;
		.title{
			font-size: 32rpx;
			font-weight: bold;
			display: block;
			margin: 0 0 20rpx 0;
			text-align:center;
		}
		.text{
			font-size: 28rpx;
			line-height:44rpx;
			text-indent: 60rpx;
			color: #484653;
			margin: 0 0 40rpx 0;
		}
		.box1{
			margin: 20rpx 0 0 0;
			.iconfont{
				color: #fff;
				border-radius:10rpx;
				font-size: 28rpx;
				padding:4rpx;
				margin: 0 20rpx 0 0;
			}
			.a1{
				background: #3ECF6E;
			}
			.a2{
				background: #FFA667;
			}
			.a3{
				background: #52B1EF;
			}
			.text{
				color:#484653;
			}
			.text1{
				float: right;
				background: #fff;
				padding: 10rpx 16rpx;
				color: #3ECF6E;
				font-size: 28rpx;
				border-radius:20rpx;
				box-shadow: 2rpx 2rpx 40rpx #BFFFB0;
			}
		}
	}
</style>
