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
    product_weight_g = db.Column(db.Float)
    unit = db.Column(db.String)
    factory_id = db.Column(db.Integer, db.ForeignKey("factories.id"), nullable=False)
    package_weight_g = db.Column(db.Float)
    transport_mode_id = db.Column(db.Integer, db.ForeignKey("factories.id"))
    consumer_use_id = db.Column(db.Integer, db.ForeignKey("consumer_uses.id"))
    number_of_cycles = db.Column(db.Integer)
    returnable = db.Column(db.Boolean)
    product_returned_percent = db.Column(db.Float)
    product_recycled_percent = db.Column(db.Float)
    carbon_footprint_kg = db.Column(db.Float)

    company = db.Relationship("Company", back_populates="products")
    manufacturing_process = db.Relationship("Manufacturing_Process", back_populates="products")
    factory = db.Relationship("Factory", back_populates="products")
    transport_mode = db.Relationship("Transport_Mode", back_populates="products")
    consumer_uses = db.Relationship("Consumer_Use", back_populates="products")
    components = db.Relationship( "Component", secondary=component_table, back_populates="products")

    def to_dict(self):
        return {
            "id": self.id,
            "company_id": self.company_id,
            "product_category": self.product_category,
            "manufacturing_process_id": self.manufacturing_process_id,
            "product_weight_g" : self.product_weight_g,
            "unit": self.unit,
            "factory_id": self.factory_id,
            "package_weight_g": self.package_weight_g,
            "transport_mode_id": self.transport_mode_id,
            "consumer_use_id": self.consumer_use_id,
            "number_of_cycles": self.number_of_cycles,
            "returnable": self.returnable,
            "product_returned_percent": self.product_returned_percent,
            "product_recycled_percent": self.product_recycled_percent,
            "carbon_footprint_kg": self.carbon_footprint_kg,
        }
