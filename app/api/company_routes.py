from flask import Blueprint, request
from flask_login import login_required
from app.models import Company
from app.models import Product

company_routes = Blueprint('company', __name__)


@company_routes.route('/<int:id>')
@login_required
def company(id):

    products_obj = Product.query.filter(Product.company_id == id).all()

    products = []

    for product in products_obj:
        products.append(product.to_dict())

    return {"products": products}


@company_routes.route('/products', methods=["POST"])
@login_required
def add_product():
    json_data = request.get_json()
    print('jsondata productssssssss from backend route', json_data)
    pass
