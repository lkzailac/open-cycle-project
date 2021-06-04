from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Company

company_routes = Blueprint('company', __name__)


@company_routes.route('/<int:id>')
@login_required
def company(id):
    company = Company.query.get(id)
    return company.to_dict()
