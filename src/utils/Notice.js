 import { Message } from 'element-ui';
 var Notice={
	 message:function(message,type){
		  Message({
		           showClose: true,
		           message: message,
		           type: type
		 });
	 }
 }
 export default Notice
 
