
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
    json_data = request.get_json()


    # carbon_footprint_kg= json_data["newProduct"]["carbon_footprint_kg"]

    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        product = Product(
            name=json_data["newProduct"]['name'],
            photo_url=json_data["newProduct"]['photo_url'],
            company_id  = json_data["newProduct"]["company_id"],
            product_category = json_data["newProduct"]["product_category"],
            manufacturing_process_id = json_data["newProduct"]["manufacturing_process_id"],
            product_weight_g = json_data["newProduct"]["product_weight_g"],
            unit = json_data["newProduct"]["unit"],
            factory_id = json_data["newProduct"]["factory_id"],
            package_weight_g = json_data["newProduct"]["package_weight_g"],
            transport_mode_id = json_data["newProduct"]["transport_mode_id"],
            number_of_cycles = json_data["newProduct"]["number_of_cycles"],
            returnable = json_data["newProduct"]["returnable"],
            product_returned_percent = json_data["newProduct"]["product_returned_percent"],
            product_recycled_percent = json_data["newProduct"]["product_recycled_percent"],
            carbon_footprint_kg = json_data["newProduct"]["carbon_footprint_kg"]
        )

        db.session.add(product)
        db.session.commit()

        # get the latest product and Append the components and uses
        products = Product.query.all()
        latest_product = products[-1]

        comps_to_add = json_data["newProduct"]['compArray']

        for comp_id in comps_to_add:
            comp_to_add = Component.query.get(comp_id)
            latest_product.components.append(comp_to_add)

        uses_to_add = json_data["newProduct"]['useArray']

        db.session.add(latest_product)
        db.session.commit()

        products = Product.query.all()
        latest_product2 = products[-1]

        for use_id in uses_to_add:
            use_to_add = Consumer_Use.query.get(use_id)
            latest_product2.consumer_uses.append(use_to_add)

        db.session.add(latest_product2)
        db.session.commit()

        return latest_product2.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


"""
Delete a Product
"""
@company_routes.route('/products/<id>', methods=["DELETE"])
def remove_product(id):

    prod_to_delete = Product.query.get(id)
    db.session.delete(prod_to_delete)
    db.session.commit()
    return prod_to_delete.to_dict()



"""
Get one Product
"""
@company_routes.route('/products/<id>', methods=["GET"])
def load_product(id):

    product = Product.query.get(id)

    comps = []
    for comp in product.components:
        comps.append(comp.to_dict())
    prod_dict = product.to_dict()
    prod_dict["components"] = comps

    uses = []
    for use in product.consumer_uses:
        uses.append(use.to_dict())

    prod_dict["uses"] = uses

    return prod_dict



"""
Update a Product
"""
@company_routes.route('/products/<id>', methods=["POST"])
def update_product(id):
    json_data = request.get_json()
    try:
        prod = Product.query.filter(Product.id == id)
        prod.update(dict(json_data))
        db.session.commit()

        prod_update = Product.query.filter(Product.id == id)
        return prod_update.to_dict()

    except Exception as e:
        print("Failed to update product:", e)
