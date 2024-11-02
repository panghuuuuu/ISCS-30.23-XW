from django.forms import ModelForm, Textarea

from .models import *

# Create a post form
class ConcernForm(ModelForm):
    class Meta:
        model = Concern
        fields = '__all__'
        widgets = {

            # Can edit the field below if textarea is not desirable
            'body': Textarea()
        } 

            # Evisioned frontend

            # <h1>Freshie Concern Portal</h1>
            # {% if submitted %}
            #   Your concern has been submitted!
            #   <button>Back to Home </button>
            # {% else %}
            # <form action='' method=POST>
            #     <% csrf_token %>

            #         {{ form.as_p }} or {{ form }}
            #         <input type='submit' value='Send' class=''>
            # </form>
            # {% endif %}