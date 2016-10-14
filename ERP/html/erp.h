<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>系统录入</title>
<style type="text/css">
div div{
float:left;
width:100px
}
div{
width:200px;
}
</style>
<script type="text/javascript">

             function toVaild(){
                 var val ;
                 val = document.Form_Data.inputDate.value;
             	if(val == ""){
                     alert("校验失败，不进行提交");
                     return false;
                 }
                 else{
                    //window.location.href="index.html";
                    setTimeout('window.location="index.html"',0)
                     return true;
                 }

             }
     </script>
</head>
<body>
<form name="Form_Data" action="/cgi-bin/insert2db.py" method="post" onsubmit="return toVaild()">

<div width=500 ><div>录入日期: </div><div><input type="text" name="inputDate" size="30" maxlength=100> <br /></div></div>
<div width=500 ><div>仪器名称: </div><div><input type="text" name="dev_name" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>型号: </div><div><input type="text" name="module" size="30"  maxlength=100> <br /></div></div>
<div width=500 ><div>配置: </div><div><input type="text" name="config" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>串号: </div><div><input type="text" name="imei" size="30" maxlength=100 > <br /></div></div>
<div width=500 ><div>送货时间: </div><div><input type="text" name="dateBydelivery" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>生效日期: </div><div><input type="text" name="effective_date" size="30"  maxlength=100> <br /></div></div>
<div width=500 ><div>客户: </div><div><input type="text" name="customer" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>租期: </div><div><input type="text" name="term" size="30"  maxlength=100> <br /></div></div>
<div width=500 ><div>合同状态: </div><div><input type="text" name="contract_status" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>公司设备: </div><div><input type="text" name="device_corp" size="30"  maxlength=100> <br /></div></div>
<div width=500 ><div>外调设备: </div><div><input type="text" name="device_outside" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>外调日期: </div><div><input type="text" name="dev_outside_date" size="30"  maxlength=100> <br /></div></div>
<div width=500 ><div>外调生效日期: </div><div><input type="text" name="effective_dateByoutside" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>调货供应商: </div><div><input type="text" name="transfer_supplier" size="30"  maxlength=100> <br /></div></div>
<div width=500 ><div>调货价格: </div><div><input type="text" name="transfer_price" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>外租价格: </div><div><input type="text" name="priceByRent" size="30"  maxlength=100> <br /></div></div>
<div width=500 ><div>付款状态: </div><div><input type="text" name="payment_date" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>换货日期: </div><div><input type="text" name="dateByExchange" size="30"  maxlength=100> <br /></div></div>
<div width=500 ><div>换货串号: </div><div><input type="text" name="imeiByExchange" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>换货原因: </div><div><input type="text" name="reasonByExchange" size="30" maxlength=100> <br /></div></div>
<div width=500 ><div>退回维修时间: </div><div><input type="text" name="dateByRework" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>维修OK时间: </div><div><input type="text" name="dateByReworkOK" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>维修备注: </div><div><input type="text" name="noteByRework" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>归还日期: </div><div><input type="text" name="dateByReturn" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>归还串号: </div><div><input type="text" name="imeiByReturn" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>归还供应商: </div><div><input type="text" name="supplierByReturn" size="30" maxlength=100>   <br /></div></div>
<div width=500 ><div>归还备注: </div><div><input type="text" name="noteByReturn" size="30" maxlength=100>   <br /></div></div>


<div width=500 ><div><input type="submit" value="提交" /></div><div>
<div width=500 ><div><input type="reset" value="重置" /></div><div>
</form>
</body>

</html>

