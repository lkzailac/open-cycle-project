from flask import Blueprint, jsonify
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


    # Company.query.get(id)
    # return company.to_dict()
