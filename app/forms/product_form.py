from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import StringField, IntegerField, FloatField, BooleanField



class ProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    photo_url = StringField('photo_url')
    company_id = IntegerField("company_id")
    product_category = StringField("product_category")
    manufacturing_process_id = IntegerField("manufacturing_process_id")
    product_weight_g = FloatField("product_weight_g")
    unit = StringField("unit")
    factory_id = IntegerField("factory_id")
    package_weight_g = FloatField("package_weight_g")
    transport_mode_id = IntegerField("transport_mode_id")
    number_of_cycles = IntegerField("number_of_cycles")
    returnable = BooleanField("returnable")
    product_returned_percent = FloatField("product_returned_percent")
    product_recycled_percent = FloatField("product_recycled_percent")
    carbon_footprint_kg = FloatField("carbon_footprint_kg")
