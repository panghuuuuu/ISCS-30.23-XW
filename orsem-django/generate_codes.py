import csv
import os, django
from datetime import datetime

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "orsem.bsettings")
django.setup()
from blockinfo.models import *
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

UserModel = get_user_model()

def generate_blocks(filename):
	with open('./files/' + filename) as f:
		reader = csv.reader(f, delimiter=',')
		for row in reader:
			try:
				print(row)
				block = row[0]
				onsite_time_start = datetime.strptime(row[1], "%Y/%m/%d %H:%M")
				onsite_time_end = datetime.strptime(row[2], "%H:%M").time()

				block_info = BlockInfo.objects.filter(block = block)
				if not block_info.exists():
					block_info = BlockInfo()
				else:
					block_info = block_info[0]
				block_info.block = block
				block_info.onsite_time_start = onsite_time_start
				block_info.onsite_time_end = onsite_time_end

				block_info.save()

			except Exception as e:
				print(e)

def generate_students(filename):
    file_path = os.path.join(os.getcwd(), filename)
    
    try:
        with open(file_path) as f:
            reader = csv.reader(f, delimiter=',')
            
            next(reader)
            
            for row in reader:
                try:
                    name = row[0]  
                    id_number = int(row[1]) 
                    course = row[2] 
                    school = row[3]
                    block = row[4]  
                    email = row[5]  
                    
                    if not User.objects.filter(username=email).exists():
                        user = User.objects.create_user(email, password='0bt41np4ss')
                    else:
                        user = User.objects.get(username=email)
                    
                    student, created = Student.objects.get_or_create(id_number=id_number)
                    
                    student.id_number = id_number
                    student.email = email
                    student.name = name
                    student.course = course
                    student.block = block
                    student.user = user
                    student.school = school 
                    
                    student.save()
                    
                except (IndexError, ValueError) as e:
                    print(f"Error processing row: {e}")
                    
                except Exception as e:
                    print(f"Unhandled exception: {e}")
    
    except FileNotFoundError:
        print(f"File '{filename}' not found at '{file_path}'.")

def generate_codes():
	for student in Student.objects.all():
		try:
			entrant = StudentEntry.objects.filter(student=student)

			if not entrant.exists():
				entrant = StudentEntry()
			else:
				entrant = entrant[0]

			block = BlockInfo.objects.get(block=student.block)
			date_of_entry = block.onsite_time_start
			schedule = OnsiteSchedule.objects.get(date=date_of_entry)
			
			entrant.student = student
			entrant.date = schedule
			entrant.save()
		except Exception as e:
			print(e)

def generate_passes(filename):
    file_path = os.path.join(os.getcwd(), filename)
    
    with open(file_path, 'r') as f:
        reader = csv.reader(f, delimiter=',')
        next(reader)  
        
        for row in reader:
            id_number = int(row[0])
            entry_pass_link = row[1]  
            
            try:
                student = Student.objects.get(id_number=id_number)
                student.entry_pass = entry_pass_link
                student.save()
                print(f"Updated entry pass for {student.id_number}")
            except Student.DoesNotExist:
                print(f"Student with id_number {id_number} does not exist.")
            except Exception as e:
                print(f"Error updating entry pass for {id_number}: {e}")


def runner():
    print("QUICK DATA LOADER FOR ORSEM")
    print("Make sure to upload the CSV files inside ./files/")
    selector = int(input("What function would you use? [1] Generate Students [2] Generate Block Info [3] Generate QR codes: [4] Upload entry passes "))
    file_to_work = input("Name of file (CSV) to work with (including the file extension): ")

    if selector == 1:
        generate_students(file_to_work)
    elif selector == 2:
        generate_blocks(file_to_work)
    elif selector == 3:
        generate_codes()
    elif selector == 4:
        generate_passes(file_to_work)
    else:
        print("Invalid selection. Please choose a valid option.")


if __name__ == '__main':
	runner()

runner()
