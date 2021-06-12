from app.models.component import Component
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
from app.models import Company
from app.models import Product

consumer_routes = Blueprint('consumer', __name__)


@consumer_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@consumer_routes.route('/<int:id>')
@login_required
def get_user_products(id):

    all_list = []
    companies = Company.query.all()
    for company in companies:
        company_dict = {}
        company_dict[company.name] = company.to_dict()
        prods = [prod.to_dict() for prod in company.products]
        company_dict["products"] = prods
        all_list.append(company_dict)

    # print("route id----------------", id)
    # user = User.query.get(id)
    return {"all": all_list}
