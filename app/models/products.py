from .db import db

component_table = db.Table('component_table',
                            db.Column("component_id", db.Integer, db.ForeignKey("components.id")),
                            db.Column("product_id", db.Integer, db.ForeignKey("products.id"))
                            )


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer, db.ForeignKey("companies.id"), nullable=False)
    product_category = db.Column(db.String)
    manufacturing_process_id = db.Column(db.Integer, db.ForeignKey("manufacturing_processes.id"))



    manufacturing_process = db.Relationship("Manufacturing_Process", back_populates="products")
    components = db.Relationship( "Component", secondary=component_table, back_populates="products")
