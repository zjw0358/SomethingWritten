#! /user/bin/python3
#-*-coding:utf-8 -*-





#DB_FILE_PATH="F:\\WorkHard\\SomethingWritten\\ERP\\warehouse.db"

DB_FILE_PATH="/home/hd/OA/warehouse.db"
TABLE_NAME="summary"

TableTagForInsert = ('inputDate','devName','module','config','imei',
             'dateBydelivery','effective_date','customer','term','contract_status',
             'device_corp','device_outside','dev_outside_date','effective_dateByoutside','transfer_supplier',
             'transfer_price','priceByRent','payment_date','dateByExchange','imeiByExchange',
             'reasonByExchange','dateByRework','dateByReworkOK','noteByRework','dateByReturn',
             'imeiByReturn','supplierByReturn','noteByReturn'  )

TableTagForModifyDelete = ('id','inputDate','devName','module','config','imei',
             'dateBydelivery','effective_date','customer','term','contract_status',
             'device_corp','device_outside','dev_outside_date','effective_dateByoutside','transfer_supplier',
             'transfer_price','priceByRent','payment_date','dateByExchange','imeiByExchange',
             'reasonByExchange','dateByRework','dateByReworkOK','noteByRework','dateByReturn',
             'imeiByReturn','supplierByReturn','noteByReturn'  ) 

Row_FieldForDisplay=(
	"id",
	"日期",
	"仪器",
	"型号",
	"配置",
	"串号",
	"送货",
	"生效",
	"客户",
	"租期",
	"合同",
	"公司设备",
	"外调设备",
	"外调日期",
	"生效日期",
	"供应商",
	"调货价格",
	"外租价格",
	"付款",
	"换货日期",
	"换货串号",
	"换货原因",
	"退回时间",
	"维修OK时间",
	"维修备注",
	"归还日期",
	"归还串号",
	"归还供应商",
	"归还备注" 
	)
