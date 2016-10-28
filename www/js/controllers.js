angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	
	
	function initFileInput(ctrlName, uploadUrl) {    
		var control = $('#' + ctrlName); 

		control.fileinput({
			language: 'zh', //设置语言
			uploadUrl: uploadUrl, //上传的地址
			allowedFileExtensions : ['jpg', 'png','gif'],//接收的文件后缀
            maxFileCount: 100,
            enctype: 'multipart/form-data',
			showUpload: false, //是否显示上传按钮
			showCaption: false,//是否显示标题
            browseClass: "btn btn-primary", //按钮样式         
			previewFileIcon: "<i class='glyphicon glyphicon-king'></i>", 
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
            uploadExtraData: { secureLevel: 0 },
		});
	};
	
	initFileInput("file-upload", "http://localhost:8100/OxygenWeb/commonService/fileUploadSingle");
	
	
	$("#downloadTypeZero").click(function(){
		
		var getResourceOwnerAllOption = {
			type: 'POST',
			url: '/OxygenWeb/commonService/fileDownloadSingle',
			data: { id: "cb05d2f5-026e-4d23-8f5d-b6f6ce9f5d0e" },
			success: function(data){
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
			},
			timeout: function(data){
			}
		};
		//initialize the page
		$.ajax(getResourceOwnerAllOption);
	});
	
	$("#downloadTypeOne").click(function(){
		
		var getResourceOwnerAllOption = {
			type: 'POST',
			url: '/OxygenWeb/commonService/fileDownloadSingle',
			data: { id: "47683794-40ab-4977-bf04-dd1c87035453" },
			success: function(data){
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
			},
			timeout: function(data){
			}
		};
		//initialize the page
		$.ajax(getResourceOwnerAllOption);
	});
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
  
  var myTree = new econny.work.tree(new econny.work.node("123","first level node"), "my new tree");
  console.log(myTree);
  console.log(myTree.getTree());
  
  var myFirstNode = myTree.findNodeFromRoot("123");
  console.log(myFirstNode);
  
  myFirstNode.addChild(new econny.work.node("456","second level node")); 
  console.log(myTree);
  
  var mySecondNode = myTree.findNodeFromRoot("456");
  console.log(mySecondNode);
  
  mySecondNode.addChild(new econny.work.node("789","third level node")); 
  console.log(myTree);
});
