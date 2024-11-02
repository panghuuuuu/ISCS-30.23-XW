# from io import BytesIO

# from blockinfo.models import *

# from datetime import datetime

# from .auth import spreadsheet_service
# from .auth import drive_service

# import cloudinary
# import qrcode

# from decouple import config

# def generate_code(data):

# 	qr = qrcode.QRCode(
# 		version = 12,
# 		error_correction=qrcode.constants.ERROR_CORRECT_H,
# 		box_size = 4,
# 		border = 4
# 	)

# 	qr_content = ("%s/qrscan/%s" % (config('DEPLOY_URL'), data))
# 	qr.add_data(qr_content)
# 	qr.make()
# 	img = qr.make_image()
	
# 	blob = BytesIO()

# 	img.save(blob, 'PNG')
# 	upload_response = cloudinary.uploader.upload(
# 		blob.getvalue(), 
# 		folder="qrcodes/"
# 		)
# 	return upload_response['secure_url']

# def append_range(data, user):
# 	range = 'Raw Data!A2:G2'
# 	spreadsheet_id = '17qzMJP6WkrlGd0OrcoKL6CAcgbunYK2FNEezFbx2I3U'
# 	values = [
# 		[str(datetime.now()), str(data.student.id_number), str(data.student.block), str(data.student.name), str(data.student.user.username), str(data.date.date), str(user)]
# 	]
# 	body = {
# 		'values': values
# 	}
# 	value_input_option = 'USER_ENTERED'
# 	result = "YES"
# 	result = spreadsheet_service.spreadsheets().values().append( spreadsheetId=spreadsheet_id, range=range, valueInputOption=value_input_option, body=body).execute()
# 	print(result)
# 	return result


from io import BytesIO

from blockinfo.models import *

from datetime import datetime

# from .auth import spreadsheet_service
# from .auth import drive_service

import cloudinary
import qrcode

from decouple import config

# def generate_code(data):

#  qr = qrcode.QRCode(
#   version = 12,
#   error_correction=qrcode.constants.ERROR_CORRECT_H,
#   box_size = 4,
#   border = 4
#  )

#  qr_content = ("%s/qrscan/%s" % (config('DEPLOY_URL'), data))
#  qr.add_data(qr_content)
#  qr.make()
#  img = qr.make_image()
 
#  blob = BytesIO()

#  img.save(blob, 'PNG')
#  upload_response = cloudinary.uploader.upload(
#   blob.getvalue(), 
#   folder="qrcodes/"
#   )
#  return upload_response['secure_url']

def append_range(data, user):
 range = 'Raw Data!A2:G2'
 spreadsheet_id = '17qzMJP6WkrlGd0OrcoKL6CAcgbunYK2FNEezFbx2I3U'
 values = [
  [str(datetime.now()), str(data.student.id_number), str(data.student.block), str(data.student.name), str(data.student.user.username), str(data.date.date), str(user)]
 ]
 body = {
  'values': values
 }
 value_input_option = 'USER_ENTERED'
 result = "YES"
 result = spreadsheet_service.spreadsheets().values().append( spreadsheetId=spreadsheet_id, range=range, valueInputOption=value_input_option, body=body).execute()
 print(result)
 return result