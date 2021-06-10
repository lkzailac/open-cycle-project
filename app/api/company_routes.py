from flask import Blueprint, request
from flask_login import login_required
from app.forms import ProductForm
from app.models import db
from app.models import Company
from app.models import Product
from app.models import Component
from app.models import Manufacturing_Process
from app.models import Factory
from app.models import Transport_Mode
from app.models import Consumer_Use
from app.models import Country_Grid

company_routes = Blueprint('company', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

@company_routes.route('/<int:id>')
def company(id):

    products_obj = Product.query.filter(Product.company_id == id).all()

    products = []

    for product in products_obj:
        products.append(product.to_dict())

    components_obj = Component.query.all()
    components = []
    for component in components_obj:
        components.append(component.to_dict())

    man_obj = Manufacturing_Process.query.all()
    manufacturing_processes = []
    for process in man_obj:
        manufacturing_processes.append(process.to_dict())

    factory_obj = Factory.query.all()
    factories = []
    for factory in factory_obj:
        factories.append(factory.to_dict())

    trans_obj = Transport_Mode.query.all()
    transport_modes = []
    for mode in trans_obj:
        transport_modes.append(mode.to_dict())

    con_obj = Consumer_Use.query.all()
    consumer_uses = []
    for con in con_obj:
        consumer_uses.append(con.to_dict())

    grid_obj = Country_Grid.query.all()
    grids = []
    for g in grid_obj:
        grids.append(g.to_dict())


    return {"products": products,
    "components": components,
    "manufacturing": manufacturing_processes,
    "factories": factories,
    "transport_modes": transport_modes,
    "consumer_uses": consumer_uses,
    "grids": grids
    }


@company_routes.route('/products', methods=["POST"])
def add_product():
    # json_data = request.get_json()
    # print('components array productssssssss from backend route', json_data)
    # {'newProduct': {'name': 'aefdwe',
    # 'image_url': 'weR',
    # 'company_id': 1,
    # 'product_category':
    # 'WERer',
    # 'componentState': ['[object Object]'],
    # 'manufacturing_process_id': 0,
    # 'product_weight_g': '4',
    # 'package_weight_g': '4',
    # 'factory_id': 0,
    # 'unit': 0,
    # 'transport_mode_id': 0,
    # 'consumer_useState': ['[object Object]'],
    # 'number_of_cycles': 0,
    # 'returnable': 'true',
    # 'product_returned_percent': '4'}}
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        print("form.dataaaaaaaa", form.data)
        product = Product(
            name=form.data['name'],
            photo_url=form.data['photo_url'],
            company_id  = form.data[""],
            product_category = form.data["product_category"],
            manufacturing_process_id = form.data["manufacturing_process_id"],
            product_weight_g = form.data["product_weight_g"],
            unit = form.data["unit"],
            factory_id = form.data["factory_id"],
            package_weight_g = form.data["package_weight_g"],
            transport_mode_id = form.data["transport_mode_id"],
            number_of_cycles = form.data["number_of_cycles"],
            returnable = form.data["returnable"],
            product_returned_percent = form.data["product_returned_percent"],
            product_recycled_percent = form.data["product_recycled_percent"],
            carbon_footprint_kg = form.data["carbon_footprint_kg"],

        )
        db.session.add(product)
        db.session.commit()
        return product.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
