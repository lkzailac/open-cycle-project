from app.models import base_user
from app.models.base_user import BaseUser
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime

class Company(BaseUser, UserMixin):
  __tablename__ = 'companies'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(40), nullable = False, unique = True)
  admin_email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  logo_url = db.Column(db.String(255))
  statement = db.Column(db.Text)
  warehouse_location = db.Column(db.String, nullable = False)
  products_sold = db.Column(db.Integer, nullable = False)
  carbon_goal = db.Column(db.Float)
  carbon_goal_date = db.Column(db.String)
  transparency_score = db.Column(db.Integer)
  c_footprint_mt = db.Column(db.Float)
  signup_date = db.Column(db.DateTime, default=datetime.datetime.now())


  products = db.relationship("Product", back_populates='company')

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "admin_email": self.admin_email,
      "logo_url": self.logo_url,
      "statement": self.statement,
      "warehouse_location": self.warehouse_location,
      "products_sold": self.products_sold,
      "carbon_goal": self.carbon_goal,
      "carbon_goal_date": self.carbon_goal_date,
      "transparency_score": self.transparency_score,
      "c_footprint_mt": self.c_footprint_mt,
      "signup_date": self.signup_date
    }
