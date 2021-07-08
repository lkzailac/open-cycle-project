from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, ValidationError
from wtforms import StringField, IntegerField, FloatField, BooleanField, FieldList

def weight_in_g(form, field):
    weight_g = field.data
    if weight_g < 10:
        raise ValidationError("Please enter weight in grams.")

# def returnable_true(form, field):
#     returnable = field.data
#     if returnable:
#         validators=[DataRequired()]


class ProductForm(FlaskForm):
    # pass
    name = StringField('name', validators=[DataRequired()])
    photo_url = StringField('photo_url', validators=[DataRequired()])
    company_id = IntegerField("company_id", validators=[DataRequired()])
    product_category = StringField("product_category", validators=[DataRequired()])
    compArray = FieldList(IntegerField("compArray", validators=[DataRequired()]))
    manufacturing_process_id = IntegerField("manufacturing_process_id", validators=[DataRequired()])
    product_weight_g = FloatField("product_weight_g", validators=[DataRequired(), weight_in_g])
    package_weight_g = FloatField("package_weight_g", validators=[DataRequired(), weight_in_g])
    unit = StringField("unit", validators=[DataRequired()])
    factory_id = IntegerField("factory_id", validators=[DataRequired()])
    transport_mode_id = IntegerField("transport_mode_id", validators=[DataRequired()])
    useArray = FieldList(IntegerField("useArray", validators=[DataRequired()]))
    number_of_cycles = IntegerField("number_of_cycles", validators=[DataRequired()])
    returnable = BooleanField("returnable")
    product_returned_percent = FloatField("product_returned_percent")
    product_recycled_percent = FloatField("product_recycled_percent")
