from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms import StringField, IntegerField, FloatField, BooleanField, FieldList



class ProductForm(FlaskForm):
    pass
    # name = StringField('name', validators=[DataRequired()])
    # photo_url = StringField('photo_url')
    # company_id = IntegerField("company_id")
    # product_category = StringField("product_category")
    # compArray = FieldList(IntegerField("compArray"))
    # manufacturing_process_id = IntegerField("manufacturing_process_id")
    # product_weight_g = FloatField("product_weight_g")
    # package_weight_g = FloatField("package_weight_g")
    # unit = StringField("unit")
    # factory_id = IntegerField("factory_id")
    # transport_mode_id = IntegerField("transport_mode_id")
    # useArray = FieldList(IntegerField("useArray"))
    # number_of_cycles = IntegerField("number_of_cycles")
    # returnable = BooleanField("returnable")
    # product_returned_percent = FloatField("product_returned_percent")
    # product_recycled_percent = FloatField("product_recycled_percent")
